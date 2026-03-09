# Content v2 Minimal Starter

Look at the [Content documentation](https://content-v2.nuxtjs.org/) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment) for more information.

## LinkedIn Profile Sync

This project includes a manual sync script to refresh portfolio data from LinkedIn:

- Script: `scripts/linkedin-sync.mjs`
- Safe default: dry-run (creates snapshot only)
- Write mode: updates local content/i18n files

### Why two modes?

LinkedIn public APIs are restricted for most apps. Full resume data (experience, education, skills) is usually not available via standard developer access.

Because of that, this script supports:

1. `archive` mode (recommended): parse your official LinkedIn Data Export (`.csv` files).
2. `api` mode (limited): fetch what is available from LinkedIn API tokens.

### 1) Archive mode (recommended)

1. In LinkedIn, go to `Settings & Privacy` -> `Data privacy` -> `Get a copy of your data`.
2. Select the export option that includes profile/resume data (CSV), then request the archive.
3. When LinkedIn sends the download link, download the `.zip` file.
4. Extract the `.zip` into a local folder, for example `./export`.
5. Confirm there are files inside (your folder cannot be empty):

```bash
find ./export -type f | head
```

6. Run dry-run:

```bash
pnpm linkedin:sync --mode archive --archive /path/to/extracted/linkedin-export
```

7. If the parsed summary looks good, write changes:

```bash
pnpm linkedin:sync:write --mode archive --archive /path/to/extracted/linkedin-export --update-pt
```

Updated files:
- `i18n/locales/en.json`
- `i18n/locales/pt-BR.json` (only with `--update-pt`)
- `content/sections/skills.json`
- snapshot: `scripts/.linkedin-sync.latest.json`

If the summary returns all zeros (`Experiences: 0`, `Education items: 0`, `Skills: 0`), the export folder is usually empty or the extraction path is incorrect.

### 2) API mode (limited fields)

You need a valid LinkedIn OAuth access token:

```bash
pnpm linkedin:sync --mode api --token "$LINKEDIN_ACCESS_TOKEN"
pnpm linkedin:sync:write --mode api --token "$LINKEDIN_ACCESS_TOKEN"
```

Optional:
- `--linkedin-version 202510`
- `--summary-max-chars 320`

### Help

```bash
pnpm linkedin:sync --help
```

## Portfolio Posts i18n

Portfolio posts support localized variants with automatic locale resolution and fallback.

Supported structures:

1. Filename suffix:
   - `content/portfolio/cenas-nitrogen.md` (default)
   - `content/portfolio/cenas-nitrogen.pt-BR.md`
   - `content/portfolio/cenas-nitrogen.en.md`

2. Locale folders:
   - `content/portfolio/pt-BR/cenas-nitrogen.md`
   - `content/portfolio/en/cenas-nitrogen.md`

Route stays the same for all locales:
- `/portfolio/cenas-nitrogen`

Resolution strategy:
- Uses the current app locale first.
- Falls back to language-level match (for example `pt` from `pt-BR`).
- Falls back to default locale version.
- Falls back to base/default file (no locale suffix).

## i18n Hardcoded Text Lint

To avoid new hardcoded UI text in Vue templates, use:

```bash
pnpm lint:i18n:text
```

This script scans `app/**/*.vue` and fails if it finds probable hardcoded captions/labels that should be translated.

Script file:
- `scripts/lint-i18n-text.sh`

Current behavior:
- Checks visible text nodes and common attributes like `aria-label` and `data-text`.
- Ignores allowlisted intentional values (for example brand name, separators, URLs/icons).

If you get false positives, update the allowlist patterns in:
- `scripts/lint-i18n-text.sh`

## Performance Audits (Lighthouse)

This project includes a repeatable Lighthouse workflow with local reports and deltas vs previous run.

### Run full audit baseline

```bash
pnpm perf:run
```

What this does:
- Builds the app for GitHub Pages preset
- Serves static output on `http://127.0.0.1:4173`
- Audits key routes with Lighthouse
- Saves reports under `lighthouse-reports/<timestamp>/`
- Updates:
  - `lighthouse-reports/latest-summary.json`
  - `lighthouse-reports/latest-summary.md`

### Run only lighthouse against an already running server

```bash
pnpm perf:lighthouse
```

Custom routes/base URL:

```bash
pnpm perf:lighthouse -- --base-url http://127.0.0.1:4173 --routes /,/en,/portfolio
```

### Report files

- Per-route HTML and JSON reports
- `summary.md` with score table and route-level deltas against the previous run
- `latest-summary.md` always points to the most recent run so comparisons are automatic on next execution

Reports are ignored by git (`lighthouse-reports` in `.gitignore`) so you can compare locally over time.
