<template>
  <div class="fixed top-[90px] left-0 w-full z-50 ">
    <div class="max-w-screen-lg mx-auto ">
      <div class="rounded-xl  bg-white overflow-hidden shadow-xl p-6 ">
        <div class="flex flex-wrap gap-4 justify-center">

  <NuxtLink to="/" v-for="logo in brands" :key="logo" class="h-[90px] hover:bg-brand-100 duration-200">
    <img :src="logo.image" alt="" class="h-full w-auto">
    
  </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { brands, solution } = useDataHome()
</script>

<style></style>