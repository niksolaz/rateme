<template>
  <div>
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Valutazioni
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Intelligenti
          </span>
        </h1>
        <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Sfrutta la potenza dell'AI per analisi dettagliate, valutazioni precise e insights 
          che trasformano i tuoi dati in decisioni strategiche.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton 
            to="/dashboard" 
            color="blue" 
            variant="solid" 
            size="lg"
          >
            Inizia Gratis
          </UButton>
          <UButton 
            to="/pricing" 
            color="gray" 
            variant="outline" 
            size="lg"
          >
            Vedi Prezzi
          </UButton>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Perché scegliere RateMe AI?
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            La piattaforma più avanzata per valutazioni basate sull'intelligenza artificiale
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <UCard class="text-center hover:shadow-lg transition-shadow duration-300">
            <template #header>
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900">AI Avanzata</h3>
            </template>
            <p class="text-gray-600">
              Algoritmi di machine learning all'avanguardia per analisi precise e predittive.
            </p>
          </UCard>

          <!-- Feature 2 -->
          <UCard class="text-center hover:shadow-lg transition-shadow duration-300">
            <template #header>
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900">Tempo Reale</h3>
            </template>
            <p class="text-gray-600">
              Valutazioni istantanee e aggiornamenti in tempo reale per decisioni rapide.
            </p>
          </UCard>

          <!-- Feature 3 -->
          <UCard class="text-center hover:shadow-lg transition-shadow duration-300">
            <template #header>
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900">Analisi Dettagliate</h3>
            </template>
            <p class="text-gray-600">
              Report completi con grafici interattivi e insights approfonditi.
            </p>
          </UCard>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-bold text-white mb-4">
          Pronto a iniziare?
        </h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Unisciti a migliaia di utenti che già utilizzano RateMe AI per le loro valutazioni.
        </p>
        <UButton 
          to="/register" 
          color="blue" 
          variant="solid" 
          size="lg"
        >
          Registrati Ora
        </UButton>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'landing'
})
</script>

<style lang="scss" scoped>

</style>