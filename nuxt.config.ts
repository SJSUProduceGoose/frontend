import ElementPlus from 'unplugin-element-plus/vite'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@pinia/nuxt'],
  runtimeConfig: {
      public: {
          BASE_URL: 'http://localhost:8080',
      },
  },
  // meta
  meta: {
    link: [
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      },
      {
        rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'
      }
    ],
    title: 'Element Plus + Nuxt 3',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'ElementPlus + Nuxt3',
      },
    ],
  },

  // css
  css: ['~/assets/scss/index.scss'],

  // build
  build: {
    transpile: ['element-plus/es'],
  },

  typescript: {
    strict: true,
    shim: false,
  },

  vite: {
    plugins: [ElementPlus()],
  },

  // build modules
  modules: ['@vueuse/nuxt', '@unocss/nuxt', '@pinia/nuxt'],

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