<template>
  <div>
    <!-- Header Dashboard -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
      <p class="text-gray-600">Benvenuto nella tua area di controllo</p>
    </div>

    <!-- Statistiche -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <!-- Statistica 1 -->
      <UCard>
        <div class="flex items-center">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-600">Valutazioni Totali</p>
            <p class="text-2xl font-bold text-gray-900">1,234</p>
          </div>
        </div>
      </UCard>

      <!-- Statistica 2 -->
      <UCard>
        <div class="flex items-center">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-600">Punteggio Medio</p>
            <p class="text-2xl font-bold text-gray-900">8.5</p>
          </div>
        </div>
      </UCard>

      <!-- Statistica 3 -->
      <UCard>
        <div class="flex items-center">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-600">Ultima Valutazione</p>
            <p class="text-2xl font-bold text-gray-900">2h fa</p>
          </div>
        </div>
      </UCard>

      <!-- Statistica 4 -->
      <UCard>
        <div class="flex items-center">
          <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
            <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-600">Utenti Attivi</p>
            <p class="text-2xl font-bold text-gray-900">567</p>
          </div>
        </div>
      </UCard>
    </div>

    <!-- Sezione principale -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Grafico principale -->
      <div class="lg:col-span-2">
        <UCard>
          <template #header>
            <h3 class="text-lg font-semibold text-gray-900">Andamento Valutazioni</h3>
          </template>
          <div class="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p class="text-gray-500">Grafico interattivo delle valutazioni</p>
          </div>
        </UCard>
      </div>

      <!-- Azioni rapide -->
      <div>
        <UCard>
          <template #header>
            <h3 class="text-lg font-semibold text-gray-900">Azioni Rapide</h3>
          </template>
          <div class="space-y-4">
            <UButton 
              color="blue" 
              variant="solid" 
              class="w-full justify-start"
              @click="createNewEvaluation"
            >
              <template #leading>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </template>
              Nuova Valutazione
            </UButton>
            
            <UButton 
              color="green" 
              variant="outline" 
              class="w-full justify-start"
              @click="exportData"
            >
              <template #leading>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </template>
              Esporta Dati
            </UButton>
            
            <UButton 
              color="purple" 
              variant="outline" 
              class="w-full justify-start"
              @click="viewReports"
            >
              <template #leading>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </template>
              Visualizza Report
            </UButton>
          </div>
        </UCard>
      </div>
    </div>

    <!-- Valutazioni recenti -->
    <div class="mt-8">
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold text-gray-900">Valutazioni Recenti</h3>
        </template>
        <div class="space-y-4">
          <div v-for="(evaluation, index) in recentEvaluations" :key="index" class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div class="flex items-center">
              <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span class="text-blue-600 font-semibold">{{ evaluation.score }}</span>
              </div>
              <div>
                <p class="font-medium text-gray-900">{{ evaluation.title }}</p>
                <p class="text-sm text-gray-600">{{ evaluation.date }}</p>
              </div>
            </div>
            <UBadge :color="evaluation.status === 'completed' ? 'green' : 'yellow'">
              {{ evaluation.status === 'completed' ? 'Completata' : 'In corso' }}
            </UBadge>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
// Dati di esempio per le valutazioni recenti
const recentEvaluations = ref([
  {
    title: 'Valutazione Prodotto A',
    score: 8.5,
    date: '2 ore fa',
    status: 'completed'
  },
  {
    title: 'Analisi Servizio B',
    score: 7.2,
    date: '1 giorno fa',
    status: 'completed'
  },
  {
    title: 'Review Sistema C',
    score: 9.1,
    date: '3 giorni fa',
    status: 'completed'
  }
])

// Funzioni per le azioni
const createNewEvaluation = () => {
  console.log('Creazione nuova valutazione')
  // Implementa qui la logica per creare una nuova valutazione
}

const exportData = () => {
  console.log('Esportazione dati')
  // Implementa qui la logica per esportare i dati
}

const viewReports = () => {
  console.log('Visualizzazione report')
  // Implementa qui la logica per visualizzare i report
}
</script>

<style lang="scss" scoped>

</style>