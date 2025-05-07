<template>
  <div>
    <!-- Loading Indicator -->
    <div v-if="status === 'pending'" class="flex justify-center items-center py-40">
      <Icon name="line-md:loading-twotone-loop" class="text-5xl text-brand animate-spin" />
    </div>

    <!-- Main Content -->
    <div v-else class="container py-20">
      <div class="grid grid-cols-1 lg:grid-cols-6 gap-10">
        <!-- Post Content -->
        <div class="col-span-1 lg:col-span-4 flex flex-col gap-6">
          <div>
            <h1 class="text-4xl font-bold text-brand" v-html="post?.title"></h1>
            <div class="flex items-center gap-2 text-xs">
              <Icon name="iconoir:calendar-check" class="text-brand" />
              <span>{{ post?.date }}</span>
            </div>
          </div>

          <img :src="post?.featured_image" alt="" class="rounded-lg" />
          <div v-html="post?.content"></div>
        </div>

        <!-- Sidebar: Latest Posts -->
        <div class="lg:col-span-2 space-y-4">
          <h3 class="text-xl font-semibold mb-4">Latest Posts</h3>
          <div v-for="latest in latestPosts" :key="latest.id" class="border-b pb-3">
            <NuxtLink :to="`/post/${latest.slug}`" class="text-brand hover:underline flex gap-2 items-center">
              <img :src="latest.featured_image" alt="" class="w-12 h-12 object-cover">
              <div>
                {{ latest.title }} <br>
                <span class="text-sm">
                  <Icon name="iconoir:calendar-check" class="text-brand" /> {{ latest.date }}
                </span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Related Posts Section -->
    <div v-if="relatedPosts.length" class="py-20 bg-brand-50">
      <div class="container">
        <h2 class="text-3xl font-semibold text-center mb-10">Related Posts</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="related in relatedPosts" :key="related.id" class="group">
            <img :src="related.featured_image" :alt="related.title" class="rounded-lg mb-4 group-hover:scale-105 duration-300" />
            <span class="text-sm">
              <Icon name="iconoir:calendar-check" class="text-brand" /> {{ related.date }}
            </span>
            <h4>
              <NuxtLink :to="`/post/${related.slug}`">{{ related.title }}</NuxtLink>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const slug = route.params.slug as string;

// Fetch Post Details
const { url: postUrl, options: postOptions } = useWpApi(`post/v1/by-slug/${slug}`);
const { data: post, status } = useLazyFetch(postUrl, postOptions);

// Fetch Latest Posts
const { url: latestUrl, options: latestOptions } = useWpApi('post/v1/all?', {
  query: { per_page: 5 }
});
const { data: latestPosts } = useLazyFetch(latestUrl, latestOptions);

// Fetch Related Posts
const relatedPosts = ref([]);
watch(post, async (newPost) => {
  if (newPost && newPost.categories?.length) {
    const categorySlug = newPost.categories[0];
    const { url: relatedUrl, options: relatedOptions } = useWpApi(`post/v1/by-category/${categorySlug}`, {
      query: {
        exclude: newPost.id,
        per_page: 4
      }
    });
    const { data } = await useLazyFetch(relatedUrl, relatedOptions);
    relatedPosts.value = data.value || [];
  }
});
</script>

<style scoped>
/* Tambahkan styling tambahan di sini jika diperlukan */
</style>
