<template>
  <div v-if="status === 'pending'" class="flex justify-center items-center py-40">
    <Icon name="line-md:loading-twotone-loop" class="text-5xl text-brand animate-spin" />
  </div>
  <div v-else-if="error">Failed to load posts</div>
  <div v-else>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- main -->
      <div class="p-6 lg:p-10 flex fle-col justify-center items-center ">
        <img :src="product?.featured_image" :alt="product?.title" />
      </div>
      <div class="">
        <div class="bg-gray-50 p-6 lg:p-10 min-h-[70vh]">
          <SectionTitle :title="product?.title" class="text-center mb-4" />
          <ul class="flex border-b border-gray-200 mb-4">
            <li class="cursor-pointer px-4 py-2"
              :class="activeTab === 'description' ? 'border-b-2 border-gray-900 font-semibold' : ''"
              @click="activeTab = 'description'">
              Description
            </li>
            <li class="cursor-pointer px-4 py-2"
              :class="activeTab === 'specification' ? 'border-b-2 border-gray-900 font-semibold' : ''"
              @click="activeTab = 'specification'">
              Specification
            </li>
          </ul>

          <div v-if="activeTab === 'description'" v-html="product?.acf?.description"></div>
          <div v-else-if="activeTab === 'specification'" v-html="product?.acf?.specification"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 items-center ">
          <a :href="product?.acf?.market_place?.url" target="_blank"
            class="group w-full h-full p-3 text-center cursor-pointer flex items-center justify-center gap-2 bg-tertiary text-gray-900 hover:bg-brand-200 hover:text-brand duration-300">
            Check on
            <Icon name="arcticons:tokopedia" class="text-2xl text-gray-900 group-hover:text-brand duration-300" />
          </a>
          <NuxtLink to="/contact"
            class="w-full h-full p-3 text-center cursor-pointer bg-tertiary text-gray-900 hover:bg-brand-200 hover:text-brand duration-300">
            Contact 
          </NuxtLink>
          <a href="https://www.tokopedia.com/karyaanugrahteknologi" target="_blank"
            class="group w-full h-full p-3 text-center cursor-pointer flex items-center justify-center gap-2 bg-tertiary text-gray-900 hover:bg-brand-200 hover:text-brand  duration-300">

            <Icon name="arcticons:tokopedia" class="text-3xl text-gray-900 group-hover:text-brand duration-300" />
          </a>
        </div>
      </div>
    </div>
<!--  relate product -->
<div class="grid-col">
</div>
<!-- end related product -->

  </div>
</template>


<script lang="ts" setup>
const route = useRoute()
const { url, options } = useWpApi('product/v1/by-slug/' + route.params.slug)
const { data: product, status, error } = useLazyFetch(url, options)
const activeTab = ref<'description' | 'specification'>('description')

</script>

<style></style>