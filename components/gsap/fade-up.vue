<template>
  <div ref="root" class="fade-up">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const props = defineProps<{
  fromY?: number
  delay?: number
  duration?: number
  stagger?: number
  ease?: string
  start?: string
  end?: string
}>()

const root = ref<HTMLElement | null>(null)

const {
  fromY = 40,
  delay = 0,
  duration = 0.6,
  stagger = 0.2,
  ease = 'power2.out',
  start = 'top 85%',
  end = 'bottom 10%',
} = props

onMounted(() => {
  if (!root.value) return

  const children = root.value.querySelectorAll('.fade-up-child')
  const targets = children.length ? children : [root.value]

  gsap.fromTo(targets,
    { opacity: 0, y: fromY },
    {
      opacity: 1,
      y: 0,
      delay,
      duration,
      stagger: children.length ? stagger : .2,
      ease,
      scrollTrigger: {
        trigger: root.value,
        start,
        end,
        toggleActions: 'play none none none',
        once: true,
      },
    }
  )
})


</script>

<style scoped>
.fade-up, .fade-up-child {
  opacity: 0;
  transform: translateY(2.5rem);
}
</style>
