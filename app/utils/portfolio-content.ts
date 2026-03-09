type LocaleInput = string | { code?: string; language?: string } | null | undefined;

type LocaleOptions = {
  locale: string;
  defaultLocale?: string;
  locales?: LocaleInput[];
};

type GenericRecord = Record<string, any>;

function parseJsonIfNeeded<T = GenericRecord>(value: unknown, fallback: T): T {
  if (!value) return fallback;
  if (typeof value === 'string') {
    try {
      return JSON.parse(value) as T;
    } catch {
      return fallback;
    }
  }
  return value as T;
}

function normalizeTag(value?: string | null): string {
  return String(value || '').trim().toLowerCase();
}

function getLocaleObject(locales: LocaleInput[] | undefined, code: string) {
  return (locales || []).find((item) => typeof item === 'object' && item?.code === code) as
    | { code?: string; language?: string }
    | undefined;
}

function buildLocalePreference(options: LocaleOptions) {
  const current = getLocaleObject(options.locales, options.locale);
  const fallback = getLocaleObject(options.locales, options.defaultLocale || '');

  const values = [
    options.locale,
    current?.language,
    current?.language?.split('-')[0],
    'default',
    options.defaultLocale,
    fallback?.language,
    fallback?.language?.split('-')[0]
  ]
    .map((item) => normalizeTag(item))
    .filter(Boolean);

  return Array.from(new Set(values));
}

function detectLocaleLike(value?: string | null): boolean {
  return /^[a-z]{2}(?:-[a-z]{2})?$/i.test(String(value || '').trim());
}

export function getPortfolioIdentity(pathValue: string) {
  const cleanPath = String(pathValue || '').replace(/^\/+|\/+$/g, '');
  const parts = cleanPath.split('/').filter(Boolean);

  let folderLocale = '';
  if (parts.length >= 3 && detectLocaleLike(parts[1])) {
    folderLocale = parts[1];
  }

  const rawSlug = parts[parts.length - 1] || '';
  const slugSuffixMatch = rawSlug.match(/^(.*)\.([a-z]{2}(?:-[a-z]{2})?)$/i);

  if (slugSuffixMatch) {
    return {
      baseSlug: slugSuffixMatch[1],
      localeTag: normalizeTag(slugSuffixMatch[2])
    };
  }

  return {
    baseSlug: rawSlug,
    localeTag: folderLocale ? normalizeTag(folderLocale) : 'default'
  };
}

export function normalizePortfolioDoc(doc: GenericRecord) {
  const normalized = { ...doc };
  const meta = parseJsonIfNeeded<GenericRecord>(doc?.meta, {});
  const body = parseJsonIfNeeded<GenericRecord | null>(doc?.body, null);
  const identity = getPortfolioIdentity(doc?.path || doc?._path || '');

  normalized.meta = meta;
  normalized.body = body;
  normalized.baseSlug = identity.baseSlug;
  normalized.localeTag = identity.localeTag;
  normalized.path = `/portfolio/${identity.baseSlug}`;

  if (!normalized.title && meta.title) normalized.title = meta.title;
  if (!normalized.description && meta.description) normalized.description = meta.description;
  if (!normalized.image && meta.image) normalized.image = meta.image;
  if (!normalized.category && meta.category) normalized.category = meta.category;
  if (!normalized.stack && meta.stack) normalized.stack = meta.stack;
  if (!normalized.tags && meta.tags) normalized.tags = meta.tags;
  if (!normalized.projectUrl && meta.projectUrl) normalized.projectUrl = meta.projectUrl;
  if (!normalized.date && meta.date) normalized.date = meta.date;
  if (typeof normalized.featured === 'undefined' && typeof meta.featured !== 'undefined') {
    normalized.featured = meta.featured;
  }

  return normalized;
}

function getLocaleScore(localeTag: string, preference: string[]) {
  const normalized = normalizeTag(localeTag);
  const languageOnly = normalized.split('-')[0];

  for (let i = 0; i < preference.length; i++) {
    const pref = preference[i];
    if (!pref) continue;
    if (pref === normalized) return i;
    if (pref.split('-')[0] === languageOnly) return i + 0.2;
  }

  return Number.POSITIVE_INFINITY;
}

export function resolveLocalizedPortfolioDocs(docs: GenericRecord[], options: LocaleOptions) {
  const preference = buildLocalePreference(options);
  const normalizedDocs = docs.map(normalizePortfolioDoc);
  const grouped = new Map<string, GenericRecord[]>();

  for (const doc of normalizedDocs) {
    const key = String(doc.baseSlug || '');
    if (!key) continue;
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key)?.push(doc);
  }

  const selected: GenericRecord[] = [];

  for (const [, variants] of grouped) {
    const sorted = [...variants].sort((a, b) => {
      const scoreA = getLocaleScore(a.localeTag, preference);
      const scoreB = getLocaleScore(b.localeTag, preference);
      if (scoreA !== scoreB) return scoreA - scoreB;
      return String(b.date || '').localeCompare(String(a.date || ''));
    });

    if (sorted[0]) selected.push(sorted[0]);
  }

  return selected.sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
}

export function resolveLocalizedPortfolioDocBySlug(
  docs: GenericRecord[],
  slug: string,
  options: LocaleOptions
) {
  const targetSlug = String(slug || '').trim().replace(/^\/+|\/+$/g, '').replace(/^portfolio\//, '');
  const normalizedTarget = getPortfolioIdentity(`/portfolio/${targetSlug}`).baseSlug;
  const selectedDocs = resolveLocalizedPortfolioDocs(docs, options);
  return selectedDocs.find((item) => item.baseSlug === normalizedTarget) || null;
}
