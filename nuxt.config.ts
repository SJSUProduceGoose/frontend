import ElementPlus from 'unplugin-element-plus/vite'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@pinia/nuxt'],
  runtimeConfig: {
      BASE_URL: 'http://localhost:8080/api',
      public: {
          BASE_URL: 'http://localhost:8080/api',
      },
  },
  // meta
  meta: {
    link: [
      // TODO: add favicon  
      // {
      //   rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'
      // }
      // ensure the the preflight is loaded before the main css
      { 
        rel: "prefetch stylesheet",
        href: "https://unpkg.com/tailwindcss@3.2.4/src/css/preflight.css",
      }
    ],
    title: 'Produce Goose',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Order fresh produce from the comfort of your own home from local, organic farms with a few clicks',
      },
    ],
  },

  // css
  css: [
    '~/assets/scss/index.scss',
  ],

  // build
  build: {
    transpile: ['element-plus/es'],
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/scss/element-ui/index.scss" as *;`,
        },
      },
    },
    plugins: [ElementPlus({
      useSource: true,
    })],
  },

  // build modules
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
  ],

  // auto import components
  components: true,

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  unocss: {
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2,
    },
  },
})