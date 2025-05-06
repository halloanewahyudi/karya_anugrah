<template>
  <section id="section-one" class="relative">
    <Slideshow />
  </section>

  <section id="section-two" class="  py-20 bg-neutral-50">
    <div class="container ">
      <div class="text-center mb-10 ">
        <h4 class="text-4xl font-semibold "> Product & Service </h4>
        <p>What can we provide to you today?</p>
        <!--  <div class="w-12 h-1 bg-brand mx-auto mt-2"></div> -->
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 "
        v-gsap.stagger.fromTo="[{ opacity: 0, y: 100 }, { opacity: 1, y: 0, delay: 0.2 }, { stagger: 0.4 }]">
        <!-- soluiton -->
        <div class="" v-for="post in solutions" :key="post">
          <div
            class="rounded-lg bg-white lg:min-h-[480px] h-full flex flex-col p-6 text-white items-start justify-end bg-no-repeat bg-cover bg-center group"
            :style="{ backgroundImage: `url('${post.image}')` }">
            <div class="group-hover:translate-y-2 duration-300">
              <h4 class="text-white text-2xl mb-0 ">{{ post.name }}</h4>
              <p>{{ post.description }}</p>
            </div>
            <NuxtLink :to="post.link"
              class="btn  translate-y-10 opacity-0  group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75 mt-5">
              Show More</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center">
        <div class=" mx-auto lg:px-10"> <!-- sekilas about us -->
          <h2 class="text-3xl lg:text-4xl leading-normal mb-5"
            v-gsap.whenVisible.from="{ opacity: 0, y: 10, duration: 2, delay: 1 }">
            PT Karya Anugerah Technology
          </h2>
          <p class="leading-relaxed ">Specializes in the distribution of cutting-edge
            hardware and software solutions, designed to elevate your technological
            landscape. Explore a curated selection of premium products, meticulously chosen
            to empower your business with seamless efficiency and uncompromising
            performance.
          </p>
          <NuxtLink to="/about" class="btn inline-block mt-5"> Read More</NuxtLink>
        </div>
        <img src="/img/about.jpg" alt="" class="rounded-lg" v-gsap.whenVisible.from="{ opacity: 0, y: 10, duration: 2, delay: 1 }">
      </div>
    </div>
  </section>

  <section class="relative bg-neutral-100 py-20"> <!-- section product -->
    <div class="container">
      <div class="text-center mb-10 ">
        <h4 class=" text-4xl font-semibold ">Populer Products</h4>
        <p>Excellence in Hardware and Software Solutions</p>
        <!--  <div class="w-12 h-1 bg-brand mx-auto mt-2"></div> -->
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center lg:gap-10"
        v-gsap.whenVisible.stagger.fromTo="[{ opacity: 0, y: 100 }, { opacity: 1, y: 0, delay: 0.7 }, { stagger: 0.4 }]">
        <div v-for="post in products" :key="post"
          class="p-6 h-full bg-white rounded-lg  border hover:border-none hover:shadow-2xl duration-300 text-center flex flex-col justify-between items-center">
          <img :src="post.image" :alt="post.title" class="rounded-xl mb-3">
          <h4 class=" text-opacity-80">
            {{ post.title }}
          </h4>
        </div>
      </div>
      <div class="block text-center mt-10">
        <NuxtLink to="/" class="btn mx-auto inline-block text-center">Show More Products</NuxtLink>
      </div>
    </div>
  </section> <!-- end section product -->

  <section class="py-20">
    <div class="container">
      <div class="text-center mb-10 ">
        <h4 class="text-4xl font-semibold ">Latest News</h4>
        <p>Excellence in Hardware and Software Solutions</p>
        <!--  <div class="w-12 h-1 bg-brand mx-auto mt-2"></div> -->
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 ">
        <div v-for="post in posts" :key="post" class="group">
          <div class="rounded-lg overflow-hidden mb-4">
            <img :src="post.image" alt="" class="rounded-lg  group-hover:scale-105 duration-300">
          </div>

          <div class="flex items-center gap-2 text-xs">
            <Icon name="iconoir:calendar-check" class="text-brand" />
            <span> {{ post.date }}</span>
          </div>

          <h4>
            <NuxtLink to="/"> {{ post.title }}</NuxtLink>
          </h4>
        </div>
      </div>
    </div>
  </section>


</template>
<script lang="ts" setup>

// page meta
definePageMeta({
  layout: 'default',
  title: 'Home',
  description: 'Home',
  keywords: 'Home',
})

const { solutions, products, posts, partners, brands } = useDataHome()


</script>
<style></style>