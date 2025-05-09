<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitting = ref(false)
const responseMessage = ref('')

const submitForm = async () => {
  submitting.value = true
  responseMessage.value = ''

  const formData = new FormData()

  // 🔐 Wajib - internal field CF7
  formData.append('_wpcf7', 'e370b33')                  // Ganti dengan form ID numerik kamu
  formData.append('_wpcf7_locale', 'id_ID')        // Ganti sesuai bahasa WordPress kamu

  // 📝 Field sesuai Contact Form 7
  formData.append('your-name', form.name)
  formData.append('your-email', form.email)
  formData.append('your-subject', form.subject || '')
  formData.append('your-message', form.message || '')

  // Debug: log isi formData
  for (let pair of formData.entries()) {
    console.log(pair[0] + ':', pair[1])
  }

  try {
    const response = await fetch('https://kat.sementara.net/wp-json/contact-form-7/v1/contact-forms/63/feedback', {
      method: 'POST',
      body: formData
    })

    const result = await response.json()
    console.log('Response:', result)

    if (result.status === 'mail_sent') {
      responseMessage.value = '✅ Pesan berhasil dikirim!'
      form.name = ''
      form.email = ''
      form.subject = ''
      form.message = ''
    } else {
      responseMessage.value = `⚠️ Gagal: ${result.message}`
    }

  } catch (error) {
    responseMessage.value = '❌ Terjadi kesalahan saat mengirim.'
    console.error(error)
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <input v-model="form.name" type="text" name="your-name" placeholder="Nama" required />
    <input v-model="form.email" type="email" name="your-email" placeholder="Email" required />
    <input v-model="form.subject" type="text" name="your-subject" placeholder="Subjek" />
    <textarea v-model="form.message" name="your-message" placeholder="Pesan Anda (opsional)" />
    <button type="submit" :disabled="submitting">
      {{ submitting ? 'Mengirim...' : 'Kirim Pesan' }}
    </button>
    <p v-if="responseMessage">{{ responseMessage }}</p>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1em;
  max-width: 400px;
}
</style>
