<template>
  <div
    class="navbar top-0 left-0 w-full z-50 transition-transform duration-300"
    :class="[
      openMenu ? 'bg-gradient-to-b from-brand to-brand-700 text-brand-50 min-h-screen duration-300' : '',
      scrolled ? 'scrolled' : '',
      isVisible ? 'fixed translate-y-0' : 'fixed -translate-y-full'
    ]"
  >
    <div class="container">
      <div class="flex justify-between items-center gap-4 ">
        <img src="/logo.png" alt="" class="w-16">

        <div class="menu-container lg:block w-full " :class="openMenu ? '' : 'hidden'">
          <ul class="flex flex-col gap-2 lg:flex-row lg:gap-10 lg:justify-end ">
            <li v-for="menu in menus" :key="menu.name" class="relative group py-2">
              <nuxt-link :to="menu.path" class="hover:text-secondary duration-200">
                {{ menu.name }}
              </nuxt-link>

              <!-- Sub-menu Brands -->
              <Transition name="slide-up">
              <template v-if="menu.name === 'Brands'">
                <ul class="sub-menu mm">
                  <li v-for="brand in paginatedBrands" :key="brand.name">
                    <NuxtLink :to="brand.path"
                      class="hover:text-secondary duration-200 flex flex-col text-[10px] items-center gap-0 hover:bg-brand-50 rounded-lg p-2">
                      <img v-if="brand.image" :src="brand.image" alt="" class="w-16" />
                      {{ brand.name }}
                    </NuxtLink>
                  </li>
                  <li class="col-span-full flex gap-2  items-center mt-2">
                    <button @click.stop="prevPage" :disabled="currentPage === 1"
                      class="text-xs px-2 py-1 border rounded hover:bg-brand-100 disabled:opacity-50">Prev</button>
                    <span class="text-xs">{{ currentPage }} / {{ totalPages }}</span>
                    <button @click.stop="nextPage" :disabled="currentPage === totalPages"
                      class="text-xs px-2 py-1 border rounded hover:bg-brand-100 disabled:opacity-50">Next</button>
                  </li>
                </ul>
              </template>

              <!-- Default Sub-menu -->
              <template v-else-if="menu.child">
                <ul class="sub-menu">
                  <li v-for="child in menu.child" :key="child.name">
                    <NuxtLink :to="child.path" class="hover:text-secondary duration-200 flex gap-2">
                      <img v-if="child.image" :src="child.image" alt="" class="w-6" />
                      {{ child.name }}
                    </NuxtLink>
                  </li>
                </ul>
              </template>
              </Transition>
            </li>
          </ul>
        </div>

        <div>
          <button @click="btnSearch = !btnSearch"><Icon name="ri:search-line" class="text-3xl text-brand" /> </button>
        </div>
        <button @click="openMenu = !openMenu" class="lg:hidden">
          <Icon name="ri:menu-3-fill" class="text-3xl text-brand" :class="openMenu ? 'text-brand-50' : ''" />
        </button>
      </div>
    </div>
  </div>

  <Transition name="slide-up">
    <div v-if="btnSearch"  class="py-4 fixed top-0 left-0 w-full z-50 bg-brand-50">
    <div class="container">
      <div class="flex gap-2 items-center">
        <input type="search" v-model="search" placeholder="Search..." class="w-full py-2 px-4 rounded-lg">
        <button @click="btnSearch = false" class=""><Icon name="ri:close-line" class="text-3xl text-brand" /> </button>
      </div>
      
    </div>
  </div>
  </Transition>
 

  <div class="fixed top-0 left-0 h-0.5 w-0 bg-secondary transition-all duration-200 ease-out z-[1000]"
    :style="{ width: progress + '%' }"></div>
</template>

<script lang="ts" setup>
const { menus } = useMenus()
const openMenu = ref(false)
const scrolled = ref(false)
const isVisible = ref(true)
const previousScroll = ref(0)

const search = ref('')
const btnSearch = ref(false)

// Scroll handler to show/hide navbar based on scroll direction
const handleScroll = () => {
  const currentScroll = window.scrollY
  scrolled.value = currentScroll > 20

  if (currentScroll < previousScroll.value) {
    isVisible.value = true // Scroll up
  } else {
    isVisible.value = false // Scroll down
  }

  previousScroll.value = currentScroll
}

// Loading indicator progress bar
const { progress, isLoading, start, finish, clear } = useLoadingIndicator({
  duration: 2000,
  throttle: 200,
  estimatedProgress: (duration, elapsed) => (2 / Math.PI * 100) * Math.atan(elapsed / duration * 100 / 50)
})

// Brands menu pagination
const perPage = 10
const currentPage = ref(1)

const brandsMenu = computed(() => menus.find((menu) => menu.name === 'Brands'))
const brands = computed(() => brandsMenu.value?.child || [])

const paginatedBrands = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return brands.value.slice(start, start + perPage)
})

const totalPages = computed(() => Math.ceil(brands.value.length / perPage))

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++
}
function prevPage() {
  if (currentPage.value > 1) currentPage.value--
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<style>
.navbar {
  @apply text-brand bg-white border-b transition-transform duration-300;
}

.navbar.scrolled {
  @apply bg-white text-brand;
}

.menu-container {
  @apply absolute top-20 left-0 z-50 w-full p-6 px-10 lg:relative lg:top-0 lg:left-auto;
}

/* active link */
.navbar .router-link-active {
  @apply text-secondary;
}

.sub-menu {
  @apply absolute top-10 left-0 z-50 lg:w-[180px] p-4 bg-white text-brand rounded-lg hidden group-hover:flex flex-col gap-3 shadow-xl text-sm opacity-0 group-hover:opacity-100 transition-all duration-300;
}

.sub-menu.mm {
  @apply group-hover:grid grid-cols-1 lg:grid-cols-5 gap-2 lg:w-[600px] -translate-x-1/2;
}

.sub-menu.mm li a {
  @apply flex flex-col text-[10px] items-center gap-0 hover:bg-brand-50 rounded-lg p-2 duration-300;
}

.sub-menu.mm li img {
  @apply w-16;
}

/* transiiton slide up */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translate3d(0, -100%, 0);
} 
</style>
