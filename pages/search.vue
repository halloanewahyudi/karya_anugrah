<template>
  <div class="container py-20">
    <h1 class="text-3xl font-semibold mb-6">Search results for "{{ query }}"</h1>

    <div v-if="status === 'pending'" class="text-gray-500">Searching...</div>
    <div v-else-if="error" class="text-red-500">Failed to load results</div>
    <div v-else-if="posts.length === 0" class="text-gray-500">No results found</div>
    <div v-else>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="post in posts" :key="post.id" class="group">
          <div class="rounded-lg overflow-hidden mb-4 max-h-[200px]">
            <img :src="useWpFeaturedImage(post)" class="w-full h-full object-cover group-hover:scale-105 duration-300" />
          </div>
          <h3 class="text-lg font-semibold">
            <NuxtLink :to="`/post/${post.slug}`" class="hover:text-secondary">
              {{ post.title.rendered }}
            </NuxtLink>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const query = computed(() => route.query.q as string || '')

const { url, options } = useWpApi('wp/v2/posts?_embed', {
  query: {
    search: query,
    per_page: 12,
  }
})

const { data, error, status } = useFetch(url, options)
const posts = computed(() => data.value || [])
</script>
