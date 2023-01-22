// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        { src: 'https://unpkg.com/ionicons@latest/dist/ionicons.js', body: true }
      ]
    }
  },
  css: [
    '@/assets/css/main.css',
  ],
  modules: ['@nuxtjs/tailwindcss']
})
