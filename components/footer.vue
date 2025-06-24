<template>
  <div id="footer" class="bg-gradient-to-b from-brand to-brand-900 text-brand-100 pt-16 pb-0 text-sm">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-10 ">
        <img src="/logo.png" alt="" class="w-20 lg:col-span-1">

        <div class="flex flex-col gap-4 lg:col-span-6">
          <h4 class="text-lg text-brand-100">Karya Anugrah Teknologi</h4>
          <div class="flex flex-col gap-2" v-if="settings">
            <span class="flex gap-2">
              <Icon name="iconoir:map-pin" />
              <div v-html="settings?.alamat"></div>
            </span>
            <span class="flex items-center gap-2" v-if="settings?.telepon">
              <Icon name="iconoir:phone" />
              <div>{{ settings.telepon }}</div>
            </span>
            <span class="flex items-center gap-2" v-if="settings?.email">
              <Icon name="iconoir:mail" />
              <div><a :href="`mailto:${settings.email}`">{{ settings.email }}</a></div>
            </span>
          </div>
        </div>

        <div class="flex flex-col gap-4 lg:col-span-3" v-if="settings?.tokopedia">
          <h4 class="text-lg text-brand-100">Marketplace</h4>
          <ul class="flex flex-col gap-2">
            <li>
              <a :href="settings.tokopedia" class="flex items-center gap-2">
                <Icon name="arcticons:tokopedia" class="text-3xl" /> Tokopedia
              </a>
            </li>
          </ul>
        </div>

        <div class="flex flex-col gap-4 lg:col-span-2" v-if="settings?.instagram || settings?.linkedin">
          <h4 class="text-lg text-brand-100">Social Media</h4>
          <ul class="flex flex-col gap-2">
            <li v-if="settings?.instagram">
              <a :href="settings.instagram" class="flex items-center gap-2">
                <Icon name="iconoir:instagram" class="text-2xl" /> Instagram
              </a>
            </li>
            <li v-if="settings?.linkedin">
              <a :href="settings.linkedin" class="flex items-center gap-2">
                <Icon name="iconoir:linkedin" class="text-2xl" /> Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="border-t border-dark3/30 py-5 text-xs mt-16 px-10 text-center">
      Copyright © 2025 | PT. Karya Anugrah Teknologi | All Rights Reserved . Powered by proweb
    </div>
  </div>
</template>

<script lang="ts" setup>


const { url } = useWpApi('custom-api/v1/kat-settings')
const { data: settings, status, error } = useLazyFetch(url)
</script>
