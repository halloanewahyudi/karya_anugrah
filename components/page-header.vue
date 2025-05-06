<template>
  <div class="page-header min-h-[480px] flex flex-col justify-center bg-cover bg-center " :style="{backgroundImage:`url(${bg})`}">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2  h-full">
          <div>
            <h1 class="text-4xl lg:text-6xl" v-html="title"></h1>
            <p v-html="description"></p>
            <slot name="button" />
          </div>
          <div>
            <slot name="image" />
          </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['title', 'description', 'bg'])
</script>

<style>

 
</style>