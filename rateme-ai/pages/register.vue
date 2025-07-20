<template>
  <div>
    <!-- Header del form -->
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-gray-900 mb-2">Crea il tuo account</h2>
      <p class="text-gray-600">
        Inizia subito con RateMe AI
      </p>
    </div>

    <!-- Form di registrazione -->
    <form @submit.prevent="handleRegister" class="space-y-6">
      <!-- Nome e Cognome -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
            Nome
          </label>
          <UInput id="firstName" v-model="form.firstName" type="text" placeholder="Il tuo nome" required class="w-full"
            :ui="{
              base: 'shadow px-3 py-2'
            }" />
        </div>
        <div>
          <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
            Cognome
          </label>
          <UInput id="lastName" v-model="form.lastName" type="text" placeholder="Il tuo cognome" required class="w-full"
            :ui="{
              base: 'shadow px-3 py-2'
            }" />
        </div>
      </div>

      <!-- Email -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <UInput id="email" v-model="form.email" type="email" placeholder="la-tua-email@esempio.com" required
          class="w-full" :ui="{
            base: 'shadow px-3 py-2'
          }" />
      </div>

      <!-- Password -->
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <UInput id="password" v-model="form.password" type="password" placeholder="••••••••" required class="w-full"
          :ui="{
            base: 'shadow px-3 py-2'
          }" />
        <p class="text-sm text-gray-500 mt-1">
          Minimo 8 caratteri con lettere e numeri
        </p>
      </div>

      <!-- Conferma Password -->
      <div>
        <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-2">
          Conferma Password
        </label>
        <UInput id="confirmPassword" v-model="form.confirmPassword" type="password" placeholder="••••••••" required
          class="w-full" :ui="{
            base: 'shadow px-3 py-2'
          }" />
      </div>

      <!-- Piano -->
      <div class="py-3">
        <label for="plan" class="block text-sm font-medium text-gray-700 mb-2">
          Piano
        </label>
        <USelect v-model="form.plan" :items="planOptions" placeholder="Seleziona un piano" :ui="{
          base: 'shadow w-full px-3 py-2',
          item: 'bg-white z-50 text-black focus:text-purple-500',
          itemLabel: 'hover:text-purple-700',
          itemTrailingIcon: 'text-purple-500 px-3',
          trailingIcon: 'text-transparent',
          viewport: 'bg-white z-50 rounded-md px-3 py-2'
        }" />
      </div>

      <!-- Termini e condizioni -->
      <div class="flex items-center gap-3">
        <UCheckbox v-model="form.acceptTerms" name="accept-terms" :ui="{
          container: 'border border-gray-300 rounded-md size-5 flex items-center justify-center',
          icon: 'text-purple-500'
        }" />
        <span class="text-xs text-gray-700">
          Accetto i
          <UButton variant="link" size="sm" class="p-0 h-auto" :ui="{
            base: 'text-xs text-purple-500'
          }">
            Termini di Servizio
          </UButton>
          e la
          <UButton variant="link" color="blue" size="sm" class="p-0 h-auto" :ui="{
            base: 'text-xs text-purple-500'
          }">
            Privacy Policy
          </UButton>
        </span>
      </div>

      <!-- Newsletter -->
      <div class="flex items-center gap-3">
        <UCheckbox v-model="form.newsletter" name="newsletter" :ui="{
          container: 'border border-gray-300 rounded-md size-5 flex items-center justify-center',
          icon: 'text-purple-500'
        }" />
        <span class="text-xs text-gray-700">
          Voglio ricevere aggiornamenti e offerte speciali via email
        </span>
      </div>

      <!-- Submit button -->
      <UButton type="submit" :loading="isLoading" :disabled="isLoading || !form.acceptTerms" :ui="{
        base: 'shadow px-3 py-2 w-fit bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-purple-500 hover:to-blue-500'
      }">
        {{ isLoading ? 'Creazione account...' : 'Crea Account' }}
      </UButton>
    </form>

    <!-- Divider -->
    <!-- <div class="relative my-6">
      <div class="absolute inset-0 flex items-center">
        <div class="w-full border-t border-gray-300"></div>
      </div>
      <div class="relative flex justify-center text-sm">
        <span class="bg-white px-2 text-gray-500">Oppure registrati con</span>
      </div>
    </div> -->

    <!-- Social registration -->
    <!-- <div class="space-y-3">
      <UButton
        color="gray"
        variant="outline"
        class="w-full"
        @click="handleGoogleRegister"
      >
        <template #leading>
          <svg class="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        </template>
Registrati con Google
</UButton>
</div> -->

    <!-- Login link -->
    <div class="text-center mt-8">
      <p class="text-sm text-gray-600">
        Hai già un account?
        <UButton to="/login" :ui="{
          base: 'text-xs text-purple-500 hover:text-purple-600'
        }">
          Accedi
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

  // Opzioni per i piani
  const planOptions = ref([
    { label: 'Scegli un piano', value: 'none' },
    { label: 'Free - €0/mese', value: 'free' },
    { label: 'Pro - €29/mese', value: 'pro' },
    { label: 'Enterprise - €99/mese', value: 'enterprise' }
  ])

  // Reattività del form
  const form = ref({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    plan: 'none',
    acceptTerms: false,
    newsletter: false
  })

  const isLoading = ref(false)

  // Gestione della registrazione
  const handleRegister = async () => {
    // Validazione
    if (form.value.password !== form.value.confirmPassword) {
      alert('Le password non coincidono')
      return
    }

    if (form.value.password.length < 8) {
      alert('La password deve essere di almeno 8 caratteri')
      return
    }

    if (!form.value.acceptTerms) {
      alert('Devi accettare i termini di servizio')
      return
    }

    isLoading.value = true

    try {
      // Simulazione di una chiamata API
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Qui andrà la logica di registrazione reale
      console.log('Registration attempt:', form.value)

      // Reindirizzamento alla dashboard dopo la registrazione
      await navigateTo('/dashboard')

    } catch (error) {
      console.error('Errore durante la registrazione:', error)
    } finally {
      isLoading.value = false
    }
  }

  // Gestione della registrazione con Google
  const handleGoogleRegister = () => {
    console.log('Google registration clicked')
    // Implementa qui la logica per la registrazione con Google
  }
</script>