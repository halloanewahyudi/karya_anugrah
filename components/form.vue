<template>
  <div>
    <div v-if="success" class="text-center p-4 bg-brand-50 rounded-lg">
      Thanks <strong>{{ formData.name }}</strong> for your message <br />
      We will get back to you as soon as possible.
    </div>

    <form v-else @submit.prevent="formSubmit" class="flex flex-col gap-4">
      <div class="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Name"
          v-model="formData.name"
          class="input"
        />
        <p v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</p>
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          v-model="formData.email"
          class="input"
        />
        <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
      </div>

      <div>
        <input
          type="text"
          placeholder="Subject"
          v-model="formData.subject"
          class="input"
        />
      </div>

      <div>
        <textarea
          rows="4"
          v-model="formData.message"
          placeholder="Message"
          class="input"
        ></textarea>
        <p v-if="errors.message" class="text-red-500 text-sm">{{ errors.message }}</p>
      </div>

      <button class="btn max-w-max">
        Submit <Icon name="ri:send-plane-fill" />
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const formData = ref<FormData>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const errors = ref<Partial<FormData>>({})
const success = ref(false)

const validateEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const formSubmit = () => {
 // submit to cf7 rest api
 

  errors.value = {}

  if (!formData.value.name) {
    errors.value.name = 'Name is required'
  }

  if (!formData.value.email) {
    errors.value.email = 'Email is required'
  } else if (!validateEmail(formData.value.email)) {
    errors.value.email = 'Email is invalid'
  }

  if (!formData.value.message) {
    errors.value.message = 'Message is required'
  }

  if (Object.keys(errors.value).length === 0) {
    // Simulate success
    console.log('Submitted:', formData.value)
    success.value = true
  }
}
</script>

<style scoped>
.input {
  @apply w-full py-2 border-b border-brand outline-none focus:bg-brand-50 bg-transparent;
}
textarea.input {
  @apply bg-brand-50;
}
</style>
