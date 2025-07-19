export const useSidebar = () => {
  const sidebarOpen = ref(false)
  const isMobile = ref(false)

  // Gestione responsive
  const checkScreenSize = () => {
    if (import.meta.client) {
      isMobile.value = window.innerWidth < 1024 // lg breakpoint
    }
  }

  // Toggle sidebar
  const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value
  }

  // Chiudi sidebar
  const closeSidebar = () => {
    sidebarOpen.value = false
  }

  // Apri sidebar
  const openSidebar = () => {
    sidebarOpen.value = true
  }

  // Chiudi sidebar su mobile quando si clicca su un link
  const closeSidebarOnMobile = () => {
    if (isMobile.value) {
      sidebarOpen.value = false
    }
  }

  // Inizializza la sidebar
  const initSidebar = () => {
    if (import.meta.client) {
      checkScreenSize()
      window.addEventListener('resize', checkScreenSize)
      
      // Su desktop, la sidebar è sempre aperta di default
      if (!isMobile.value) {
        sidebarOpen.value = true
      }
    }
  }

  // Cleanup
  const cleanupSidebar = () => {
    if (import.meta.client) {
      window.removeEventListener('resize', checkScreenSize)
    }
  }

  // Watch per cambiamenti di dimensione schermo
  watch(isMobile, (newValue) => {
    if (newValue) {
      // Su mobile, chiudi la sidebar
      sidebarOpen.value = false
    } else {
      // Su desktop, apri la sidebar
      sidebarOpen.value = true
    }
  })

  return {
    sidebarOpen: readonly(sidebarOpen),
    isMobile: readonly(isMobile),
    toggleSidebar,
    closeSidebar,
    openSidebar,
    closeSidebarOnMobile,
    initSidebar,
    cleanupSidebar
  }
} 