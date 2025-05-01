<template>
  <section id="section-one" class="relative">
    <Slideshow />
  </section>
  <section class="bg-gradient-to-b from-dark to-brand relative z-20">
    <div class="container relative -top-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 "
        v-gsap.stagger.fromTo="[{ opacity: 0, y: 100 }, { opacity: 1, y: 0, delay: 0.2 }, { stagger: 0.4 }]">
        <CardDark v-for="item in solution" :key="item" :title="item.title" :description="item.description"
          :image="item.image" class="">
          <NuxtLink to="/" class="flex items-center gap-2 justify-end mt-4 btn max-w-max ml-auto">
            Read More
            <Icon name="iconoir:arrow-right-circle-solid" class="text-3xl text-secondary" />
          </NuxtLink>
        </CardDark>
      </div>
      <div class="flex gap-4 justify-center items-center my-16">
        <img v-for="i in partners" :key="i" :src="i.image" alt="" class="opacity-70 hover:opacity-100 duration-300">
      </div>
    </div>
  </section>
  <section class="py-20">
    <div class="max-w-screen-lg min-h-[40vh] mx-auto text-center px-6 flex flex-col justify-center items-center">
      <h2 class="text-xl" v-gsap.whenVisible.from="{ opacity: 0, y: 10 }">WHAT CAN WE PROVIDE FOR YOU? </h2>
      <h2 class="text-4xl lg:text-6xl font-bold opacity-80 text-brand" v-gsap.whenVisible.animateText.once.slow>
        Hardware,
        notebooks, printers, IoT, software, POS - We’ve got them all!</h2>
    </div>

  </section>
  <section class="bg-gray-50 py-20"> <!-- our products -->
    <div class="container">
      <div class="text-center mb-10">
        <h4 class="text-xl font-semibold ">Our Products</h4>
        <p>Excellence in Hardware and Software Solutions</p>
        <div class="w-12 h-1 bg-brand mx-auto mt-2"></div>
      </div>
      <div v-if="status === 'pending'" class="p-10 text-center mx-auto">
        Loading ...
      </div>
      <div v-else>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center lg:gap-10"
          v-gsap.whenVisible.stagger.fromTo="[{ opacity: 0, y: 100 }, { opacity: 1, y: 0, delay: 0.7 }, { stagger: 0.4 }]">
          <div v-for="post in products" :key="post"
            class="p-6 h-full bg-white rounded-xl border hover:border-none hover:shadow-2xl duration-300 text-center flex flex-col justify-between items-center">
            <!-- <img  :src="post.image" alt="" class="w-full h-40 object-cover"> -->
            <img :src="post.image" :alt="post.title" class="rounded-xl mb-3">
            <h4 class="text-lg font-semibold text-opacity-80">
              {{ post.title }}
            </h4>
          </div>
        </div>
      </div>
      <div class="block text-center mt-10">
        <NuxtLink to="/" class="btn mx-auto inline-block text-center">Show More Products</NuxtLink>
      </div>
    </div>
  </section>

  <section class=" py-20"> <!-- latest news -->
    <div class="container">
      <div class="text-center mb-10">
        <h4 class="text-xl font-semibold ">Latest News</h4>
        <p>Excellence in Hardware and Software Solutions</p>
        <div class="w-12 h-1 bg-brand mx-auto mt-2"></div>
      </div>
      
      <div >
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center lg:gap-10"
          v-gsap.whenVisible.stagger.fromTo="[{ opacity: 0, y: 100 }, { opacity: 1, y: 0, delay: 0.7 }, { stagger: 0.4 }]">
          <div v-for="post in posts" :key="post" class="h-full  ">
            <img  :src="post.image" alt="" class="w-full h-40 object-cover rounded-xl mb-3">
         
            <span class="text-xs text-gray-500 flex items-center gap-2">
              <Icon name="ic:baseline-access-time" class="" />
              <span>  {{ post.date }} </span>
             
            </span>
            <div class="font-medium text-brand text-opacity-85">
              {{ post.title }}
            </div>
          </div>
        </div>
      </div>
      <div class="block text-center mt-10">
        <NuxtLink to="/" class="btn mx-auto inline-block text-center">Show More News</NuxtLink>
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

const {solution, products, posts, partners} = useDataHome()


</script>
<style></style>