<template>
  <div class="fixed top-24 left-0 w-full z-50 ">
    <div class="container">
      <div class="rounded-xl  bg-white ">
        <div class="grid grid-cols-3 gap-4">
          <div></div>
          <div class="col-span-2 p-4">
            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/" v-for="logo in brands" :key="logo">
                <img :src="logo.image" alt="" class="h-[40px] w-auto  hover:bg-brand-100 duration-200">
              </NuxtLink>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { brands } = useDataHome()
</script>

<style></style>