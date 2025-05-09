<script setup>
import DOMPurify from 'dompurify'

const props = defineProps({
  content: {
    type: String,
    required: true
  }
})

const cleanedContent = ref('')

onMounted(() => {
  const cleanHTML = DOMPurify.sanitize(props.content)
  cleanedContent.value = fixInlineStyles(cleanHTML)
})

function fixInlineStyles(html) {
  const div = document.createElement('div')
  div.innerHTML = html

  const allElements = div.querySelectorAll('[style]')
  allElements.forEach(el => {
    const style = el.getAttribute('style')
    const fixedStyle = style.replace(
      /(\b(?:margin|padding|top|left|right|bottom)-?(?:top|right|bottom|left)?):(\d+)(?!px|em|rem|%)/g,
      '$1:$2px'
    )
    el.setAttribute('style', fixedStyle)
  })

  return div.innerHTML
}
</script>

<template>
  <div v-if="cleanedContent" class="wp-content" v-html="cleanedContent" />
</template>
