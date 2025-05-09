<template>

  <div class="group rounded-lg overflow-hidden p-6 border text-center flex flex-col justify-between">
    <div>
      <img :src="props?.featured_image" alt="" class="rounded-lg group-hover:scale-105 duration-300 mb-3" />
      <span> {{ props?.title }}</span>

    </div>
    <NuxtLink :to="props?.link"
      class="btn mx-auto block cursor-pointer max-w-max transition-all duration-300 delay-75 mt-5">
      Show More</NuxtLink>
  </div>

</template>

<script lang="ts" setup>
const props = defineProps(['title', 'link', 'featured_image'])
</script>

<style></style>