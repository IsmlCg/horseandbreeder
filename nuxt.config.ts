// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  alias:{
    asserts:"<rootDi>/assets",
  },
  css:["~/assets/css/main.css"],
  serverMiddleware: [
        '~/server/api/**.ts'
      ],
  modules: ['@nuxt/content','@nuxtjs/tailwindcss'],
  postcss:{
    plugins:{
      autoprefixer:{}
    }
  },
  router: {
    base: '/horseandbreeder/',
  },
})
// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   devtools: { enabled: true },
//   modules: ['@nuxtjs/tailwindcss'],
//   //@ts-ignore
//   serverMiddleware: [
//     '~/api/index.js'
//   ],
//   ssr:false
// })
