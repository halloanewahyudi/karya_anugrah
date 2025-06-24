<template>
  <div>
  <div v-if="status === 'pending'" class="flex justify-center items-center py-40">
      <Icon name="line-md:loading-twotone-loop" class="text-5xl text-brand animate-spin" />
    </div>
   <section class="relative bg-neutral-100 py-20"> <!-- section product -->
    <div class="container">
      <div class="text-center mb-10 ">
        <h4 class=" text-4xl font-semibold ">Populer Products loremipsum </h4>
        <p>Excellence in Hardware and Software Solutions</p>
        <!--  <div class="w-12 h-1 bg-brand mx-auto mt-2"></div> -->
      </div>

      <div  >
      <GsapFadeUp start="top 90%" end="bottom 5%" :from-y="60" :stagger="1" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center lg:gap-10 ">
        <div v-for="product in productData" :key="product.id"
          class="p-6 h-full bg-white rounded-lg  border hover:border-none hover:shadow-2xl duration-300 text-center flex flex-col justify-between items-center" >
         <NuxtLink :to="`/product/${product.slug}`" >
          <img :src="product.featured_image" :alt="product.title" class="rounded-xl mb-3">
          <h4 class=" text-opacity-80">
            {{ product.title }}
          </h4>
            </NuxtLink>
        </div>
        </GsapFadeUp>
      </div>
    </div>
  </section> <!-- end section product -->
  </div>
</template>

<script lang="ts" setup>
 const {url} = useWpApi('custom-api/v1/products')
const { data: productData, status, error } = useLazyFetch(url)

</script>

<style>

</style>