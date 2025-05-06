<template>
  <div class="">
     <form @submit.prevent="formSubmit" action="" class="flex flex-col gap-4">
      <div class="flex flex-col gap-3">
     
        <input type="text" placeholder="Name" v-model="formData.name" class="input">
      </div>
      <div>
      
        <input type="email" placeholder="Email" v-model="formData.email"  class="input">
      </div>
      <div>
        
        <input type="text" placeholder="Subject" v-model="formData.subject"  class="input">
      </div>
      <div>
    
        <textarea name="" id="" cols="30" rows="4" v-model="formData.message" placeholder="Message" class="input"></textarea>
      
      </div>

      <button class="btn max-w-max">Submit <Icon name="ri:send-plane-fill" /> </button>
     </form>
  </div>
</template>

<script lang="ts" setup>
 const formData = ref({})
 const formSubmit = () => {
  console.log(formData);
 }

</script>

<style>
 .input{
   @apply w-full py-2 border-b-2 border-brand outline-none  focus:bg-brand-50 ;
 }  
 textarea.input{
   @apply bg-brand-50
 }
</style>