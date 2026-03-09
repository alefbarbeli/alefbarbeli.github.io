import { resolveLocalizedPortfolioDocs } from '~/utils/portfolio-content';

const KNOWN_LOCALES = [
  { code: 'br', language: 'pt-BR' },
  { code: 'en', language: 'en' }
];

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const locale = String(query.locale || 'br');

  const docs = await queryCollection(event, 'portfolio').all();
  const localized = resolveLocalizedPortfolioDocs(docs as Record<string, any>[], {
    locale,
    defaultLocale: 'br',
    locales: KNOWN_LOCALES
  });

  return localized;
});
