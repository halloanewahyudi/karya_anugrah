<template>
  <div class="navbar fixed top-0 left-0 w-full py-2  z-50" :class=" [openMenu ? 'bg-gradient-to-b from-brand to-brand-700 text-brand-50 min-h-screen duration-300' : '', scrolled ? 'scrolled' : ''] ">
    <div class="container">
      <div class="flex justify-between items-center gap-4 ">
        <img src="/logo.png" alt="" class="w-16">
        <div class="menu-container lg:block w-full " :class=" openMenu ? '' : 'hidden' ">
          <ul class="flex flex-col gap-2 lg:flex-row lg:gap-4 lg:justify-end ">
          <li v-for="menu in menus" :key="menu.name" class="hover:text-primary">
            <nuxt-link :to="menu.path">
              {{ menu.name }}
            </nuxt-link>
          </li>
        </ul>
        </div>
        <button @click="openMenu = !openMenu" class="lg:hidden"><Icon name="ri:menu-3-fill" class="text-3xl text-brand" :class=" openMenu ? 'text-brand-50' : '' " /></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { menus } = useMenus()
 const openMenu = ref(false)
 const scrolled = ref(false)
 // onscroll navbar add class scrolled
 const handleScroll = () => {
   if(window.scrollY > 20){
    scrolled.value = true
   }else{
    scrolled.value = false
   }
 }

 onMounted(() => {
   window.addEventListener('scroll', handleScroll)
 })
</script>

<style>
.navbar{
  @apply text-white bg-transparent;
}
.navbar.scrolled{
  @apply bg-white text-brand duration-300;
}
.menu-container{
  @apply absolute top-20 left-0  z-50 w-full p-6 px-10 lg:relative lg:top-0 lg:left-auto ;
}

</style>