// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
$development:{
  devtools: { enabled: false },
},
css: ['~/assets/main.css'],

  compatibilityDate: '2024-04-03',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
  ],
  app:{
    head: {
      title: "IphoneShop",
      charset: "utf-8",

    }
  },

  postcss:{
    plugins:{
      autoprefixer: {}
    }
  },

  i18n: {
    vueI18n: './i18n.config.ts' 
  },

  routeRules: {
    '/index': { prerender: true, swr: true },
    '/laptops/**': { swr: true },
    '/phones/**': { swr: true }
  }

})