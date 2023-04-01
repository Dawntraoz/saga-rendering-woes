// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'The website',
      titleTemplate: '%s - A Saga of Web Rendering Woes',
      meta: [
        { name: 'description', content: 'Website for @dawntraoz talk about web rendering modes, Jamstack architecture and "A series of unfortunate events" tv-show.' }
      ],
      htmlAttrs: {
        lang: 'en',
      },
      script: [
        { src: 'https://unpkg.com/ionicons@latest/dist/ionicons.js', body: true }
      ]
    }
  },
  css: [
    '@/assets/css/main.css',
  ],
  modules: ['@nuxtjs/tailwindcss'],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('ion-')
    }
  }
})
