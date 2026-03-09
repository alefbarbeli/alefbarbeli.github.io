#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();

function parseArgs(argv) {
  const args = {
    mode: 'archive',
    archiveDir: '',
    write: false,
    help: false,
    updatePt: false,
    token: process.env.LINKEDIN_ACCESS_TOKEN || '',
    linkedInVersion: process.env.LINKEDIN_VERSION || '202510',
    summaryMaxChars: 320
  };

  for (let i = 2; i < argv.length; i++) {
    const current = argv[i];
    const next = argv[i + 1];

    if (current === '--mode' && next) {
      args.mode = next;
      i++;
      continue;
    }

    if (current === '--archive' && next) {
      args.archiveDir = next;
      i++;
      continue;
    }

    if (current === '--token' && next) {
      args.token = next;
      i++;
      continue;
    }

    if (current === '--linkedin-version' && next) {
      args.linkedInVersion = next;
      i++;
      continue;
    }

    if (current === '--summary-max-chars' && next) {
      const parsed = Number(next);
      if (!Number.isNaN(parsed) && parsed > 50) {
        args.summaryMaxChars = parsed;
      }
      i++;
      continue;
    }

    if (current === '--write') {
      args.write = true;
      continue;
    }

    if (current === '--help' || current === '-h') {
      args.help = true;
      continue;
    }

    if (current === '--update-pt') {
      args.updatePt = true;
      continue;
    }
  }

  return args;
}

function die(message) {
  console.error(`\n[linkedin-sync] ${message}`);
  process.exit(1);
}

function printHelp() {
  console.log(`
LinkedIn sync utility

Usage:
  node scripts/linkedin-sync.mjs --mode archive --archive <linkedin-export-dir>
  node scripts/linkedin-sync.mjs --mode api --token <access-token>

Options:
  --mode <archive|api>       Data source mode. Default: archive
  --archive <dir>            Extracted LinkedIn export directory (archive mode)
  --token <token>            LinkedIn OAuth access token (api mode)
  --linkedin-version <ver>   LinkedIn REST version header. Default: 202510
  --summary-max-chars <n>    Max chars for about summary in locale files
  --update-pt                Also updates i18n/locales/pt-BR.json
  --write                    Persist changes (otherwise dry-run snapshot only)
  --help, -h                 Show this help
`);
}

function ensureFile(filePath) {
  if (!fs.existsSync(filePath)) {
    die(`Required file not found: ${filePath}`);
  }
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function toSentenceCase(input) {
  const text = String(input || '').trim();
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function compactText(text, maxChars) {
  const value = String(text || '').replace(/\s+/g, ' ').trim();
  if (value.length <= maxChars) return value;
  return `${value.slice(0, maxChars - 1)}…`;
}

function summaryToDescriptionItems(summary) {
  const raw = String(summary || '').replace(/\r\n/g, '\n').trim();
  if (!raw) return [];

  // Preferred split: explicit paragraph breaks.
  const explicitParagraphs = raw
    .split(/\n\s*\n+/)
    .map((item) => item.trim())
    .filter(Boolean);

  if (explicitParagraphs.length > 1) {
    const normalized = explicitParagraphs.map((item) => toSentenceCase(item));
    if (normalized.length > 1 && normalized[0].length <= 24) {
      normalized[1] = `${normalized[0]} ${normalized[1]}`.trim();
      normalized.shift();
    }
    return normalized;
  }

  // LinkedIn exports can flatten paragraphs and keep "double space" boundaries.
  const spacedParagraphs = raw
    .split(/\s{2,}/)
    .map((item) => item.trim())
    .filter(Boolean);

  if (spacedParagraphs.length > 1) {
    const normalized = spacedParagraphs.map((item) => toSentenceCase(item));
    if (normalized.length > 1 && normalized[0].length <= 24) {
      normalized[1] = `${normalized[0]} ${normalized[1]}`.trim();
      normalized.shift();
    }
    return normalized;
  }

  return [toSentenceCase(raw)];
}

function csvToRows(content) {
  const rows = [];
  let row = [];
  let cell = '';
  let inQuotes = false;

  for (let i = 0; i < content.length; i++) {
    const ch = content[i];
    const next = content[i + 1];

    if (ch === '"') {
      if (inQuotes && next === '"') {
        cell += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (ch === ',' && !inQuotes) {
      row.push(cell);
      cell = '';
      continue;
    }

    if ((ch === '\n' || ch === '\r') && !inQuotes) {
      if (ch === '\r' && next === '\n') i++;
      row.push(cell);
      cell = '';
      if (row.some((value) => String(value).trim() !== '')) {
        rows.push(row);
      }
      row = [];
      continue;
    }

    cell += ch;
  }

  if (cell.length || row.length) {
    row.push(cell);
    if (row.some((value) => String(value).trim() !== '')) {
      rows.push(row);
    }
  }

  if (!rows.length) return [];

  const headers = rows[0].map((h) => String(h || '').replace(/^\uFEFF/, '').trim());
  const dataRows = rows.slice(1);

  return dataRows.map((values) => {
    const out = {};
    headers.forEach((header, index) => {
      out[header] = String(values[index] || '').trim();
    });
    return out;
  });
}

function readCsv(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return csvToRows(raw);
}

function walkFiles(dirPath, bucket = []) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      walkFiles(fullPath, bucket);
    } else {
      bucket.push(fullPath);
    }
  }
  return bucket;
}

function findFirstMatchingFile(rootDir, patterns) {
  const allFiles = walkFiles(rootDir);
  return allFiles.find((filePath) => patterns.some((regex) => regex.test(path.basename(filePath)))) || '';
}

function pick(record, aliases) {
  if (!record) return '';
  for (const key of aliases) {
    const value = record[key];
    if (value && String(value).trim()) {
      return String(value).trim();
    }
  }
  return '';
}

function parseArchive(archiveDir) {
  if (!archiveDir) {
    die('Archive mode requires --archive <path-to-extracted-linkedin-export>.');
  }

  const absolute = path.isAbsolute(archiveDir) ? archiveDir : path.join(ROOT, archiveDir);
  if (!fs.existsSync(absolute)) {
    die(`Archive directory does not exist: ${absolute}`);
  }

  const profileFile = findFirstMatchingFile(absolute, [/^profile.*\.csv$/i, /^member.*profile.*\.csv$/i]);
  const positionsFile = findFirstMatchingFile(absolute, [/^positions.*\.csv$/i, /^experience.*\.csv$/i]);
  const educationFile = findFirstMatchingFile(absolute, [/^education.*\.csv$/i, /^educations.*\.csv$/i]);
  const skillsFile = findFirstMatchingFile(absolute, [/^skills.*\.csv$/i]);

  const profileRows = profileFile ? readCsv(profileFile) : [];
  const positionsRows = positionsFile ? readCsv(positionsFile) : [];
  const educationRows = educationFile ? readCsv(educationFile) : [];
  const skillsRows = skillsFile ? readCsv(skillsFile) : [];

  const profile = profileRows[0] || {};

  const fullName = [
    pick(profile, ['First Name', 'FirstName', 'Given Name']),
    pick(profile, ['Last Name', 'LastName', 'Family Name'])
  ].filter(Boolean).join(' ').trim();

  const headline = pick(profile, ['Headline', 'Current Position', 'Current Position Title']);
  const summary = pick(profile, ['Summary', 'About']);
  const location = pick(profile, ['Location', 'Geo Location', 'GeoLocation']);

  const experiences = positionsRows
    .map((row) => {
      const company = pick(row, ['Company Name', 'Company', 'Organization Name']);
      const title = pick(row, ['Title', 'Position', 'Role']);
      const startedOn = pick(row, ['Started On', 'Start Date', 'From']);
      const finishedOn = pick(row, ['Finished On', 'End Date', 'To']);
      const date = [startedOn, finishedOn || 'Present'].filter(Boolean).join(' - ');
      const rowLocation = pick(row, ['Location', 'Geo Location']);
      const description = pick(row, ['Description', 'Position Description']);

      if (!company && !title) return null;

      return {
        name: [company, title].filter(Boolean).join(' - '),
        date,
        location: rowLocation,
        description,
        skills: []
      };
    })
    .filter(Boolean);

  const education = educationRows
    .map((row) => {
      const school = pick(row, ['School Name', 'School', 'Institution']);
      const degree = pick(row, ['Degree Name', 'Degree']);
      const field = pick(row, ['Field Of Study', 'Field of Study', 'Field']);
      const startedOn = pick(row, ['Started On', 'Start Date', 'From']);
      const finishedOn = pick(row, ['Finished On', 'End Date', 'To']);

      if (!school && !degree && !field) return null;

      return {
        date: [startedOn, finishedOn].filter(Boolean).join(' - '),
        name: [degree, school].filter(Boolean).join(' - '),
        description: field
      };
    })
    .filter(Boolean);

  const skills = skillsRows
    .map((row) => pick(row, ['Name', 'Skill Name', 'Skill']))
    .filter(Boolean);

  return {
    source: {
      mode: 'archive',
      archivePath: absolute,
      files: {
        profileFile,
        positionsFile,
        educationFile,
        skillsFile
      }
    },
    profile: {
      fullName,
      headline,
      summary,
      location
    },
    experiences,
    education,
    skills
  };
}

async function parseFromApi(token, linkedInVersion) {
  if (!token) {
    die('API mode requires --token <linkedin-access-token> or LINKEDIN_ACCESS_TOKEN env var.');
  }

  const headers = {
    Authorization: `Bearer ${token}`
  };

  let basic = null;
  let extended = null;

  const userInfoResponse = await fetch('https://api.linkedin.com/v2/userinfo', {
    headers
  });

  if (userInfoResponse.ok) {
    basic = await userInfoResponse.json();
  } else {
    const body = await userInfoResponse.text();
    die(`LinkedIn /v2/userinfo failed (${userInfoResponse.status}): ${body}`);
  }

  const extendedResponse = await fetch('https://api.linkedin.com/rest/identityMe', {
    headers: {
      ...headers,
      'LinkedIn-Version': linkedInVersion
    }
  });

  if (extendedResponse.ok) {
    extended = await extendedResponse.json();
  }

  return {
    source: {
      mode: 'api',
      linkedInVersion,
      endpoint: '/v2/userinfo + /rest/identityMe'
    },
    profile: {
      fullName: [basic?.given_name, basic?.family_name].filter(Boolean).join(' ').trim(),
      headline: extended?.primaryCurrentExperience?.title || '',
      summary: '',
      location: extended?.primaryCurrentExperience?.location?.country || ''
    },
    experiences: [],
    education: [],
    skills: []
  };
}

function updateLocale(localeJson, normalized, options) {
  const next = structuredClone(localeJson);

  const fullName = normalized.profile.fullName || next?.about?.info?.valueName || '';
  const headline = normalized.profile.headline || next?.about?.info?.valueJob || '';
  const location = normalized.profile.location || next?.about?.info?.valueLocation || '';
  const summary = normalized.profile.summary || '';

  if (next?.about?.info) {
    next.about.info.valueName = fullName;
    next.about.info.valueJob = headline;
    next.about.info.valueLocation = location;
  }

  if (next?.about?.description && Array.isArray(next.about.description) && summary) {
    const items = summaryToDescriptionItems(summary);
    if (items.length) {
      next.about.description = items;
    }
  }

  if (next?.resume) {
    if (Array.isArray(normalized.experiences) && normalized.experiences.length) {
      next.resume.experiences = normalized.experiences;
    }

    if (Array.isArray(normalized.education) && normalized.education.length) {
      next.resume.education = normalized.education;
    }
  }

  if (next?.home?.items && Array.isArray(next.home.items)) {
    if (location) next.home.items[0] = location;
    if (headline) next.home.items[1] = headline;
  }

  return next;
}

function updateSkillsJson(skillsJson, normalized) {
  const next = structuredClone(skillsJson);
  const deduped = Array.from(new Set((normalized.skills || []).map((item) => item.trim()).filter(Boolean)));

  if (!deduped.length) {
    return next;
  }

  if (!next.items) next.items = {};

  next.items.en = deduped;

  if (!next.items.br || !Array.isArray(next.items.br) || !next.items.br.length) {
    next.items.br = deduped;
  }

  return next;
}

function printSummary(normalized) {
  console.log('\n[linkedin-sync] Parsed data summary:');
  console.log(`- Source mode: ${normalized.source.mode}`);
  if (normalized.profile.fullName) console.log(`- Full name: ${normalized.profile.fullName}`);
  if (normalized.profile.headline) console.log(`- Headline: ${normalized.profile.headline}`);
  if (normalized.profile.location) console.log(`- Location: ${normalized.profile.location}`);
  console.log(`- Experiences: ${normalized.experiences.length}`);
  console.log(`- Education items: ${normalized.education.length}`);
  console.log(`- Skills: ${normalized.skills.length}`);
}

async function main() {
  const args = parseArgs(process.argv);
  if (args.help) {
    printHelp();
    return;
  }

  if (!['archive', 'api'].includes(args.mode)) {
    die(`Invalid --mode "${args.mode}". Use "archive" or "api".`);
  }

  const enPath = path.join(ROOT, 'i18n/locales/en.json');
  const ptPath = path.join(ROOT, 'i18n/locales/pt-BR.json');
  const skillsPath = path.join(ROOT, 'content/sections/skills.json');
  const outputSnapshotPath = path.join(ROOT, 'scripts/.linkedin-sync.latest.json');

  ensureFile(enPath);
  ensureFile(skillsPath);

  const normalized = args.mode === 'api'
    ? await parseFromApi(args.token, args.linkedInVersion)
    : parseArchive(args.archiveDir);

  printSummary(normalized);

  if (!args.write) {
    writeJson(outputSnapshotPath, normalized);
    console.log(`\n[linkedin-sync] Dry run only. Snapshot written to ${outputSnapshotPath}`);
    console.log('[linkedin-sync] Use --write to update project files.');
    return;
  }

  const enJson = readJson(enPath);
  const nextEn = updateLocale(enJson, normalized, args);
  writeJson(enPath, nextEn);

  if (args.updatePt && fs.existsSync(ptPath)) {
    const ptJson = readJson(ptPath);
    const nextPt = updateLocale(ptJson, normalized, args);
    writeJson(ptPath, nextPt);
  }

  const skillsJson = readJson(skillsPath);
  const nextSkills = updateSkillsJson(skillsJson, normalized);
  writeJson(skillsPath, nextSkills);

  writeJson(outputSnapshotPath, normalized);

  console.log('\n[linkedin-sync] Updated files:');
  console.log(`- ${path.relative(ROOT, enPath)}`);
  if (args.updatePt) console.log(`- ${path.relative(ROOT, ptPath)}`);
  console.log(`- ${path.relative(ROOT, skillsPath)}`);
  console.log(`- ${path.relative(ROOT, outputSnapshotPath)}`);
}

main().catch((error) => {
  console.error('\n[linkedin-sync] Unexpected error:', error);
  process.exit(1);
});
