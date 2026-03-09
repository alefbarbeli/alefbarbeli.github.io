# Repository Guidelines

## Project Structure & Module Organization
This repository is a Nuxt 4 portfolio site.
- `app/`: main application code (`pages/`, `components/`, `assets/` for SCSS, fonts, and images).
- `content/`: Nuxt Content markdown entries (for example `content/portfolio/*.md`).
- `i18n/`: locale JSON files (`en.json`, `pt-BR.json`).
- `public/`: static assets served as-is (icons, PDFs, images).
- Root config: `nuxt.config.ts`, `content.config.ts`, `i18n.config.ts`, `tsconfig.json`.
- CI/CD: `.github/workflows/deploy.yml` builds and deploys to GitHub Pages.

## Build, Test, and Development Commands
Use Node 20+ and `pnpm` (lockfile is committed).
- `pnpm install`: install dependencies.
- `pnpm dev`: run local dev server at `http://localhost:3000`.
- `pnpm build`: create a production build.
- `pnpm preview`: preview the production build locally.
- `pnpm generate`: generate static output when needed.

CI currently runs `npm install` and `npx nuxt build --preset github_pages` on pushes to `main`.

## Coding Style & Naming Conventions
- Follow existing Vue SFC style: 2-space indentation and `<script setup>` where possible.
- Components use PascalCase filenames (for example `Header.vue`, `SectionResume.vue`).
- Pages use route-driven names (`index.vue`, `portfolio.vue`, `[...slug].vue`).
- Keep locale keys stable and grouped by feature in `i18n/locales/*.json`.
- Prefer TypeScript for script blocks/config updates when practical.

## Testing Guidelines
There is no dedicated test framework configured yet (`package.json` has no `test` script).
- Before opening a PR, run: `pnpm build` and `pnpm preview`.
- Manually verify key routes: `/`, `/portfolio`, `/contato`, and localized content.
- If you add complex logic, include a small reproducible check in the PR description until automated tests are introduced.

## Commit & Pull Request Guidelines
Recent history follows lightweight conventional prefixes:
- `feat: ...` for new functionality.
- `fix: ...` for bug fixes.
- Other short imperative messages are used for maintenance updates.

PRs should include:
- Clear summary of user-visible changes.
- Linked issue (if available).
- Screenshots/GIFs for UI updates.
- Notes about i18n/content changes and any deployment impact.
