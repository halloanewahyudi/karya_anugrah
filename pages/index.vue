<template>
  <section id="section-one" class="relative">
    <Slideshow />
  </section>

<HomeSolution />
<HomeAbout/>
 
  <section class="relative bg-neutral-100 py-20"> <!-- section product -->
    <div class="container">
      <div class="text-center mb-10 ">
        <h4 class=" text-4xl font-semibold ">Populer Products</h4>
        <p>Excellence in Hardware and Software Solutions</p>
        <!--  <div class="w-12 h-1 bg-brand mx-auto mt-2"></div> -->
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center lg:gap-10">
        <div v-for="product in productData" :key="product.id"
          class="p-6 h-full bg-white rounded-lg  border hover:border-none hover:shadow-2xl duration-300 text-center flex flex-col justify-between items-center">
         <NuxtLink :to="`/product/${product.slug}`" >
          <img :src="product.featured_image" :alt="product.title" class="rounded-xl mb-3">
          <h4 class=" text-opacity-80">
            {{ product.title }}
          </h4>
            </NuxtLink>
        </div>
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



const { solutions, products, partners, brands } = useDataHome()

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

// show products 
const productUrl = useWpApi('custom-api/v1/products', {
  query: computed(() => ({
    per_page: 4,
  }))
})

const { data: productData, status: productStatus, error: productError, refresh: productRefresh, execute: productExecute } = useLazyFetch(productUrl.url, {
  ...productUrl.options,

})

</script>
<style></style>