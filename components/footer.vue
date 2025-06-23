<template>
  <div id="footer" class="bg-gradient-to-b from-brand to-brand-900 text-brand-100 pt-16 pb-0 text-sm">
    <div class="container">

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-10 ">
        <img src="/logo.png" alt="" class="w-20 lg:col-span-1">

        <div class=" flex flex-col gap-4 lg:col-span-6">
         <h4 class="text-lg">Karya Anugrah Teknologi</h4>
           <div class="flex flex-col gap-2">
            <span class="flex  gap-2">
              <Icon name="iconoir:map-pin" />
              <div class="" v-html="settings.alamat"></div>
            </span>
            <span class="flex items-center gap-2">
              <Icon name="iconoir:phone" />
              <div class="">
                {{ settings.telepon }}
              </div>
            </span>
            <span class="flex items-center gap-2">
              <Icon name="iconoir:mail"  />
              <div class="">
                <a :href="`mailto:${settings.email}`">{{ settings.email }}</a>
              </div>
            </span>
           </div>
        </div>


        <div class="flex flex-col gap-4 lg:col-span-3"> <!-- solution -->
          <h4 class="text-lg">Marketplace</h4>
         <ul class="flex flex-col gap-2">
       <li ><a :href="settings.tokopedia" class="flex items-center gap-2"> <Icon name="arcticons:tokopedia" class="text-3xl" /> Tokopedia</a></li>
         </ul>
        </div>

        <div class="flex flex-col gap-4 lg:col-span-2"> <!-- social -->
            <h4 class="text-lg">Social Media</h4>
            <ul class="flex flex-col gap-2">
           
              <li><a :href="settings.instagram" class="flex items-center gap-2"> <Icon name="iconoir:instagram" class="text-2xl" /> Instagram </a></li>
              <li><a :href="settings.linkedin" class="flex items-center gap-2"> <Icon name="iconoir:linkedin" class="text-2xl" /> Linkedin </a></li>
             </ul>
          
        </div>

        </div> <!-- end grid -->
    </div>
    <div class="border-t  border-dark3/30 py-5 text-xs mt-16 px-10 text-center">
      Copyright © 2025 | PT. Karya Anugrah Teknologi | All Rights Reserved . Powered by proweb
    </div>
  </div>
</template>

<script lang="ts" setup>
 const { products, solutions } = useDataHome()
 const {menus} = useMenus()

 const { url } = useWpApi('custom-api/v1/kat-settings')
 const { data: settings, status, error } = useLazyFetch(url);
</script>

<style scoped>
#footer li a {
    @apply hover:text-brand-300 duration-200;
}
h1,h2,h3,h4,h5,h6{
    @apply font-sans font-bold text-dark3;
}
</style>