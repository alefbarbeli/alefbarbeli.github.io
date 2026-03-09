#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

TMP_FILE="$(mktemp)"
trap 'rm -f "$TMP_FILE"' EXIT

rg -n \
  -e 'aria-label="[^"]+"' \
  -e 'data-text="[^"]+"' \
  -e '>[^<{[:space:]][^<{]*<' \
  app -g '*.vue' \
  > "$TMP_FILE" || true

# Allowlist for intentional non-translatable/static values.
grep -Ev \
  -e 'Alef Barbeli' \
  -e '>Alef<' \
  -e 'lang-separator">/<' \
  -e 'NuxtImg alt=""' \
  -e 'mailto:' \
  -e 'http(s)?://' \
  -e 'ion-social-' \
  -e '\$t\(' \
  -e 't\(' \
  -e '^\s*$' \
  "$TMP_FILE" > "$TMP_FILE.filtered" || true

if [[ -s "$TMP_FILE.filtered" ]]; then
  echo "[lint:i18n:text] Potential hardcoded UI text found:"
  cat "$TMP_FILE.filtered"
  exit 1
fi

echo "[lint:i18n:text] OK - no hardcoded UI text detected."
