export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/google-fonts'
  ],

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
    'assets/scss/animate.scss',
    'assets/scss/glitche-basic.scss',
    'assets/scss/glitche-layout.scss',
    // 'assets/scss/ionicons.scss',
    'assets/scss/magnific-popup.scss'
  ],

  compatibilityDate: '2024-11-11'
})
