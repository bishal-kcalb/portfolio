export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    "nuxt-aos",
  ],

  css: [
    '~/assets/css/main.css',
  ],

  app: {
    head: {
      title: 'Modern 3D Portfolio',
      meta: [
        { name: 'description', content: 'A modern 3D portfolio website showcasing creative work and skills' }
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