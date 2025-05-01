<template>
  <div class="bg-gradient-to-b from-dark to-dark2 text-dark3 pt-16 pb-0 text-sm">
    <div class="container">

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-10 ">
        <img src="/logo.png" alt="" class="w-20 lg:col-span-1">

        <div class=" flex flex-col gap-4 lg:col-span-4">
         <h4 class="text-lg">Karya Anugrah Teknologi</h4>
           <div class="flex flex-col gap-2">
            <span class="flex  gap-2">
              <Icon name="iconoir:map-pin" />
              <div class="">
                Citra Garden 6 <br>
                Pegadungan, Tegal Alur, <br> 
                Kec. Kalideres, Kota Jakarta Barat
              </div>
            </span>
            <span class="flex items-center gap-2">
              <Icon name="iconoir:phone" />
              <div class="">
                +62 821 xxx xxx
              </div>
            </span>
            <span class="flex items-center gap-2">
              <Icon name="iconoir:mail"  />
              <div class="">
                yKo8b@example.com
              </div>
            </span>
           </div>
        </div>

        <div class="flex flex-col gap-4 lg:col-span-4"> <!-- products -->
          <h4 class="text-lg">Products</h4>
         <ul class="flex flex-col gap-2">
          <li v-for="product in products" :key="product" class="hover:text-brand-300 duration-200">
            <nuxt-link to="/">
              {{ product.title }}
            </nuxt-link>
          </li>
         </ul>
        </div>

        </div> <!-- end grid -->
    </div>
    <div class="border-t  border-dark3/30 py-5 text-xs mt-16 px-10 text-center">
      Copyright © 2025 | PT. Karya Anugrah Teknologi
    </div>
  </div>
</template>

<script lang="ts" setup>
 const { products } = useDataHome()
</script>

<style scoped>
h1,h2,h3,h4,h5,h6{
    @apply font-sans font-bold text-dark3;
}
</style>