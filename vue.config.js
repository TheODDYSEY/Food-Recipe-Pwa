const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://api.spoonacular.com/.*&sort=popularity'),
          handler: "CacheFirst",
          options: {
            cacheName: 'popular-recipes',
            expiration: {
              maxAgeSeconds: 7 * 24 * 60 * 60
            },
          }
        },
        {
          urlPattern: new RegExp('https://api\\.spoonacular\\.com/recipes/\\d+/information.*'),
          handler: "CacheFirst",
          options: {
            cacheName: 'recently-viewed',
            expiration: {
              maxEntries: 8
            },
          }
        }
      ]
    }
  }
})