<template>
  <div>
      <section class="bg-brand text-brand-50">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center">
          <div class="p-6 lg:px-12 mx-auto">
            <h1 class="text-4xl lg:text-6xl text-white ">
              About Us
            </h1>
            <p> What we can provide for you? <br> Hardware, notebooks, printers, IoT, software, POS - We’ve got them all!</p>
          </div>
          <div>
            <img src="/img/about.jpg" alt="" class="w-full h-full object-cover">
          </div>
        </div>
      </section>
    <section class="py-20 text-center">
     
      <div class="max-w-screen-lg mx-auto px-6">
        <SectionTitle title="What do we mean by solutions?" />
        <p>In tech, most problems can’t be solved with a one fits all product. Oftentimes, the best solutions for your
          business needs a combination of various hardwares and softwares. You can think of this page as listing the
          packages our company offers to solve a general problem your company may be facing by providing specific
          solutions for it through the combinations of several products</p>
      </div>

    </section>
    <section>

    </section>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
definePageMeta({
  title: 'About',
})
useSeoMeta({
  title: 'About',
  ogTitle: 'About',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>

<style>
.page-header h1 {
  @apply text-white;
}
</style>