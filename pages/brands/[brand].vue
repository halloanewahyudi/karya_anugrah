<template>
  <div>
      <section class="  border-b mb-20">
    <div class="container py-2 text-center">
      <h4 class="text-4xl font-semibold uppercase"> {{ route.params.brand }}</h4>
    </div>
  </section>
   <!-- Loading Indicator -->
    <div v-if="status === 'pending'" class="flex justify-center items-center py-40">
      <Icon name="line-md:loading-twotone-loop" class="text-5xl text-brand animate-spin" />
    </div>
    
    <div class="container">
      <div class="grid grid-cols-2 lg:grid-cols-6 gap-6 justify-center items-center text-center mb-20">
       <div v-for="brand in brands" :key="brand.id"  class="group relative inline-block">
          <div
        class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap
               bg-brand text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100
               transition-opacity duration-200"
      >
        {{ brand.title }}
      </div>
        
        <a @mouseenter="tooltip(brand.title)" :href="brand.acf.link" target="_blank" class="w-24 h-24 bg-gray-100 p-4 flex items-center justify-center mx-auto hover:bg-white hover:shadow-2xl  duration-300">
          <img :src="brand.featured_image" :alt="brand.title" class="w-full h-auto" />
        </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
 const route = useRoute();

 const { url, options } = useWpApi('brand/v1/brands-by-category?term=' + route.params.brand)
 const { data: brands, status, error } = useLazyFetch(url, options)

 const tooltip = (title)=>{
     const tooltip = document.querySelector('.tooltip')
     tooltip.classList.toggle('hidden')
     tooltip.textContent = title
     return tooltip
 }
</script>

<style>

</style>