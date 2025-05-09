<template>
  <div v-if="status === 'pending'" class="flex justify-center items-center py-40">
    <Icon name="line-md:loading-twotone-loop" class="text-5xl text-brand animate-spin" />
  </div>
  <div v-else-if="error">Failed to load posts</div>
  <div v-else>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="p-6 lg:p-10 flex fle-col justify-center items-center ">
        <img :src="product?.featured_image" :alt="product?.title" />
      </div>
      <div class="">
        <div class="bg-brand-50 p-6 lg:p-10">
          <SectionTitle :title="product?.title" class="text-center mb-4" />
          <ul class="flex border-b border-brand mb-4">
            <li class="cursor-pointer px-4 py-2"
              :class="activeTab === 'description' ? 'border-b-2 border-brand font-semibold' : ''"
              @click="activeTab = 'description'">
              Description
            </li>
            <li class="cursor-pointer px-4 py-2"
              :class="activeTab === 'specification' ? 'border-b-2 border-brand font-semibold' : ''"
              @click="activeTab = 'specification'">
              Specification
            </li>
          </ul>

          <div v-if="activeTab === 'description'" v-html="product?.acf?.description"></div>
          <div v-else-if="activeTab === 'specification'" v-html="product?.acf?.specification"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 items-center ">
          <a :href="product?.acf?.market_place?.url" target="_blank"
            class="w-full h-full p-3 text-center cursor-pointer flex items-center justify-center gap-2 bg-brand-300 text-brand hover:bg-brand-200 duration-300">
            Check on
            <Icon name="arcticons:tokopedia" class="text-2xl text-brand" />
          </a>
          <NuxtLink to="/contact"
            class="w-full h-full p-3 text-center cursor-pointer bg-brand-300 text-brand hover:bg-brand-200 duration-300">
            Contact 
          </NuxtLink>
          <a href="https://www.tokopedia.com/karyaanugrahteknologi" target="_blank"
            class="w-full h-full p-3 text-center cursor-pointer flex items-center justify-center gap-2 bg-brand-300 text-brand hover:bg-brand-200 duration-300">

            <Icon name="arcticons:tokopedia" class="text-3xl text-brand" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
const route = useRoute()
const { url, options } = useWpApi('product/v1/by-slug/' + route.params.slug)
const { data: product, status, error } = useLazyFetch(url, options)
const activeTab = ref<'description' | 'specification'>('description')
</script>

<style></style>