import { queryCollection } from '#content/server';
import { createError, getQuery } from 'h3';

type SkillsContent = {
  section: string;
  items: Record<string, string[]>;
};

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const locale = typeof query.locale === 'string' ? query.locale : 'br';

  const doc = await queryCollection(event, 'sections')
    .where('section', '=', 'skills')
    .first() as SkillsContent | null;

  if (!doc) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Skills section not found'
    });
  }

  return doc.items[locale] ?? doc.items.br ?? [];
});
