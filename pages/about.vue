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
        <p>Karya Anugrah Teknologi is an IT distribution company that specializes in providing the best hardware for our
          customers. Our journey began in the retail industry, where we supported our clients by providing
          retail-specific solutions to meet the growing demands of the sector. Building on this success and recognizing
          the pervasive digitalization of our world, we have expanded our services to include data protection and
          network management.
        </p>
        <p>
          As a company, our mission extends beyond simply delivering products to your businesses. We are dedicated to
          providing unwavering technical support throughout the entire process starting from helping your business
          choose the right solutions, guaranteeing warranty from vendors, providing service centers, and providing
          flexibility for specific local challenges.
        </p>
      </div>

    </section>
    <section>
      <div class="container flex flex-col gap-6 mb-20">
        <div v-for="about in aboutOne"
          class=" grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10  items-center">
          <div class="h-full">
            <img :src="about.image" alt="" class="w-full h-full object-cover rounded-lg">
          </div>

          <div class="p-6 flex flex-col gap-4 justify-center " v-gsap.whenVisible.fromTo="[{ opacity: 0, scale: .4 }, { opacity: 1, scale: 1 }]">
            <h4 class="text-3xl lg:text-4xl">{{ about.title }}</h4>
            <p>{{ about.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container flex flex-col gap-6 mb-20">
        <SectionTitle title="OUR LATEST WORK" class="text-center mb-10" />
        <div v-for="about2 in aboutTwo"
          class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10   items-center">

          <div class="p-6 flex flex-col gap-4"
            v-gsap.whenVisible.fromTo="[{ opacity: 0, scale: .4 }, { opacity: 1, scale: 1, delay: 0.3 }, { opacity: 0, delay: 0.3 }]">
            <h4 class="text-3xl lg:text-4xl">{{ about2.title }}</h4>
            <p>{{ about2.description }}</p>
          </div>
          <div class="h-full">
            <img :src="about2.image" alt="" class="w-full h-full object-cover rounded-lg">
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container mb-20">
        <SectionTitle title="FAQ" class="text-center mb-10" description="Frequently Asked Questions" />
        <div class="flex flex-col gap-5 ">
          <div v-for="(f,index) in faq" :key="index" class="p-6 pb-3 bg-brand-50 rounded-lg duration-300">
            <h4 class="text-2xl font-semibold mb-2 cursor-pointer flex justify-between items-center" @click="answer(index)">
              {{ f.question }} <Icon name="iconoir:plus" class="text-2xl duration-300" :class="{ 'rotate-45': openAnswer == index }" />
            </h4>
            <Transition name="fade-up">
            <p v-if="openAnswer == index">
              {{ f.answer }}
            </p>
            </Transition>
          </div>
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

const { aboutOne, aboutTwo, faq } = useDataAbout()

const openAnswer = ref(null)
const answer = (index: number) => {
  openAnswer.value = openAnswer.value === index ? null : index
  console.log(index)
}

</script>

<style>
.page-header h1 {
  @apply text-white;
}
/* transition fade-up */
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.5s ease;
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
 
}
</style>