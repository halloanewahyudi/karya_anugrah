<template>
  <div>
    <div v-if="status === 'pending'" class="flex justify-center items-center py-40">
      <Icon
        name="line-md:loading-twotone-loop"
        class="text-5xl text-brand animate-spin"
      />
    </div>
    <div v-else-if="error">Failed to load posts</div>
    <div v-else>
      <!-- Hero Section -->

      <section class="relative mb-20">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center min-h-screen"
        >
          <div
            class="bg-brand text-brand-50 p-6 lg:p-10 h-full flex flex-col justify-center items-center lg:col-span-2"
          >
            <div>
              <h1 class="text-4xl lg:text-6xl font-bold text-white">
                {{ about.acf.title }}
              </h1>
              <div v-html="about.acf.description"></div>
            </div>
          </div>
          <img
            :src="about.acf.image"
            :alt="about.acf.title"
            class="h-full object-cover object-center lg:col-span-3"
          />
        </div>
      </section>
{{ about.acf.featured[1] }}
      <!-- Who Are We -->
      <section class="mb-20 text-center">
        <div class="max-w-screen-lg mx-auto px-6">
          <SectionTitle :title="about.acf.section_two.title" class="text-center mb-10" />
          <div v-html="about.acf.section_two.description"></div>
        </div>
      </section>

      <!-- About Featured -->
      <section class="mb-20">
        <div class="container">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
            <div v-for="(ab, index) in featured || []" :key="index">
              <div
                class="h-full min-h-[360px] relative rounded-lg overflow-hidden group flex flex-col justify-center items-center"
              >
                <div
                  class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-50/10 to-black/70 z-10 group-hover:bg-black/80 duration-300"
                ></div>
                <img
                  :src="ab.image"
                  alt=""
                  class="group-hover:scale-110 duration-300 w-full h-full object-cover rounded-lg absolute top-0 left-0"
                />
                <div
                  class="absolute text-white bottom-0 left-0 p-4 w-[calc(100%-2rem)] z-20"
                >
                  <h4 class="text-xl font-bold text-white">{{ ab.title }}</h4>
                </div>
                <button @click="expand(index)">
                  <Icon
                    name="iconoir:expand"
                    class="text-3xl text-white relative z-20 opacity-0 group-hover:opacity-100 duration-300"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>



      <!-- Our Latest Work -->
      <AboutWork />
     
      <!-- FAQ -->
      <AboutFaq />

      <!-- Modal Popup -->

      <Transition name="slide-fade-right">
        <div
          v-if="expandAbout"
          class="fixed top-0 left-0 w-full h-full z-50 flex justify-end items-center"
          @click.self="closeExpand"
        >
          <div
            class="p-6 w-full lg:w-[50%] h-screen overflow-y-auto bg-white relative right-0 top-0"
          >
            <button
              @click="closeExpand"
              class="absolute top-4 right-4 w-10 h-10 flex justify-center items-center text-white hover:text-black bg-red-500 rounded-full"
            >
              <Icon name="iconoir:cancel" class="text-2xl" />
            </button>
            <img
              :src="expandAbout.image"
              alt=""
              class="w-full h-64 object-cover rounded-md mb-4"
            />
            <h4 class="text-2xl font-bold mb-2">{{ expandAbout.title }}</h4>
            <p>{{ expandAbout.description }}</p>
          </div>
        </div>
      </Transition>
   
    </div>
    <!-- end else main -->
  </div>
</template>

<script lang="ts" setup>
definePageMeta({ title: "About" });

useSeoMeta({
  title: "About",
  ogTitle: "About",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});

//about by worpress=========================================

const { url, options } = useWpApi("custom-api/v1/page/about-us");
const { data: about, status, error } = useLazyFetch(url);

// Konversi object ke array
const featured = ref([]);
if (about.value) {
  featured.value = Object.values(about.value.acf.featured);
}

//==========================================================


const expandAbout = ref<any | null>(null);
const expand = (index: number) => {
  expandAbout.value = featured.value[index];
};
const closeExpand = () => {
  expandAbout.value = null;
};
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
