<template>
  <div>
    <!-- Hero Section -->
    <section class="relative mb-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center min-h-screen">
        <div class="bg-brand text-brand-50 p-6 lg:p-10 h-full flex flex-col justify-center items-center lg:col-span-2">
          <div>
<h1 class="text-4xl lg:text-6xl font-bold text-white">About Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt malesuada venenatis. Integer id ipsum ac ante iaculis pulvinar</p>
          </div>

        </div>
          <img src="/img/page-header.avif" alt="" class="h-full object-cover object-center lg:col-span-3">
      </div>

    </section>

    <!-- Who Are We -->
    <section class="mb-20 text-center">
      <div class="max-w-screen-lg mx-auto px-6">
        <SectionTitle title="WHO ARE WE?" />
        <p>
          Karya Anugrah Teknologi is an IT distribution company that specializes in providing the best hardware for our
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

    <!-- About Featured -->
    <section class="mb-20">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
          <div v-for="(about, index) in aboutOne" :key="index">
            <div class="h-full min-h-[360px] relative rounded-lg overflow-hidden group flex flex-col justify-center items-center">
              <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-50/10 to-black/70 z-10 group-hover:bg-black/80 duration-300 "></div>
              <img :src="about.image" alt="" class="group-hover:scale-110 duration-300 w-full h-full object-cover rounded-lg absolute top-0 left-0" />
              <div class="absolute text-white bottom-0 left-0 p-4 w-[calc(100%-2rem)] z-20">
                <h4 class="text-xl font-bold text-white">{{ about.title }}</h4>
              </div>
              <button @click="expand(index)">
                <Icon name="iconoir:expand" class="text-3xl text-white relative z-20 opacity-0 group-hover:opacity-100 duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

   

    <!-- Our Latest Work -->
    <section>
      <div class="container flex flex-col gap-6 mb-20">
        <SectionTitle title="OUR LATEST WORK" class="text-center mb-10" />
        <div v-for="about2 in aboutTwo" :key="about2.title" class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          <div class="p-6 flex flex-col gap-4">
            <h4 class="text-3xl lg:text-4xl">{{ about2.title }}</h4>
            <p>{{ about2.description }}</p>
          </div>
          <div class="h-full">
            <img :src="about2.image" alt="" class="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section>
      <div class="container mb-20">
        <SectionTitle title="FAQ" class="text-center mb-10" description="Frequently Asked Questions" />
        <div class="flex flex-col gap-5">
          <div v-for="(f, index) in faq" :key="index" class="p-6 pb-3 bg-brand-50 rounded-lg duration-300">
            <h4 class="text-2xl font-semibold mb-2 cursor-pointer flex justify-between items-center" @click="answer(index)">
              {{ f.question }}
              <Icon name="iconoir:plus" class="text-2xl duration-300" :class="{ 'rotate-45': openAnswer === index }" />
            </h4>
            <Transition name="fade-up">
              <p v-if="openAnswer === index">
                {{ f.answer }}
              </p>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal Popup -->
    
  <Transition name="slide-fade-right">
  <div v-if="expandAbout" class="fixed top-0 left-0 w-full h-full z-50 flex justify-end items-center" @click.self="closeExpand">
    <div class="p-6 w-full lg:w-[50%] h-screen overflow-y-auto bg-white relative right-0 top-0">
      <button @click="closeExpand" class="absolute top-4 right-4 w-10 h-10 flex justify-center items-center text-white hover:text-black bg-red-500 rounded-full">
        <Icon name="iconoir:cancel" class="text-2xl" />
      </button>
      <img :src="expandAbout.image" alt="" class="w-full h-64 object-cover rounded-md mb-4" />
      <h4 class="text-2xl font-bold mb-2">{{ expandAbout.title }}</h4>
      <p>{{ expandAbout.description }}</p>
    </div>
  </div>
</Transition>


  </div>
</template>

<script lang="ts" setup>
definePageMeta({ title: 'About' })

useSeoMeta({
  title: 'About',
  ogTitle: 'About',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

const { aboutOne, aboutTwo, faq } = useDataAbout()

const openAnswer = ref<number | null>(null)
const answer = (index: number) => {
  openAnswer.value = openAnswer.value === index ? null : index
}

const expandAbout = ref<any | null>(null)
const expand = (index: number) => {
  expandAbout.value = aboutOne.value[index]
}
const closeExpand = () => {
  expandAbout.value = null
}
</script>

<style scoped>
.slide-fade-right-enter-active,
.slide-fade-right-leave-active {
  transition: all 0.4s ease;
}
.slide-fade-right-enter-from,
.slide-fade-right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.slide-fade-right-enter-to,
.slide-fade-right-leave-from {
  opacity: 1;
  transform: translateX(0);
}

</style>
