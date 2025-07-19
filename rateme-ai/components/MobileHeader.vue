<template>
  <header class="lg:hidden bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
    <div class="flex items-center justify-between px-4 py-3">
      <div class="flex items-center space-x-3">
        <button 
          @click="toggleSidebar"
          class="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <span class="text-white font-bold text-sm">R</span>
        </div>
        <span class="text-lg font-bold text-gray-900">RateMe AI</span>
      </div>
      
      <!-- Azioni rapide mobile -->
      <div class="flex items-center space-x-2">
        <UButton 
          to="/login" 
          color="blue" 
          variant="outline" 
          size="sm"
        >
          Accedi
        </UButton>
      </div>
    </div>
  </header>
</template>

<script setup>
// Componente MobileHeader
defineOptions({
  name: 'MobileHeader'
})

const { toggleSidebar } = useSidebar()
</script> 