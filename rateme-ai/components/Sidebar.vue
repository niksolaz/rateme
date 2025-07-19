<template>
  <div>
    <!-- Sidebar per Desktop (sempre visibile su lg+) -->
    <aside
      class="fixed top-0 left-0 h-full bg-white shadow-lg border-r border-gray-200 z-50 transition-transform duration-300 ease-in-out"
      :class="[
        // Desktop: sempre visibile se sidebarOpen è true
        'lg:translate-x-0 lg:block',
        // Mobile: slide in/out basato su sidebarOpen
        sidebarOpen ? 'translate-x-0' : '-translate-x-full',
        // Larghezza responsive
        'w-64 lg:w-64'
      ]">
      <!-- Header della sidebar -->
      <div class="p-6 border-b border-gray-200">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div
              class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">R</span>
            </div>
            <div>
              <span class="text-xl font-bold text-gray-900">RateMe AI</span>
              <p class="text-xs text-gray-500">Intelligenza Artificiale</p>
            </div>
          </div>
          <!-- Toggle button per mobile -->
          <button @click="toggleSidebar" class="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Navigazione principale -->
      <nav class="flex-1 overflow-y-auto">
        <div class="p-4 space-y-2">
          <!-- Sezione principale -->
          <div>
            <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
              Navigazione
            </h3>

            <NuxtLink to="/dashboard"
              class="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
              active-class="bg-blue-50 text-blue-600 border-r-2 border-blue-600" @click="closeSidebarOnMobile">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>
              </svg>
              <span class="font-medium">Dashboard</span>
            </NuxtLink>

            <NuxtLink to="/analytics"
              class="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
              active-class="bg-blue-50 text-blue-600 border-r-2 border-blue-600" @click="closeSidebarOnMobile">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
                </path>
              </svg>
              <span class="font-medium">Analytics</span>
            </NuxtLink>

            <NuxtLink to="/offers"
              class="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
              active-class="bg-blue-50 text-blue-600 border-r-2 border-blue-600" @click="closeSidebarOnMobile">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7">
                </path>
              </svg>
              <span class="font-medium">Offerte</span>
            </NuxtLink>

            <!-- <NuxtLink to="/test" -->
             <NuxtLink to="/test"
              class="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
              active-class="bg-blue-50 text-blue-600 border-r-2 border-blue-600" @click="closeSidebarOnMobile">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z">
                </path>
              </svg>
              <span class="font-medium">Test</span>
            </NuxtLink>
          </div>

          <!-- Separatore -->
          <div class="border-t border-gray-200 my-4"></div>

          <!-- Sezione Account -->
          <div>
            <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
              Account
            </h3>
            <UButton color="blue" variant="solid" size="sm"  class="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
              active-class="bg-blue-50 text-blue-600 border-r-2 border-blue-600"
              @click="onLogout">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1">
                </path>
              </svg>
              <span class="font-medium">Logout</span>
            </UButton>
          </div>

          <!-- Separatore -->
          <div class="border-t border-gray-200 my-4"></div>

          <!-- Sezione Supporto -->
          <div>
            <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
              Supporto
            </h3>
            
            <NuxtLink to="/helps"
              class="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
              active-class="bg-blue-50 text-blue-600 border-r-2 border-blue-600" @click="closeSidebarOnMobile">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                </path>
              </svg>
              <span class="font-medium">Aiuto</span>
            </NuxtLink>

            <NuxtLink to="/contact"
              class="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
              active-class="bg-blue-50 text-blue-600 border-r-2 border-blue-600" @click="closeSidebarOnMobile">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                </path>
              </svg>
              <span class="font-medium">Contatti</span>
            </NuxtLink>

            <!-- <NuxtLink to="/settings" -->
            <NuxtLink to="/settings"
              class="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
              active-class="bg-blue-50 text-blue-600 border-r-2 border-blue-600" @click="closeSidebarOnMobile">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                </path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">
                </path>
              </svg>
              <span class="font-medium">Impostazioni</span>
            </NuxtLink>
          </div>
        </div>
      </nav>

      <!-- Footer della sidebar -->
      <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
        <div class="text-center">
          <p class="text-xs text-gray-500">
            © 2025 RateMe AI
          </p>
          <p class="text-xs text-gray-400 mt-1">
            v1.0.0
          </p>
        </div>
      </div>
    </aside>

    <!-- Overlay per mobile -->
    <div v-if="sidebarOpen && isMobile" class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
      @click="closeSidebar"></div>

    <!-- Contenuto principale -->
    <!-- Header mobile -->
    <header class="lg:hidden bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
      <div class="flex items-center justify-between px-4 py-3">
        <div class="flex items-center space-x-3">
          <button @click="toggleSidebar" class="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-sm">R</span>
          </div>
          <span class="text-lg font-bold text-gray-900">RateMe AI</span>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
  // Layout di default con sidebar responsive usando il composable
  const {
    sidebarOpen,
    isMobile,
    toggleSidebar,
    closeSidebar,
    closeSidebarOnMobile,
    initSidebar,
    cleanupSidebar
  } = useSidebar()

  // Lifecycle hooks
  onMounted(() => {
    initSidebar()
  })

  onUnmounted(() => {
    cleanupSidebar()
  })
</script>

<style scoped>

  /* Stili personalizzati per la sidebar */
  .overflow-y-auto {
    scrollbar-width: thin;
    scrollbar-color: #CBD5E0 #F7FAFC;
  }

  .overflow-y-auto::-webkit-scrollbar {
    width: 4px;
  }

  .overflow-y-auto::-webkit-scrollbar-track {
    background: #F7FAFC;
  }

  .overflow-y-auto::-webkit-scrollbar-thumb {
    background: #CBD5E0;
    border-radius: 2px;
  }

  .overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: #A0AEC0;
  }
</style>