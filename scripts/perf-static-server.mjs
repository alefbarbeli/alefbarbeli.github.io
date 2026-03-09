#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, '.output', 'public');
const HOST = process.env.PERF_HOST || '127.0.0.1';
const PORT = Number(process.env.PERF_PORT || 4173);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.wasm': 'application/wasm',
  '.txt': 'text/plain; charset=utf-8'
};

function resolveFilePath(urlPath) {
  const cleaned = decodeURIComponent(urlPath.split('?')[0]).replace(/^\/+/, '');
  const candidate = path.join(PUBLIC_DIR, cleaned);

  if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
    return candidate;
  }

  if (fs.existsSync(candidate) && fs.statSync(candidate).isDirectory()) {
    const indexFile = path.join(candidate, 'index.html');
    if (fs.existsSync(indexFile)) return indexFile;
  }

  const withIndex = path.join(PUBLIC_DIR, cleaned, 'index.html');
  if (fs.existsSync(withIndex)) return withIndex;

  return path.join(PUBLIC_DIR, '200.html');
}

const server = http.createServer((req, res) => {
  const requestPath = req.url || '/';
  const filePath = resolveFilePath(requestPath);

  if (!fs.existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  res.writeHead(200, {
    'Content-Type': contentType,
    'Cache-Control': 'no-cache'
  });

  fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, HOST, () => {
  // eslint-disable-next-line no-console
  console.log(`[perf-server] serving ${PUBLIC_DIR} on http://${HOST}:${PORT}`);
});

function shutdown() {
  server.close(() => process.exit(0));
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
