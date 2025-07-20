<template>
  <div class="flex flex-col items-start justify-start h-fit space-y-3">
    <h1 class="text-2xl font-bold">Recupera la password</h1>
    <p class="text-sm text-gray-500">Inserisci il tuo indirizzo email per ricevere un link di recupero</p>
    <UInput v-model="email" type="email" placeholder="Email" class="w-full" :ui="{
      base: 'shadow px-3 py-2'
    }" />
    <UButton :ui="{
      base: 'shadow px-3 py-2 w-fit bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-purple-500 hover:to-blue-500'
    }">
      Invia
    </UButton>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'auth'
  })
  const email = ref('')
</script>

<style lang="scss" scoped></style>