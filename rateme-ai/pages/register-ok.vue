<template>
  <div>
    <!-- Header del messaggio -->
    <div class="text-center mb-8">
      <div class="flex justify-center mb-4">
        <!-- Icona email -->
        <div class="bg-green-100 rounded-full p-4">
          <svg class="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </div>
      </div>
      
      <h2 class="text-3xl font-bold text-gray-900 mb-4">Registrazione Completata!</h2>
      <p class="text-gray-600 text-lg mb-2">
        Ti abbiamo inviato una email di conferma
      </p>
      <p class="text-gray-500 text-sm">
        Controlla la tua casella di posta e clicca sul link per attivare il tuo account
      </p>
    </div>

    <!-- Istruzioni -->
    <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
      <h3 class="text-lg font-semibold text-blue-800 mb-3">Cosa fare ora:</h3>
      <ul class="space-y-2 text-blue-700">
        <li class="flex items-start">
          <span class="bg-blue-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center mr-3 mt-0.5">1</span>
          Controlla la tua email (anche nella cartella spam)
        </li>
        <li class="flex items-start">
          <span class="bg-blue-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center mr-3 mt-0.5">2</span>
          Clicca sul link di conferma nell'email
        </li>
        <li class="flex items-start">
          <span class="bg-blue-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center mr-3 mt-0.5">3</span>
          Accedi al tuo account con le credenziali create
        </li>
      </ul>
    </div>

    <!-- Azioni -->
    <div class="space-y-4">
      <!-- Bottone per andare al login -->
      <UButton 
        to="/login" 
        class="w-full"
        :ui="{
          base: 'cursor-pointer shadow px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-purple-500 hover:to-blue-500'
        }"
      >
        Vai al Login
      </UButton>
      
      <!-- Bottone per richiedere nuova email -->
      <UButton 
        variant="outline" 
        color="gray"
        class="w-full"
        @click="resendEmail"
        :loading="isResending"
        :disabled="isResending"
      >
        {{ isResending ? 'Invio in corso...' : 'Reinvia Email di Conferma' }}
      </UButton>
    </div>

    <!-- Success/Error messages per resend -->
    <div v-if="resendError" class="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
      <p class="text-sm text-red-600">{{ resendError }}</p>
    </div>
    
    <div v-if="resendSuccess" class="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
      <p class="text-sm text-green-600">{{ resendSuccess }}</p>
    </div>

    <!-- Link per tornare alla home -->
    <div class="text-center mt-8">
      <p class="text-sm text-gray-600">
        Vuoi tornare alla homepage?
        <UButton 
          to="/" 
          variant="link" 
          color="blue" 
          size="sm"
          :ui="{
            base: 'text-sm text-purple-500 hover:text-purple-600'
          }"
        >
          Vai alla Home
        </UButton>
      </p>
    </div>
  </div>
</template>

<script setup>
// Definizione del layout per questa pagina
definePageMeta({
  layout: 'auth'
})

const { $supabase } = useNuxtApp()

// Stato per il resend email
const isResending = ref(false)
const resendError = ref('')
const resendSuccess = ref('')

// Funzione per reinviare l'email di conferma
const resendEmail = async () => {
  isResending.value = true
  resendError.value = ''
  resendSuccess.value = ''
  
  try {
    // Qui dovresti implementare la logica per reinviare l'email
    // Questo dipende da come gestisci l'email nell'ultimo utente registrato
    // Per ora mostriamo solo un messaggio
    
    // Simulazione di attesa
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    resendSuccess.value = 'Email di conferma inviata nuovamente! Controlla la tua casella di posta.'
  } catch (error) {
    resendError.value = 'Errore nell\'invio dell\'email. Riprova più tardi.'
    console.error('Errore nel reinvio email:', error)
  } finally {
    isResending.value = false
  }
}

// Meta tags per SEO
useHead({
  title: 'Registrazione Completata - RateMe AI',
  meta: [
    { name: 'description', content: 'Registrazione completata con successo. Controlla la tua email per confermare l\'account.' }
  ]
})
</script>

<style lang="scss" scoped></style>