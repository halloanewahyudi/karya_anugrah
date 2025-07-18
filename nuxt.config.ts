// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      baseUrl: process.env.WP_API_BASE_URL || 'https://localhost:3000'
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    'nuxt-marquee',
  ],
  plugins: ['~/plugins/splide.client.ts', '~/plugins/gsap.client.ts'],

  css: [
    '~/assets/style.css',
  ],
  googleFonts: {
    families: {
      'Inter': [100, 200, 300, 400, 500, 600, 700, 800, 900],
      'Noto Sans': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
})