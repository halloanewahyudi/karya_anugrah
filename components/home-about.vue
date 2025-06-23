<template>
  <div>
    <div v-if="status === 'pending'" class="flex justify-center items-center py-40">
    <Icon name="line-md:loading-twotone-loop" class="text-5xl text-brand animate-spin" />
  </div>
  <div v-else-if="error">Failed to load posts</div>
  <div v-else>
   

    <section class="py-20">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center">
          <div class="mx-auto lg:px-10">
            <!-- sekilas about us -->
            <h2
              class="text-3xl lg:text-4xl leading-normal mb-5"
              v-html="page.acf.title"
            ></h2>
            <div class="leading-relaxed" v-html="page.acf.description" />

            <NuxtLink :to="page.acf.link.url" class="btn inline-block mt-5">{{
              page.acf.link.title
            }}</NuxtLink>
          </div>
          <img :src="page.acf.image" alt="" class="rounded-lg" />
        </div>
      </div>
    </section>
    </div> <!-- end else -->
  </div>
</template>

<script lang="ts" setup>
const { url } = useWpApi("custom-api/v1/page/home-page");
const { data: page, status, error } = useLazyFetch(url);
</script>

<style>

</style>