<template>
  <div class="container py-20">
    <div class="grid grid-cols-1 lg:grid-cols-6">
      <div class="col-span-1 lg:col-span-4 flex flex-col gap-6">
        <h1 class="text-4xl font-bold text-brand mb-6" v-html="posts?.title"></h1>
        <img :src="posts?.featured_image" alt="" class="rounded-lg  ">
       
        <div v-html="posts?.content"></div>
      </div>
      <div class="lg:col-span-2">
      
    </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
 const route = useRoute()
 const { url, options } = useWpApi('post/v1/post-by-slug/' + route.params.slug + '?_embed')

const { data: posts, status, error } = useLazyFetch(url, options)

// get latest posts


</script>

<style>

</style>