<template>
  <div class="grid grid-cols-1 md:grid-cols-2 bg-brand-50">
    <div class=" flex flex-col justify-center">
      <div class="p-6 lg:p-10 flex flex-col justify-center items-center">
        <div class="max-w-[400px] w-full mx-auto ">
          <SectionTitle title="Contact Us"
            description="Specializes in the distribution of cutting-edge hardware and software solutions, designed to elevate your technological landscape"
            class="" />

          <div class=" flex flex-col gap-4 ">

            <div class="flex flex-col gap-2 bg-brand-100 text-gray-900 p-6 rounded-lg">
              <span class="flex  gap-2">
                <Icon name="iconoir:map-pin" />
                <div class="">
                  Citra Garden 6 <br>
                  Pegadungan, Tegal Alur, <br>
                  Kec. Kalideres, Kota Jakarta Barat
                </div>
              </span>
              <span class="flex items-center gap-2">
                <Icon name="iconoir:phone" />
                <div class="">
                  +62 821 xxx xxx
                </div>
              </span>
              <span class="flex items-center gap-2">
                <Icon name="iconoir:mail" />
                <div class="">
                  yKo8b@example.com
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
        <FormContact class="mt-6" />
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>