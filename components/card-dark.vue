<template>
  <div class="bg-gradient-to-tr from-brand-200 to-brand-500  p-0.5 rounded-xl h-full">
    <div class="bg-white p-4 rounded-xl  relative overflow-hidden pt-40 h-full"
      :style="{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-dark/10 via-brand/30  to-dark  "></div>
      <div class="relative text-brand-50 p-6 hover:translate-y-2 duration-300 h-full flex flex-col justify-between">
        <div>
          <h4 class="text-2xl font-semibold mb-3 text-white">{{ title }}</h4>
          <p>{{ description }}</p>
        </div>
        <div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps(['title', 'description', 'image'])
</script>

<style></style>