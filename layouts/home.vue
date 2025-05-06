<template>
  <div>
    <!-- Fixed Navbar -->
    <Navbar ref="navbarRef" />

    <!-- Konten utama, diberi padding sesuai tinggi navbar -->
    <div :style="{ paddingTop: contentPadding + 'px' }">
      <slot />
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script lang="ts" setup>
const navbarRef = ref<HTMLElement | null>(null)
const contentPadding = ref(0)

// Setelah mount, hitung tinggi navbar
onMounted(() => {
  if (navbarRef.value) {
    contentPadding.value = navbarRef.value.offsetHeight
  }
})
</script>
