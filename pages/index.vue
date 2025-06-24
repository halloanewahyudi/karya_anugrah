<template>
  <section id="section-one" class="relative">
    <Slideshow />
  </section>

<HomeSolution />
<HomeAbout/>
 <HomeProducts />

  <section class="py-20">
    <div class="container"> 
      <div class="text-center mb-10 ">
        <h4 class="anim text-4xl font-semibold ">Latest News</h4>
        <p>Excellence in Hardware and Software Solutions</p>
        <!--  <div class="w-12 h-1 bg-brand mx-auto mt-2"></div> -->
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 ">
        <div v-for="post in posts" :key="post" class="group">
          <div class="rounded-lg overflow-hidden mb-4">
            <img :src="post.featured_image" alt="" class="rounded-lg  group-hover:scale-105 duration-300">
          </div>

          <div class="flex items-center gap-2 text-xs">
            <Icon name="iconoir:calendar-check" class="text-brand" />
            <span> {{ post.date }}</span>
          </div>

          <h4>
            <NuxtLink :to="`/post/${post.slug}`"> {{ post.title }}</NuxtLink>
          </h4>
        </div>
      </div>
      <div class="block text-center mt-10">
        <NuxtLink to="/news" class="btn mx-auto inline-block text-center">Show More News</NuxtLink>
      </div>
    </div>
  </section>


</template>
<script lang="ts" setup>



const { url, options } = useWpApi('post/v1/all?_embed', {
  query: computed(() => ({
    per_page: 4,
  }))
})


const { data: posts, status, error, refresh, execute } = useLazyFetch(url, {
  ...options,
  async onResponse({ response }) {
    const total = response.headers.get('X-WP-TotalPages')
    if (total) {
      totalPages.value = parseInt(total)
    }
  }
})


</script>
<style></style>