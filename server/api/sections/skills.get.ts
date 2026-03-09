type SkillsDoc = {
  items?: Record<string, string[]>;
};

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const locale = String(query.locale || 'br');
  const languageOnly = locale.split('-')[0];

  const doc = await queryCollection(event, 'sections').where('section', '=', 'skills').first();
  const typedDoc = (doc || {}) as SkillsDoc;
  const items = typedDoc.items || {};

  return {
    items: {
      [locale]: items[locale] || items[languageOnly] || items.br || []
    }
  };
});
