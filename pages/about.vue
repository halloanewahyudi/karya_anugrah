<template>
  <div>
      <section class="bg-brand text-brand-50">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center">
          <div class="p-6 lg:px-12 mx-auto">
            <h1 class="text-4xl lg:text-6xl text-white ">
              About Us
            </h1>
            <p> Powering Your Digital Future</p>
          </div>
          <div>
            <img src="/img/about.jpg" alt="" class="w-full h-full object-cover">
          </div>
        </div>
      </section>
    <section class="py-20 text-center">
     
      <div class="max-w-screen-lg mx-auto px-6">
        <SectionTitle title="WHO ARE WE?" />
        <p>Karya Anugrah Teknologi is an IT distribution company that specializes in providing the best hardware for our customers. Our journey began in the retail industry, where we supported our clients by providing retail-specific solutions to meet the growing demands of the sector. Building on this success and recognizing the pervasive digitalization of our world, we have expanded our services to include data protection and network management.
        </p>
        <p>
          As a company, our mission extends beyond simply delivering products to your businesses. We are dedicated to providing unwavering technical support throughout the entire process starting from helping your business choose the right solutions, guaranteeing warranty from vendors, providing service centers, and providing flexibility for specific local challenges.
        </p>
      </div>

    </section>
    <section>
  <div class="container">
    <div class="grid grid-cols-1 lg:grid-cols-2">

    </div>
  </div>
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