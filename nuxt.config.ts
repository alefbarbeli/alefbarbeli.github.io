export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      'Share Tech Mono': true
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      }
    }
  }
})
