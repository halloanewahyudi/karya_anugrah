<!-- components/ImageCarousel.vue -->
<template>
  <div>
    <div v-if="status === 'pending'" class="flex justify-center items-center py-40">
      <Icon
        name="line-md:loading-twotone-loop"
        class="text-5xl text-brand animate-spin"
      />
    </div>
    <div v-else-if="error">Failed to load posts</div>
    <div v-else>
    
  <div class="relative overflow-hidden">
    <!--  <div class="absolute z-20 bg-gradient-to-br from-dark via-brand/60 to-brand-700/0 top-0 left-0 right-0 h-screen">
    </div> -->
    <Splide ref="splide" :options="options">
      <SplideSlide
        v-for="(slide, index) in slideData"
        :key="index"
        class="relative bg-[#BFD5E3]"
      >
        <div class="container" :class="`bg-['${slide.bgColor}']`">
          <div class="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[546px]">
            <div>
              <h1 class="text-4xl lg:text-8xl" v-html="slide.title"></h1>
              <p class="mt-2 text-xl" v-html="slide.content"></p>
              <NuxtLink
                v-if="slide.button"
                :to="slide.button.link"
                class="btn mt-4 inline-block"
                >{{ slide.button.text }}</NuxtLink
              >
            </div>
            <img :src="slide.image" :alt="'Image ' + index" class="" />
          </div>
        </div>
      </SplideSlide>
    </Splide>
    <div
      class="flex items-center justify-between gap-4 absolute bottom-0 right-0 bg-brand text-white z-40"
    >
      <button @click="goPrev" class="p-4">
        <Icon name="iconoir:arrow-left" class="text-xl" />
      </button>
      <button @click="goNext" class="p-4">
        <Icon name="iconoir:arrow-right" class="text-xl" />
      </button>
    </div>
  </div>
    </div>
  </div>

</template>

<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

const { url } = useWpApi("custom-api/v1/slideshow");

const { data: slideData, status, error } = useLazyFetch(url, { server: false });

const options = {
  type: "loop",
  perPage: 1,
  autoplay: true,
  interval: 5000,
  pauseOnHover: false,
  arrows: false,
  pagination: false,
  speed: 1500,
  focus: "center",
};

const splide = ref(null);
const currentSlide = ref(0);
const goPrev = () => splide.value?.go("<");
const goNext = () => splide.value?.go(">");
const goTo = (index) => splide.value?.go(index);
const onMoved = (newIndex) => {
  currentSlide.value = newIndex;
};
</script>

<style scoped>
/* Optional custom styling */
/* .splide__slide.is-active img {
  @apply scale-110 duration-[7s];
} */
</style>
