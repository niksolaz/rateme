import type { UserDetails, RegistrationForm } from '~/types/auth'

export const useAuth = () => {
  const { $supabase } = useNuxtApp()
  const user = ref(null)
  const userDetails = ref<UserDetails | null>(null)

  // Debug: verifica se Supabase è inizializzato correttamente
  console.log('useAuth initialized, $supabase:', $supabase)

  // Registrazione completa con dettagli utente
  const signUp = async (formData: RegistrationForm) => {
    console.log('Starting signUp with data:', formData)
    console.log('Supabase instance:', $supabase)
    
    try {
      // 1. Crea l'account utente in auth.users
      console.log('Attempting auth.signUp...')
      const { data: authData, error: authError } = await $supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      })
      
      console.log('Auth result:', { authData, authError })
      
      if (authError) throw authError
      
      // 2. Se la registrazione auth è riuscita, salva i dettagli
      if (authData.user) {
        const userDetailsData: Omit<UserDetails, 'id' | 'created_at' | 'updated_at'> = {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          plan: formData.plan,
          accept_terms: formData.acceptTerms,
          newsletter: formData.newsletter,
          address: formData.address || undefined,
          cap: formData.cap || undefined
        }

        const { error: detailsError } = await $supabase
          .from('user_details')
          .insert([{ 
            id: authData.user.id, 
            ...userDetailsData 
          }])
        
        if (detailsError) {
          // Se fallisce l'inserimento dei dettagli, elimina l'utente auth
          console.error('Errore nel salvare i dettagli utente:', detailsError)
          throw new Error('Errore durante la registrazione dei dettagli utente')
        }
      }
      
      return { data: authData, error: null }
    } catch (error) {
      console.error('SignUp error:', error)
      return { data: null, error }
    }
  }

  // Login (rimane uguale)
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
        await loadUserDetails(data.user.id)
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
    updateUserDetails
  }
}