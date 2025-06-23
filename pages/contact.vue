<template>
  <div v-if="status === 'pending'" class="flex justify-center items-center py-40">
    <Icon name="line-md:loading-twotone-loop" class="text-5xl text-brand animate-spin" />
  </div>
  <div v-else class="grid grid-cols-1 md:grid-cols-2 bg-brand-50">
    <div class=" flex flex-col justify-center">
      <div class="p-6 lg:p-10 flex flex-col justify-center items-center">
        <div class="max-w-[400px] w-full mx-auto ">
          <SectionTitle :title="contact.title"
            :description="contact.acf.contact_content"
            class="" />

          <div class=" flex flex-col gap-4 ">

            <div class="flex flex-col gap-2 bg-brand-100 text-gray-900 p-6 rounded-lg">
              <span class="flex  gap-2">
                <Icon name="iconoir:map-pin"  class="text-2xl"/>
                <div class="" v-html="address.alamat"></div>
              </span>
              <span class="flex items-center gap-2">
                <Icon name="iconoir:phone"  />
                <div class="">
                  {{ address.telepon }}
                </div>
              </span>
              <span class="flex items-center gap-2">
                <Icon name="iconoir:mail" />
                <div class="">
                  <a :href="`mailto:${address.email}`">{{ address.email }}</a>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-6 lg:p-10 flex flex-col justify-center items-center bg-[url('/solution/solution1b.jpg')] bg-no-repeat bg-cover bg-center">
      <div class="max-w-[460px] w-full mx-auto bg-white/90 rounded-lg border p-6 lg:p-10">
        <h4>Get In Touch</h4>
        <p>Fill out the form below and we will get back to you as soon as possible </p>
        <Form class="mt-6" />
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
 const {url} = useWpApi('custom-api/v1/page/contact')
const { data: contact, status, error } = useLazyFetch(url);

const { url: addressUrl } = useWpApi('custom-api/v1/kat-settings')
const { data: address, status: addressStatus, error: addressError } = useLazyFetch(addressUrl);
</script>

<style></style>