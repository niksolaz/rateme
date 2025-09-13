import type { UserDetails, RegistrationForm } from '~/types/auth'

export const useAuth = () => {
  const { $supabase } = useNuxtApp()
  const user = ref(null)
  const userDetails = ref<UserDetails | null>(null)

  // Debug: verifica se Supabase è inizializzato correttamente
  console.log('useAuth initialized, $supabase')

  // Registrazione solo auth (senza dettagli)
  const signUp = async (formData: RegistrationForm) => {
    console.info('Starting signUp with data')
    console.info('Supabase instance')
    
    try {
      // 1. Crea solo l'account utente in auth.users
      console.info('Attempting auth.signUp...')
      const { data: authData, error: authError } = await $supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      })
      
      console.info('Auth session created')
      
      if (authError) throw authError
      
      // 2. Salva temporaneamente i dettagli in localStorage per l'inserimento futuro
      if (authData.user) {
        const userDetailsData = {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          plan: formData.plan,
          accept_terms: formData.acceptTerms,
          newsletter: formData.newsletter,
          address: formData.address || undefined,
          cap: formData.cap || undefined
        }

        // Salva temporaneamente in localStorage con l'ID utente
        if (process.client) {
          localStorage.setItem(`pending_user_details_${authData.user.id}`, JSON.stringify(userDetailsData))
        }
      }
      
      return { data: authData, error: null }
    } catch (error) {
      console.error('SignUp error:', error)
      return { data: null, error }
    }
  }

  // Inserisce i dettagli utente dalla cache temporanea
  const insertPendingUserDetails = async (userId: string) => {
    try {
      if (!process.client) return null

      // Recupera i dati dalla cache temporanea
      const pendingData = localStorage.getItem(`pending_user_details_${userId}`)
      if (!pendingData) return null

      const userDetailsData = JSON.parse(pendingData)

      // Inserisce i dettagli nel database
      const { data, error } = await $supabase
        .from('user_details')
        .insert([{ 
          id: userId, 
          ...userDetailsData 
        }])
        .select()
        .single()

      if (error) {
        console.error('Errore nell\'inserimento dei dettagli utente:', error)
        return null
      }

      // Rimuove i dati temporanei
      localStorage.removeItem(`pending_user_details_${userId}`)
      
      console.info('Dettagli utente inseriti con successo')
      return data
    } catch (error) {
      console.error('Errore nell\'inserimento dei dettagli utente:', error)
      return null
    }
  }

  // Login con gestione dettagli mancanti
  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await $supabase.auth.signInWithPassword({
        email,
        password,
      })
      
      if (error) throw error
      
      user.value = data.user
      
      // Carica anche i dettagli utente
      if (data.user) {
        // Prima prova a caricare i dettagli esistenti
        const existingDetails = await loadUserDetails(data.user.id)
        
        // Se non esistono, prova a inserire quelli in cache
        if (!existingDetails) {
          const insertedDetails = await insertPendingUserDetails(data.user.id)
          if (insertedDetails) {
            userDetails.value = insertedDetails
          }
        }
      }
      
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  // Carica dettagli utente
  const loadUserDetails = async (userId: string) => {
    try {
      const { data, error } = await $supabase
        .from('user_details')
        .select('*')
        .eq('id', userId)
        .single()
      
      if (error) throw error
      
      userDetails.value = data
      return data
    } catch (error) {
      console.error('Errore nel caricare i dettagli utente:', error)
      return null
    }
  }

  // Aggiorna dettagli utente
  const updateUserDetails = async (updates: Partial<UserDetails>) => {
    try {
      if (!user.value) throw new Error('Utente non autenticato')
      
      const { data, error } = await $supabase
        .from('user_details')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', user.value.id)
        .select()
        .single()
      
      if (error) throw error
      
      userDetails.value = data
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  // Logout
  const signOut = async () => {
    try {
      const { error } = await $supabase.auth.signOut()
      if (error) throw error
      
      user.value = null
      userDetails.value = null
      return { error: null }
    } catch (error) {
      return { error }
    }
  }

  // Ottieni utente corrente
  const getCurrentUser = async () => {
    try {
      const { data: { user }, error } = await $supabase.auth.getUser()
      if (error) throw error
      
      if (user && !userDetails.value) {
        await loadUserDetails(user.id)
      }
      
      return user
    } catch (error) {
      return null
    }
  }

  return {
    user: readonly(user),
    userDetails: readonly(userDetails),
    signUp,
    signIn,
    signOut,
    getCurrentUser,
    loadUserDetails,
    updateUserDetails,
    insertPendingUserDetails
  }
}