<template>
  <div>
    <div v-if="status === 'pending'" class="flex justify-center items-center py-40">
      <Icon
        name="line-md:loading-twotone-loop"
        class="text-5xl text-brand animate-spin"
      />
    </div>

    <div v-else-if="error">Failed to load posts</div>
    <section v-else>
      <div class="container mb-20">
        <SectionTitle
          title="FAQ"
          class="text-center mb-10"
          description="Frequently Asked Questions"
        />
        <div class="flex flex-col gap-5">
          <div
            v-for="(f, index) in faqs"
            :key="index"
            class="p-6 pb-3 bg-brand-50 rounded-lg duration-300"
          >
            <h4
              class="text-2xl font-semibold mb-2 cursor-pointer flex justify-between items-center"
              @click="answer(index)"
            >
              {{ f.title }}
              <Icon
                name="iconoir:plus"
                class="text-2xl duration-300"
                :class="{ 'rotate-45': openAnswer === index }"
              />
            </h4>
            <Transition name="fade-up">
              <div v-if="openAnswer === index" v-html="f.content">
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const { url } = useWpApi("custom-api/v1/faqs");
const { data: faqs, status, error } = useLazyFetch(url, { server: false });


const openAnswer = ref<number | null>(null);
const answer = (index: number) => {
  openAnswer.value = openAnswer.value === index ? null : index;
};
</script>

<style></style>
