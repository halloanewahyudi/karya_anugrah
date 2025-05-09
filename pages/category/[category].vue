<script setup lang="ts">
const page = ref(1)
const perPage = 12
const totalPages = ref(1)

const route = useRoute()


const { url, options } = useWpApi('product/v1/by-product-category/' + route.params.category + '?_embed', {
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
  <section class="  border-b mb-20">
    <div class="container py-2 text-center">
      <h4 class="text-4xl font-semibold uppercase"> {{ route.params.category }}</h4>
    </div>
  </section>

  <div class="container mb-20">
    <div v-if="status === 'pending'" class="flex justify-center items-center py-40">
    <Icon name="line-md:loading-twotone-loop" class="text-5xl text-brand animate-spin" />
  </div>
    <div v-else-if="error">Failed to load posts</div>
    <div v-else>
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <CardProduct v-for="post in posts" :key="post.id" :title="post?.title" :link="`/product/${post?.slug}`" :featured_image="post?.featured_image" />

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


