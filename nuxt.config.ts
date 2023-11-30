// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/main.css'],
  modules: [['@storyblok/nuxt', {
    accessToken: "IabpqsFK2W9Ye8W0UyYMEQtt"
  }]
  ],
  srcDir: 'src',
})
