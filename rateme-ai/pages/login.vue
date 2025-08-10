<template>
  <div>
    <!-- Header del form -->
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-gray-900 mb-2">Accedi al tuo account</h2>
      <p class="text-gray-600">
        Inserisci le tue credenziali per accedere
      </p>
    </div>

    <!-- Form di login -->
    <form @submit.prevent="handleLogin" class="space-y-6">
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
      </div>

      <!-- Remember me e Forgot password -->
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <UCheckbox v-model="form.rememberMe" name="newsletter" :ui="{
            container: 'border border-gray-300 rounded-md size-5 flex items-center justify-center',
            icon: 'text-purple-500'
          }" />
          <span class="text-xs text-gray-700">
            Ricordami
          </span>
        </div>
        <UButton to="/forgot-password" :ui="{
          base: 'text-xs text-purple-500 hover:text-purple-600'
        }">
          Password dimenticata?
        </UButton>
      </div>

      <!-- Error Message -->
      <div v-if="error" class="p-3 bg-red-50 border border-red-200 rounded-md">
        <p class="text-sm text-red-600">{{ error }}</p>
      </div>

      <!-- Submit button -->
      <UButton type="submit" :loading="isLoading" :disabled="isLoading" :ui="{
        base: 'shadow px-3 py-2 w-fit bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-purple-500 hover:to-blue-500'
      }">
        {{ isLoading ? 'Accesso in corso...' : 'Accedi' }}
      </UButton>
    </form>

    <!-- Divider -->
    <!-- <div class="relative my-6">
      <div class="absolute inset-0 flex items-center">
        <div class="w-full border-t border-gray-300"></div>
      </div>
      <div class="relative flex justify-center text-sm">
        <span class="bg-white px-2 text-gray-500">Oppure continua con</span>
      </div>
    </div> -->

    <!-- Social login -->
    <!-- <div class="space-y-3">
      <UButton
        color="gray"
        variant="outline"
        class="w-full"
        @click="handleGoogleLogin"
      >
        <template #leading>
          <svg class="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        </template>
Continua con Google
</UButton>
</div> -->

    <!-- Sign up link -->
    <div class="text-center mt-8">
      <p class="text-sm text-gray-600">
        Non hai un account?
        <UButton to="/register" variant="link" color="blue" size="sm">
          Registrati
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

  const { signIn } = useAuth()
  const router = useRouter()

  // Reattività del form
  const form = ref({
    email: '',
    password: '',
    rememberMe: false
  })

  const isLoading = ref(false)
  const error = ref('')

  // Gestione del login
  const handleLogin = async () => {
    isLoading.value = true
    error.value = ''

    const { data: _data, error: loginError } = await signIn(form.value.email, form.value.password)

    if (loginError) {
      error.value = loginError.message
    } else {
      // Redirect alla dashboard o homepage
      await router.push('/dashboard')
    }

    isLoading.value = false
  }

  // Gestione del login con Google
  const _handleGoogleLogin = () => {
    console.log('Google login clicked')
    // Implementa qui la logica per il login con Google
  }
</script>

<style lang="scss" scoped></style>