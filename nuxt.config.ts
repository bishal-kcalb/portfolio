export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    "nuxt-aos",
    //  "@nuxt/ui"
  ],

  

  css: [
    '~/assets/css/main.css',
  ],

  app: {
    baseURL:"/portfolio/",
    head: {
      title: 'Bishal Ghimire',
      meta: [
        { name: 'description', content: 'Bishal Ghimire portfolio website showcasing creative work of blockchain and skills' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Make sure plugins are properly loaded
  plugins: [
    '~/plugins/three-background.client.js'
  ],

  // For better debugging
  vite: {
    build: {
      minify: false,
    },
    // Ensure Three.js works correctly
    optimizeDeps: {
      include: ['three', 'gsap']
    }
  },

  compatibilityDate: '2025-03-22'
})