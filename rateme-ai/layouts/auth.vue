<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <!-- Logo e titolo -->
      <div class="text-center mb-8">
        <NuxtLink to="/">
          <div
            class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
            <span class="text-2xl font-bold text-white">R</span>
          </div>
          <h1 class="text-2xl font-bold text-gray-900 mb-2">RateMe AI</h1>
        </NuxtLink>
        <p class="text-gray-600">La tua piattaforma intelligente</p>
      </div>

      <!-- Contenuto della pagina -->
      <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <NuxtPage />
      </div>

      <!-- Footer -->
      <div class="text-center mt-8">
        <p class="text-sm text-gray-500">
          © 2025 RateMe AI. Tutti i diritti riservati.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  // Layout per pagine di autenticazione
  definePageMeta({
    layout: 'auth'
  })
</script>

<style lang="scss" scoped></style>