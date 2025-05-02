<!-- components/ImageCarousel.vue -->
<template>
  <div class="relative overflow-hidden">
   <!--  <div class="absolute z-20 bg-gradient-to-br from-dark via-brand/60 to-brand-700/0 top-0 left-0 right-0 h-screen">
    </div> -->

    <div class="container absolute top-0 left-0 right-0  min-h-screen flex flex-col justify-center items-end z-30">
      <div class="max-w-[600px] w-full text-white ">
        <h1 class="text-4xl lg:text-7xl font-bold text-white">IT Total  Solution 
        </h1>
        <p class="mt-2 text-xl">designed to elevate  your technological landscape </p>

      </div>
    </div>
    <Splide ref="splide" :options="options">
      <SplideSlide v-for="(image, index) in images" :key="index" class="">
        <img :src="image" :alt="'Image ' + index" class="w-full h-screen object-cover fill-brand-500" />
      </SplideSlide>
    </Splide>
    <div
      class="flex items-center justify-between w-full px-6 gap-4 mt-4 absolute top-1/2 left-1/2 transform -translate-x-1/2  text-white z-40">
      <button @click="goPrev"><Icon name="iconoir:arrow-left" class="text-3xl" /></button>
      <button @click="goNext"> <Icon name="iconoir:arrow-right" class="text-3xl" /></button>
    </div>  
  </div>

</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'

const images = [
  '/img/slide-2.jpg',
  '/img/slide-4.jpg',
  '/img/slide-5.jpg',
]

const options = {
  type: 'loop',
  perPage: 1,
  autoplay: true,
  interval: 5000,
  pauseOnHover: false,
  arrows: false,
  pagination: false,
  speed: 1500,
  focus: 'center',
}

const splide = ref(null)
const currentSlide = ref(0)
const goPrev = () => splide.value?.go('<')
const goNext = () => splide.value?.go('>')
const goTo = (index) => splide.value?.go(index)
const onMoved = (newIndex) => {
  currentSlide.value = newIndex
}
</script>

<style scoped>
/* Optional custom styling */
.splide__slide.is-active img {
  @apply scale-110 duration-[7s];
}
</style>
