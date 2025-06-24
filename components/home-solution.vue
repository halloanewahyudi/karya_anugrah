<template>
  <div> 
     <div v-if="status === 'pending'" class="flex justify-center items-center py-40">
     <Icon name="line-md:loading-twotone-loop" class="text-5xl text-brand animate-spin" />
     </div>
     <div v-else>
      <section id="section-two" class="py-20 bg-neutral-50">
      <div class="container">
        <div class="text-center mb-10">
          <h4 class="text-4xl font-semibold">Product & Service</h4>
          <p>What can we provide to you today?</p>
          <!--  <div class="w-12 h-1 bg-brand mx-auto mt-2"></div> -->
        </div>
        <GsapFadeUp start="top 90%" end="bottom 5%" :from-y="60" :stagger="1" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- soluiton -->
         <div class="" v-for="post in solutions" :key="post">
          <div
            class="rounded-lg bg-white lg:min-h-[480px] h-full flex flex-col p-6 text-white items-start justify-end bg-no-repeat bg-cover bg-center group"
            :style="{ backgroundImage: `url('${post.image}')` }">
            <div class="group-hover:translate-y-2 duration-300">
              <h4 class="text-white text-2xl mb-0 ">{{ post.title }}</h4>
              <div v-html="post.content" />
            </div>
            <NuxtLink :to="post.acf.link"
              class="btn  translate-y-10 opacity-0  group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75 mt-5">
              Show More</NuxtLink>
          </div>
        </div>
          <!-- end soluiton -->

        </GsapFadeUp>
      </div>
    </section>
     </div>
  </div>
</template>

<script lang="ts" setup>
  const {url } = useWpApi("custom-api/v1/solutions");
  const { data: solutions, status, error } = useLazyFetch(url, { server: false });
</script>

<style>

</style>