<template>
  <div class="navbar fixed top-0 left-0 w-full py-2  z-50" :class=" [openMenu ? 'bg-gradient-to-b from-brand to-brand-700 text-brand-50 min-h-screen duration-300' : '', scrolled ? 'scrolled' : ''] ">
    <div class="container">
      <div class="flex justify-between items-center gap-4 ">
        <img src="/logo.png" alt="" class="w-16">
        <div class="menu-container lg:block w-full " :class=" openMenu ? '' : 'hidden' ">
          <ul class="flex flex-col gap-2 lg:flex-row lg:gap-4 lg:justify-end ">
          <li v-for="menu in menus" :key="menu.name">
            <nuxt-link :to="menu.path"  class="hover:text-secondary duration-200">
              {{ menu.name }}  
            </nuxt-link>
          </li>
        </ul>
        </div>
        <button @click="openMenu = !openMenu" class="lg:hidden"><Icon name="ri:menu-3-fill" class="text-3xl text-brand" :class=" openMenu ? 'text-brand-50' : '' " /></button>
      </div>
    
    </div>
  </div>
  <div
    v-if="isLoading"
    class="fixed top-0 left-0 h-1 w-0 bg-secondary transition-all duration-200 ease-out z-[1000]"
    :style="{ width: progress + '%'}"
  ></div>
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
 // progress
 const { progress, isLoading, start, finish, clear } = useLoadingIndicator({
    duration: 2000,
    throttle: 200,
    // This is how progress is calculated by default
    estimatedProgress: (duration, elapsed) => (2 / Math.PI * 100) * Math.atan(elapsed / duration * 100 / 50)
  })


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

/* active link */
.navbar .router-link-active{
  @apply text-secondary;
}

</style>