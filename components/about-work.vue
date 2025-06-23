<template>
  <div>
  <div v-if="status === 'pending'" class="flex justify-center items-center py-40">
    <Icon name="line-md:loading-twotone-loop" class="text-5xl text-brand animate-spin" />
  </div>
  <section v-else>
        <div class="container flex flex-col gap-6 mb-20">
          <SectionTitle title="OUR LATEST WORK" class="text-center mb-10" />
          <div
            v-for="project in work.projects"
            :key="project.title"
            class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center"
          >
            <div class="p-6 flex flex-col gap-4">
              <h4 class="text-3xl lg:text-4xl">{{ project.title }}</h4>
              <div v-html="project.content" />
            </div>
            <div class="h-full">
              <img
                :src="project.image"
                alt=""
                class="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
       
  </div>
  
</template>

<script lang="ts" setup>
 const {url} = useWpApi("custom-api/v1/projects");
 const { data: work, status, error } = useLazyFetch(url);
</script>

<style>

</style>