module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/portfolio',
        '/resume',
        '/contato'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
