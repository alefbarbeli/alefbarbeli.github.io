import { resolveLocalizedPortfolioDocBySlug } from '~/utils/portfolio-content';

const KNOWN_LOCALES = [
  { code: 'br', language: 'pt-BR' },
  { code: 'en', language: 'en' }
];

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug');
  const query = getQuery(event);
  const locale = String(query.locale || 'br');

  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: 'Missing slug' });
  }

  const docs = await queryCollection(event, 'portfolio').all();
  const localized = resolveLocalizedPortfolioDocBySlug(docs as Record<string, any>[], slug, {
    locale,
    defaultLocale: 'br',
    locales: KNOWN_LOCALES
  });

  if (!localized) {
    throw createError({ statusCode: 404, statusMessage: 'Portfolio item not found' });
  }

  return localized;
});
