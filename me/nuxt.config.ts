// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  experimental: {
    componentIslands: true,
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap' }
      ],
      title: 'Mohamed Mhiri',
      htmlAttrs: {
        lang: 'eng'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/color-mode', '@nuxt/image', '@nuxtjs/sitemap', '@nuxtjs/robots', 'nuxt-seo-utils', 'nuxt-jsonld', 'nuxt-schema-org'],
  site: {
    url: 'https://mohamedmhiri.onrender.com',
    name: 'Mohamed Mhiri'
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  runtimeConfig: {
    public: {
      publicApiUrl: process.env.PUBLIC_API_URL
    }
  }
})
