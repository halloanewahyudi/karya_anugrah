<template>
  <div class="text-center">
        <h4 class=" text-4xl font-semibold " v-html="props?.title"></h4>
        <p v-if="props?.description" v-html="props?.description"></p>
        <!--  <div class="w-12 h-1 bg-brand mx-auto mt-2"></div> -->
      </div>
</template>

<script lang="ts" setup>
  const props = defineProps(['title', 'description'])
</script>

<style>

</style>