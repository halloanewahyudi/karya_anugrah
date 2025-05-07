<script setup lang="ts">
const page = ref(1)
const perPage = 12
const totalPages = ref(1)

const { url, options } = useWpApi('product/v1/by-category/' + useRoute().params.brand + '?_embed', {
  query: computed(() => ({
    per_page: perPage,
    page: page.value
  }))
})

const { data: posts, status, error, refresh, execute } = useLazyFetch(url, {
  ...options,
  async onResponse({ response }) {
    const total = response.headers.get('X-WP-TotalPages')
    if (total) {
      totalPages.value = parseInt(total)
    }
  }
})

watch(page, () => {
  refresh()
})
</script>

<template>
  <section class="bg-brand-50 text-brand mb-20">
    <div class="container py-20 text-center">
      <h4 class="text-4xl font-semibold"> News</h4>
    </div>
  </section>

  <div class="container mb-20">
    <div v-if="status === 'pending'" class="flex justify-center items-center py-40">
    <Icon name="line-md:loading-twotone-loop" class="text-5xl text-brand animate-spin" />
  </div>
    <div v-else-if="error">Failed to load posts</div>
    <div v-else>
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div v-for="post in posts" :key="post.id" class="group">
          <div class="rounded-lg overflow-hidden mb-4 max-h-[220px]">
            <img :src="post?.featured_image" alt="" class="rounded-lg group-hover:scale-105 duration-300" />
          </div>
          <div class="flex items-center gap-2 text-xs">
            <Icon name="iconoir:calendar-check" class="text-brand" />
            <span>{{ post?.date }}</span>
          </div>
          <h4>
            <NuxtLink :to="`/product/${post?.slug}`">{{ post?.title }}</NuxtLink>
          </h4>
        </div>
      </div>

      <!-- Pagination controls -->
      <div class="flex justify-center gap-4 mt-10">
        <button
          :disabled="page <= 1"
          @click="page--"
          class="px-4 py-2 bg-brand text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          :disabled="page >= totalPages"
          @click="page++"
          class="px-4 py-2 bg-brand text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>


