<template>
  <div class="min-h-screen bg-gray-50">
    <Sidebar />
    <div class="transition-all duration-300 ease-in-out" :class="[
      // Desktop: margine sinistro se sidebar è aperta
      'lg:ml-64',
      // Mobile: nessun margine
      'lg:ml-0'
    ]">
      <!-- Contenuto della pagina -->
      <main class="p-4 lg:p-8">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<script setup>
</script>