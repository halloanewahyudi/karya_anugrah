<template>
  <div class="bg-white p-6 rounded-lg   hover:shadow-lg">
   <slot />
    <h4 class="text-xl font-medium mb-3">{{ title }}</h4>
    <p>{{ description }}</p>
  </div>
</template>

<script lang="ts" setup>
 const props = defineProps(['title', 'description'])
</script>

<style>

</style>