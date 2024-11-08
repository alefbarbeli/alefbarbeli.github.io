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
  }
})
