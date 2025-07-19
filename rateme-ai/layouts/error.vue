<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
    <div class="text-center max-w-md mx-auto">
      <!-- Icona errore -->
      <div class="mb-8">
        <div class="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-4">
          <svg class="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
          </svg>
        </div>
      </div>

      <!-- Messaggio errore -->
      <h1 class="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">Pagina non trovata</h2>
      <p class="text-gray-600 mb-8">
        La pagina che stai cercando non esiste o è stata spostata.
      </p>

      <!-- Azioni -->
      <div class="space-y-4">
        <UButton 
          to="/" 
          color="blue" 
          variant="solid" 
          size="lg"
          class="w-full md:w-auto"
        >
          Torna alla Home
        </UButton>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton 
            to="/dashboard" 
            color="gray" 
            variant="outline"
          >
            Dashboard
          </UButton>
          <UButton 
            to="/pricing" 
            color="gray" 
            variant="outline"
          >
            Prezzi
          </UButton>
        </div>
      </div>

      <!-- Logo -->
      <div class="mt-12">
        <div class="inline-flex items-center space-x-2">
          <div class="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center">
            <span class="text-white font-bold text-xs">R</span>
          </div>
          <span class="text-sm text-gray-500">RateMe AI</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Layout per gestire errori 404
</script>

<style lang="scss" scoped>

</style>