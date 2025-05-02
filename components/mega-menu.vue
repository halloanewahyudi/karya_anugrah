<template>
  <div class="fixed top-[90px] left-0 w-full z-50 ">
    <div class="container">
      <div class="rounded-xl  bg-white overflow-hidden shadow-xl">
        <div class="grid grid-cols-3 gap-4">
          <div>
            <ul>
              <li v-for="item in solution" :key="item" >
                <NuxtLink to="/" class="flex items-center gap-2 p-4 hover:bg-brand-50 duration-300">
                  <img :src="item.image" alt="" class="w-10"> 
                  <span class="font-medium text-brand">{{ item.title }}</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="col-span-2 p-4">
            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/" v-for="logo in brands" :key="logo">
                <img :src="logo.image" alt="" class="h-[60px] w-auto  hover:bg-brand-100 duration-200">
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { brands, solution } = useDataHome()
</script>

<style></style>