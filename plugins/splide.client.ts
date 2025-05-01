// plugins/splide.client.ts
import { defineNuxtPlugin } from '#app'
import '@splidejs/vue-splide/css/core'
import VueSplide from '@splidejs/vue-splide'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueSplide)
})
