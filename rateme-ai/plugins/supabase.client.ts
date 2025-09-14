// plugins/supabase.client.ts
import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig()
  const supabase = createClient(
    config.public.supabaseUrl,
    config.public.supabaseAnonKey
  )

  // Ascolta i cambiamenti di stato dell'autenticazione
  supabase.auth.onAuthStateChange(async (event, session) => {
    console.log('Auth state change:', event, session?.user?.id)
    
    if (event === 'SIGNED_IN' && session?.user) {
      console.log('Utente autenticato', session.user.email)
      
      // TEMPORANEAMENTE DISABILITATO - causava blocco al login
      // TODO: Implementare update is_email_confirmed in modo non bloccante
      /*
      if (session.user.email_confirmed_at) {
        console.log('Email confirmed, updating user_details...')
        // Update logic commented out to avoid blocking login
      }
      */
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