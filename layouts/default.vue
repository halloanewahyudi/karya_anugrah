<template>
  <div>
    <Navbar ref="navbar" />

    <!-- Konten utama diberi padding-top sesuai tinggi navbar -->
    <div :style="{ paddingTop: `${paddingTop}px` }">
      <slot />
    </div>

    <Footer />
  </div>
</template>

<script lang="ts" setup>
const navbar = ref<{ el: HTMLElement } | null>(null)
const paddingTop = ref(0)

const setPadding = () => {
  if (navbar.value?.el) {
    paddingTop.value = navbar.value.el.offsetHeight
  }
}

onMounted(() => {
  setPadding()
  window.addEventListener('resize', setPadding)
})

/* onBeforeUnmount(() => {
  window.removeEventListener('resize', setPadding)
}) */
</script>
