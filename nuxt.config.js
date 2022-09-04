import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  // Global page headers (https://go.nuxtjs.dev/config-head)
  app: {
    head: {
      title: 'nuxewind',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "~/assets/scss/app.scss",
    "~/assets/scss/icons.scss",
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  //   // https://go.nuxtjs.dev/tailwindcss
  //   '@nuxtjs/fontawesome',
    '@nuxtjs/google-fonts',
  //   '@nuxtjs/color-mode'
  ],

  modules: [
    '@unocss/nuxt',
  ],


  // Google fonts config
  googleFonts: {
    families: {
      Quicksand: true,
    }
  },
})