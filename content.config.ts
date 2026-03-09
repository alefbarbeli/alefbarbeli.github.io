import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    portfolio: defineCollection({
      type: 'page',
      source: 'portfolio/**/*.md'
    }),
    sections: defineCollection({
      type: 'data',
      source: 'sections/*.json',
      schema: z.object({
        section: z.string(),
        items: z.record(z.string(), z.array(z.string()))
      })
    })
  }
})


