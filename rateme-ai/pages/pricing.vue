<template>
  <div>
    <!-- Header -->
    <div class="text-center mb-16">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        Scegli il piano perfetto per te
      </h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Inizia gratuitamente e scala secondo le tue esigenze. 
        Tutti i piani includono supporto e aggiornamenti.
      </p>
    </div>

    <!-- Piani di prezzo -->
    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <!-- Piano Free -->
      <UCard class="relative">
        <div class="text-center">
          <h3 class="text-2xl font-bold text-gray-900 mb-2">Free</h3>
          <div class="mb-6">
            <span class="text-4xl font-bold text-gray-900">€0</span>
            <span class="text-gray-600">/mese</span>
          </div>
          <p class="text-gray-600 mb-8">
            Perfetto per iniziare e testare le funzionalità
          </p>
          
          <ul class="space-y-4 mb-8 text-left">
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Fino a 10 valutazioni/mese
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Report base
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Supporto email
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              API limitata
            </li>
          </ul>
          
          <UButton 
            color="gray" 
            variant="outline" 
            class="w-full"
            @click="selectPlan('free')"
          >
            Inizia Gratis
          </UButton>
        </div>
      </UCard>

      <!-- Piano Pro -->
      <UCard class="relative border-2 border-blue-500">
        <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span class="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Più Popolare
          </span>
        </div>
        
        <div class="text-center">
          <h3 class="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
          <div class="mb-6">
            <span class="text-4xl font-bold text-gray-900">€29</span>
            <span class="text-gray-600">/mese</span>
          </div>
          <p class="text-gray-600 mb-8">
            Ideale per professionisti e piccole aziende
          </p>
          
          <ul class="space-y-4 mb-8 text-left">
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Fino a 100 valutazioni/mese
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Report avanzati
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Supporto prioritario
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              API completa
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Esportazione dati
            </li>
          </ul>
          
          <UButton 
            color="blue" 
            variant="solid" 
            class="w-full"
            @click="selectPlan('pro')"
          >
            Scegli Pro
          </UButton>
        </div>
      </UCard>

      <!-- Piano Enterprise -->
      <UCard class="relative">
        <div class="text-center">
          <h3 class="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
          <div class="mb-6">
            <span class="text-4xl font-bold text-gray-900">€99</span>
            <span class="text-gray-600">/mese</span>
          </div>
          <p class="text-gray-600 mb-8">
            Per grandi aziende con esigenze avanzate
          </p>
          
          <ul class="space-y-4 mb-8 text-left">
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Valutazioni illimitate
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Report personalizzati
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Supporto dedicato 24/7
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              API illimitata
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Integrazione personalizzata
            </li>
          </ul>
          
          <UButton 
            color="gray" 
            variant="outline" 
            class="w-full"
            @click="selectPlan('enterprise')"
          >
            Contattaci
          </UButton>
        </div>
      </UCard>
    </div>

    <!-- FAQ Section -->
    <div class="mt-20">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          Domande Frequenti
        </h2>
        <p class="text-gray-600">
          Tutto quello che devi sapere sui nostri piani
        </p>
      </div>

      <div class="max-w-3xl mx-auto space-y-6">
        <UCard v-for="(faq, index) in faqs" :key="index">
          <UDisclosure>
            <UDisclosureButton class="w-full text-left">
              <h3 class="text-lg font-semibold text-gray-900">{{ faq.question }}</h3>
            </UDisclosureButton>
            <UDisclosurePanel>
              <p class="text-gray-600 mt-2">{{ faq.answer }}</p>
            </UDisclosurePanel>
          </UDisclosure>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'landing'
})
// FAQ data
const faqs = ref([
  {
    question: 'Posso cambiare piano in qualsiasi momento?',
    answer: 'Sì, puoi aggiornare o declassare il tuo piano in qualsiasi momento. Le modifiche saranno applicate immediatamente.'
  },
  {
    question: 'C\'è un periodo di prova gratuito?',
    answer: 'Sì, offriamo un periodo di prova gratuito di 14 giorni per tutti i piani a pagamento.'
  },
  {
    question: 'Come funziona il supporto tecnico?',
    answer: 'Il supporto è disponibile via email per tutti i piani. I piani Pro ed Enterprise includono supporto prioritario e dedicato.'
  },
  {
    question: 'I miei dati sono al sicuro?',
    answer: 'Assolutamente. Utilizziamo crittografia end-to-end e rispettiamo tutte le normative sulla privacy (GDPR).'
  }
])

// Funzione per selezionare un piano
const selectPlan = (plan) => {
  console.log(`Piano selezionato: ${plan}`)
  
  if (plan === 'free') {
    // Reindirizza alla registrazione gratuita
    navigateTo('/register')
  } else if (plan === 'pro') {
    // Reindirizza al checkout per il piano Pro
    navigateTo('/checkout?plan=pro')
  } else if (plan === 'enterprise') {
    // Reindirizza alla pagina di contatto
    navigateTo('/contact')
  }
}
</script>

<style lang="scss" scoped>

</style>