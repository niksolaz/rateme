<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
      <div class="flex items-center justify-between px-4 py-3">
        <NuxtLink to="/" color="blue" variant="outline" size="sm">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">R</span>
            </div>
            <span class="text-lg font-bold text-gray-900">RateMe AI</span>
          </div>
        </NuxtLink>
        <!-- Azioni rapide mobile -->
        <div class="flex items-center space-x-2">
          <NuxtLink to="/pricing" class="text-gray-900 font-medium text-lg hover:text-blue-600 hover:border-b-2 hover:border-blue-600 focus:text-violet-600 focus:border-b-2 focus:border-violet-600">
            Pricing
          </NuxtLink>
          <NuxtLink to="/login" class="text-gray-900 font-medium text-lg hover:text-blue-600 hover:border-b-2 hover:border-blue-600 focus:text-violet-600 focus:border-b-2 focus:border-violet-600">
            Accedi
          </NuxtLink>
          <NuxtLink to="/register" class="text-gray-900 font-medium text-lg hover:text-blue-600 hover:border-b-2 hover:border-blue-600 focus:text-violet-600 focus:border-b-2 focus:border-violet-600">
            Registrati
          </NuxtLink>
        </div>
      </div>
    </header>
    <!-- Contenuto della pagina -->
    <main class="p-4 lg:p-8">
        <NuxtPage />
      </main>
  </div>
</template>

<script setup>
</script>