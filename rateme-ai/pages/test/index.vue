<template>
  <div>
    <!-- Header della pagina -->
    <div class="mb-8 flex justify-between items-center">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Test Disponibili</h1>
        <p class="text-gray-600">Scegli un test da eseguire o visualizzare i dettagli</p>
      </div>
      
      <!-- Pulsante Crea Test -->
      <UButton 
        color="blue" 
        variant="solid" 
        @click="creaTest"
        class="flex items-center cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded-md"
      >
        <template #leading>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
        </template>
        Crea Test
      </UButton>
    </div>

    <!-- Griglia dei test -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <UCard 
        v-for="test in tests" 
        :key="test.id"
        class="hover:shadow-lg transition-shadow duration-200"
      >
        <div class="flex flex-col h-full">
          <!-- Header del card -->
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h2 class="text-lg font-semibold text-gray-900">{{ test.titolo }}</h2>
          </div>

          <!-- Descrizione -->
          <p class="text-gray-600 mb-6 flex-grow">{{ test.breve_descrizione }}</p>

          <!-- Pulsante azione -->
          <UButton 
            color="blue" 
            variant="solid" 
            class="w-full cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded-md"
            @click="vediDettagli(test.id)"
          >
            <template #leading>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </template>
            Vedi dettagli
          </UButton>
        </div>
      </UCard>
    </div>

    <!-- Sezione statistiche -->
    <div class="mt-8">
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold text-gray-900">Statistiche Test</h3>
        </template>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="text-center p-4 bg-gray-50 rounded-lg">
            <p class="text-2xl font-bold text-blue-600">{{ tests.length }}</p>
            <p class="text-sm text-gray-600">Test Totali</p>
          </div>
          <div class="text-center p-4 bg-gray-50 rounded-lg">
            <p class="text-2xl font-bold text-green-600">0</p>
            <p class="text-sm text-gray-600">Test Completati</p>
          </div>
          <div class="text-center p-4 bg-gray-50 rounded-lg">
            <p class="text-2xl font-bold text-purple-600">0</p>
            <p class="text-sm text-gray-600">Test in Corso</p>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
const { data: tests } = await useFetch('http://localhost:3001/tests')

// Funzione per vedere i dettagli del test
const vediDettagli = (id) => {
  console.log('Visualizzazione dettagli test:', id)
  // Qui puoi implementare la navigazione alla pagina dei dettagli
  navigateTo(`/test/${id}`)
}

// Funzione per creare un nuovo test (da implementare)
const creaTest = () => {
  console.log('Creazione nuovo test...')
  // Qui puoi implementare la navigazione alla pagina di creazione del test
  navigateTo('/test/create')
}
</script>

<style lang="scss" scoped>
// Stili aggiuntivi se necessari
</style>