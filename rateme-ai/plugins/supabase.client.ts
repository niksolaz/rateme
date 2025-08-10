// plugins/supabase.client.ts
import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig()
  const supabase = createClient(
    config.public.supabaseUrl,
    config.public.supabaseAnonKey
  )

  // Ascolta i cambiamenti di stato dell'autenticazione
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
      console.log('Utente autenticato:', session?.user)
    } else if (event === 'SIGNED_OUT') {
      console.log('Utente disconnesso')
    }
  })

  return {
    provide: {
      supabase
    }
  }
})