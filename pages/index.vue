<template>
  <section id="section-one" class="relative">
    <Slideshow />
  </section>
  <div class="bg-gray-50">
  <section id="section-two" class="bg-[url('img/bg-section.jpg')] bg-no-repeat bg-cover bg-center relative z-20 min-h-screen">
    <div class="container relative -top-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 " v-gsap.stagger.fromTo="[{ opacity: 0, y: 100 }, { opacity: 1, y: 0, delay: 0.2 }, { stagger: 0.4 }]"> <!-- soluiton -->

        <Card v-for="item in solution" :key="item" :title="item.title" :description="item.description"
          :image="item.image" class="text-center"> 
          <img :src="item.image" alt="" class="mx-auto h-20">
        </Card>
      </div>

      <div class="flex flex-wrap gap-4 justify-center items-center my-16"> <!-- partners -->
        <img v-for="i in partners" :key="i" :src="i.image" alt=""
          class="opacity-70 hover:opacity-100 duration-300 h-[40px] lg:h-auto">
      </div>

      <div v-gsap.whenVisible.from="{ opacity: 0, y: 10, duration: 2, delay: .5 }"
        class="text-center max-w-screen-md mx-auto text-brand-50"> <!-- sekilas about us -->
        <p class="text-xl leading-relaxed ">PT Karya Anugerah Technology specializes in the distribution of cutting-edge
          hardware and software solutions, designed to elevate your technological
          landscape. Explore a curated selection of premium products, meticulously chosen
          to empower your business with seamless efficiency and uncompromising
          performance.
        </p>
      </div>
     
    </div><!--  end container -->
      <div class="p-20"></div>
  </section>
  <section class="relative -top-40 z-40 -mb-20">  <!-- section product -->
    <div class="container">
      <div class="text-center mb-10 text-brand-50">
        <h4 class="text-xl font-semibold text-white">Our Products</h4>
        <p>Excellence in Hardware and Software Solutions</p>
        <div class="w-12 h-1 bg-brand mx-auto mt-2"></div>
      </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center lg:gap-10"
          v-gsap.whenVisible.stagger.fromTo="[{ opacity: 0, y: 100 }, { opacity: 1, y: 0, delay: 0.7 }, { stagger: 0.4 }]">
          <div v-for="post in products" :key="post"
            class="p-6 h-full bg-white rounded-xl border hover:border-none hover:shadow-2xl duration-300 text-center flex flex-col justify-between items-center">
            <!-- <img  :src="post.image" alt="" class="w-full h-40 object-cover"> -->
            <img :src="post.image" :alt="post.title" class="rounded-xl mb-3">
            <h4 class="text-lg font-semibold text-opacity-80">
              {{ post.title }}
            </h4>
          </div>
        </div>
        <div class="block text-center mt-10">
        <NuxtLink to="/" class="btn mx-auto inline-block text-center">Show More Products</NuxtLink>
      </div>
    </div>
  </section> <!-- end section product -->
  <section>
    <NuxtMarquee>
      <div v-for="logo in brands" :key="logo" class="h-[90px] hover:bg-brand-100 duration-200">
        <NuxtLink to="/" class="">
          <img :src="logo.image" alt="" class="h-full w-auto">
        </NuxtLink>
      </div>
    </NuxtMarquee>
  </section>
</div><!--  end bg gray -->

</template>
<script lang="ts" setup>

// page meta
definePageMeta({
  layout: 'default',
  title: 'Home',
  description: 'Home',
  keywords: 'Home',
})

const { solution, products, posts, partners , brands} = useDataHome()


</script>
<style></style>