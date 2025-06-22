<template>
  <div>
    <section id="section-two" class="py-20 bg-neutral-50">
      <div class="container">
        <div class="text-center mb-10">
          <h4 class="text-4xl font-semibold">Product & Service</h4>
          <p>What can we provide to you today?</p>
          <!--  <div class="w-12 h-1 bg-brand mx-auto mt-2"></div> -->
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- soluiton -->
         <div class="" v-for="post in solutions" :key="post">
          <div
            class="rounded-lg bg-white lg:min-h-[480px] h-full flex flex-col p-6 text-white items-start justify-end bg-no-repeat bg-cover bg-center group"
            :style="{ backgroundImage: `url('${post.image}')` }">
            <div class="group-hover:translate-y-2 duration-300">
              <h4 class="text-white text-2xl mb-0 ">{{ post.title }}</h4>
              <p>{{ post.description }}</p>
            </div>
            <NuxtLink :to="post.link"
              class="btn  translate-y-10 opacity-0  group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75 mt-5">
              Show More</NuxtLink>
          </div>
        </div>
          <!-- end soluiton -->

        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center">
          <div class="mx-auto lg:px-10">
            <!-- sekilas about us -->
            <h2
              class="text-3xl lg:text-4xl leading-normal mb-5"
              v-html="page.acf.title"
            ></h2>
            <div class="leading-relaxed" v-html="page.acf.description" />

            <NuxtLink :to="page.acf.link.url" class="btn inline-block mt-5">{{
              page.acf.link.title
            }}</NuxtLink>
          </div>
          <img :src="page.acf.image" alt="" class="rounded-lg" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const { url } = useWpApi("custom-api/v1/page/home-page");
const { data: page, status, error } = useLazyFetch(url);

// Konversi object ke array
const solutions = ref([]);
if (page.value) {
  solutions.value = Object.values(page.value.acf.solution);
}
</script>

<style></style>
