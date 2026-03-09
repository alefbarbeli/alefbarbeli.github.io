export default defineNuxtConfig({
  modules: [
    '@nuxt/icon',
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
  ],
  icon: {
    clientBundle: {
      icons: [
        'lucide:calendar-days',
        'lucide:code-2',
        'lucide:github',
        'lucide:linkedin',
        'lucide:mail',
        'lucide:map-pin',
        'lucide:mouse',
        'lucide:phone',
        'lucide:search',
        'lucide:smartphone'
      ]
    }
  },

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
    // lazy: true,
  },

  googleFonts: {
    families: {
      'Share Tech Mono': true
    },
    outputDir: '~/assets'
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      }
    }
  },

  css: [
    '~/assets/scss/glitche-basic.scss',
    '~/assets/scss/glitche-layout.scss',
  ],

  runtimeConfig: {
    public: {
      enableSpeedInsights: false,
      klaviyo: {
        // .env
        // NUXT_PUBLIC_KLAVIYO_COMPANY_ID=<your-klaviyo-site-id>
        companyId: ''
      }
    },
  },


  compatibilityDate: '2024-11-11'
})
