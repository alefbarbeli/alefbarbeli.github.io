#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import lighthouse from 'lighthouse';
import { chromium } from '@playwright/test';

const DEFAULT_BASE_URL = process.env.LH_BASE_URL || 'http://127.0.0.1:4173';
const DEFAULT_ROUTES = [
  '/',
  '/en',
  '/portfolio',
  '/en/portfolio',
  '/contato',
  '/en/contato',
  '/portfolio/cenas-nitrogen',
  '/en/portfolio/cenas-nitrogen'
];

function parseArgs(argv) {
  const args = {
    baseUrl: DEFAULT_BASE_URL,
    routes: [...DEFAULT_ROUTES]
  };

  for (let i = 2; i < argv.length; i++) {
    const current = argv[i];
    const next = argv[i + 1];

    if (current === '--base-url' && next) {
      args.baseUrl = next;
      i++;
      continue;
    }

    if (current === '--routes' && next) {
      args.routes = next.split(',').map((item) => item.trim()).filter(Boolean);
      i++;
      continue;
    }
  }

  return args;
}

function scoreOf(value) {
  return Math.round(Number(value || 0) * 100);
}

function metricValue(audits, key, fallback = 0) {
  return Number(audits?.[key]?.numericValue ?? fallback);
}

function formatMs(value) {
  if (!Number.isFinite(value)) return '-';
  return `${Math.round(value)}ms`;
}

function sanitizeRoute(route) {
  if (route === '/') return 'root';
  return route
    .replace(/^\//, '')
    .replace(/\//g, '__')
    .replace(/[^a-zA-Z0-9_\-]/g, '_');
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function loadPreviousSummary(rootDir) {
  const latestFile = path.join(rootDir, 'lighthouse-reports', 'latest-summary.json');
  if (!fs.existsSync(latestFile)) return null;
  try {
    return JSON.parse(fs.readFileSync(latestFile, 'utf8'));
  } catch {
    return null;
  }
}

function createMarkdownSummary(run, previousRun) {
  const lines = [];
  lines.push(`# Lighthouse Summary`);
  lines.push('');
  lines.push(`- Timestamp: ${run.timestamp}`);
  lines.push(`- Base URL: ${run.baseUrl}`);
  lines.push(`- Routes: ${run.routes.length}`);
  lines.push('');
  lines.push('| Route | Perf | Acc | Best | SEO | LCP | TBT | CLS |');
  lines.push('|---|---:|---:|---:|---:|---:|---:|---:|');

  for (const item of run.routes) {
    lines.push(
      `| \`${item.route}\` | ${item.scores.performance} | ${item.scores.accessibility} | ${item.scores.bestPractices} | ${item.scores.seo} | ${formatMs(item.metrics.lcp)} | ${formatMs(item.metrics.tbt)} | ${item.metrics.cls.toFixed(3)} |`
    );
  }

  if (previousRun?.routes?.length) {
    const prevMap = new Map(previousRun.routes.map((item) => [item.route, item]));
    lines.push('');
    lines.push('## Delta vs Previous Run');
    lines.push('');
    lines.push('| Route | Perf Δ | LCP Δ | TBT Δ | CLS Δ |');
    lines.push('|---|---:|---:|---:|---:|');

    for (const item of run.routes) {
      const prev = prevMap.get(item.route);
      if (!prev) continue;
      const deltaPerf = item.scores.performance - prev.scores.performance;
      const deltaLcp = item.metrics.lcp - prev.metrics.lcp;
      const deltaTbt = item.metrics.tbt - prev.metrics.tbt;
      const deltaCls = item.metrics.cls - prev.metrics.cls;
      lines.push(
        `| \`${item.route}\` | ${deltaPerf >= 0 ? '+' : ''}${deltaPerf} | ${deltaLcp >= 0 ? '+' : ''}${Math.round(deltaLcp)}ms | ${deltaTbt >= 0 ? '+' : ''}${Math.round(deltaTbt)}ms | ${deltaCls >= 0 ? '+' : ''}${deltaCls.toFixed(3)} |`
      );
    }
  }

  return lines.join('\n');
}

async function runAuditForRoute(baseUrl, route, outDir, lighthousePort) {
  const url = new URL(route, baseUrl).toString();
  const routeName = sanitizeRoute(route);
  const htmlPath = path.join(outDir, `${routeName}.report.html`);
  const jsonPath = path.join(outDir, `${routeName}.report.json`);

  const result = await lighthouse(url, {
    port: lighthousePort,
    output: ['json', 'html'],
    logLevel: 'error',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo']
  });

  const [jsonReport, htmlReport] = result.report;
  fs.writeFileSync(jsonPath, jsonReport, 'utf8');
  fs.writeFileSync(htmlPath, htmlReport, 'utf8');

  const lhr = result.lhr;
  return {
    route,
    url,
    files: {
      html: path.relative(process.cwd(), htmlPath),
      json: path.relative(process.cwd(), jsonPath)
    },
    scores: {
      performance: scoreOf(lhr.categories.performance?.score),
      accessibility: scoreOf(lhr.categories.accessibility?.score),
      bestPractices: scoreOf(lhr.categories['best-practices']?.score),
      seo: scoreOf(lhr.categories.seo?.score)
    },
    metrics: {
      lcp: metricValue(lhr.audits, 'largest-contentful-paint'),
      tbt: metricValue(lhr.audits, 'total-blocking-time'),
      cls: Number(lhr.audits?.['cumulative-layout-shift']?.numericValue || 0)
    }
  };
}

async function main() {
  const args = parseArgs(process.argv);
  const rootDir = process.cwd();
  const reportsRoot = path.join(rootDir, 'lighthouse-reports');
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const runDir = path.join(reportsRoot, timestamp);
  const previousSummary = loadPreviousSummary(rootDir);

  ensureDir(runDir);

  const lighthousePort = Number(process.env.LH_PORT || 9222);
  const results = [];
  const browser = await chromium.launch({
    headless: true,
    args: [
      `--remote-debugging-port=${lighthousePort}`,
      '--no-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu'
    ]
  });

  try {
    for (const route of args.routes) {
      // eslint-disable-next-line no-console
      console.log(`[lighthouse] auditing ${route}`);
      const routeResult = await runAuditForRoute(args.baseUrl, route, runDir, lighthousePort);
      results.push(routeResult);
    }
  } finally {
    await browser.close();
  }

  const summary = {
    timestamp,
    baseUrl: args.baseUrl,
    routes: results
  };

  const summaryPath = path.join(runDir, 'summary.json');
  fs.writeFileSync(summaryPath, `${JSON.stringify(summary, null, 2)}\n`, 'utf8');

  const markdown = createMarkdownSummary(summary, previousSummary);
  const markdownPath = path.join(runDir, 'summary.md');
  fs.writeFileSync(markdownPath, `${markdown}\n`, 'utf8');

  fs.writeFileSync(path.join(reportsRoot, 'latest-summary.json'), `${JSON.stringify(summary, null, 2)}\n`, 'utf8');
  fs.writeFileSync(path.join(reportsRoot, 'latest-summary.md'), `${markdown}\n`, 'utf8');

  // eslint-disable-next-line no-console
  console.log(`\n[lighthouse] run complete: ${path.relative(rootDir, runDir)}`);
  // eslint-disable-next-line no-console
  console.log(`[lighthouse] latest summary: lighthouse-reports/latest-summary.md`);
}

main().catch((error) => {
  // eslint-disable-next-line no-console
  console.error('[lighthouse] failed:', error);
  process.exit(1);
});
