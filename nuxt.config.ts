export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    '@nuxt/image'
  ],

  i18n: {
    defaultLocale: 'br',
    locales: [
      {
        code: 'br',
        language: 'pt-BR',
        name: 'Português (Brasil)',
        file: 'pt-BR.json',
      },
      {
        code: 'en',
        language: 'en',
        name: 'English',
        file: 'en.json',
      },
    ],
    vueI18n: './i18n.config.ts',
    // strategy: 'no_prefix',
    lazy: true,
  },

  googleFonts: {
    families: {
      'Share Tech Mono': true
    },
    outputDir: 'assets'
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      }
    }
  },

  css: [
    'assets/scss/glitche-basic.scss',
    'assets/scss/glitche-layout.scss',
    'assets/scss/ionicons.scss',
  ],

  compatibilityDate: '2024-11-11'
})