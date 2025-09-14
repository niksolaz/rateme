import type { UserDetails, RegistrationForm } from '~/types/auth'

export const useAuth = () => {
  const { $supabase } = useNuxtApp()
  const user = ref<any>(null)
  const userDetails = ref<UserDetails | null>(null)

  // Debug: verifica se Supabase è inizializzato correttamente
  console.log('useAuth initialized, $supabase')

  // Registrazione con salvataggio immediato dettagli
  const signUp = async (formData: RegistrationForm) => {
    console.info('Starting signUp with data')
    console.info('Supabase instance')
    
    try {
      // 1. Crea l'account utente in auth.users
      console.info('Attempting auth.signUp...')
      const { data: authData, error: authError } = await $supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      })
      
      console.info('Auth session created')
      
      if (authError) throw authError
      
      // 2. Salva i dettagli in localStorage per inserimento successivo (bypass RLS temporaneo)
      if (authData.user) {
        const userDetailsData = {
          id: authData.user.id,
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          plan: formData.plan,
          accept_terms: formData.acceptTerms,
          newsletter: formData.newsletter,
          address: formData.address || undefined,
          cap: formData.cap || undefined,
          is_admin: false,
          is_email_confirmed: false,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
        
        console.info('Saving user details to localStorage for later insert...', userDetailsData)
        
        // Salva in localStorage - l'inserimento avverrà al primo login
        if (import.meta.client) {
          localStorage.setItem(`pending_user_details_${authData.user.id}`, JSON.stringify(userDetailsData))
          console.info('User details saved to localStorage successfully')
        }
      }
      
      console.info('SignUp process completed successfully')
      return { data: authData, error: null }
    } catch (error) {
      console.error('SignUp error:', error)
      return { data: null, error }
    }
  }

  // Inserisce i dettagli utente dalla cache temporanea
  const insertPendingUserDetails = async (userId: string) => {
    console.log('insertPendingUserDetails called for userId:', userId)
    try {
      if (!import.meta.client) {
        console.log('Not in client, returning null')
        return null
      }

      // Recupera i dati dalla cache temporanea
      const pendingDataKey = `pending_user_details_${userId}`
      console.log('Looking for pending data with key:', pendingDataKey)
      const pendingData = localStorage.getItem(pendingDataKey)
      console.log('Pending data from localStorage:', pendingData)
      
      if (!pendingData) {
        console.log('No pending data found')
        return null
      }

      const userDetailsData = JSON.parse(pendingData)
      console.log('Parsed user details data:', userDetailsData)

      // Inserisce i dettagli nel database
      console.log('Inserting user details into database...')
      const { data, error } = await $supabase
        .from('user_details')
        .insert([{ 
          id: userId, 
          ...userDetailsData 
        }])
        .select()
        .single()

      console.log('Insert result:', { data, error })

      if (error) {
        console.error('Errore nell\'inserimento dei dettagli utente:', error)
        return null
      }

      // Rimuove i dati temporanei
      localStorage.removeItem(pendingDataKey)
      console.log('Removed pending data from localStorage')
      
      console.info('Dettagli utente inseriti con successo:', data)
      return data
    } catch (error) {
      console.error('Errore nell\'inserimento dei dettagli utente:', error)
      return null
    }
  }

  // Login con gestione dettagli mancanti
  const signIn = async (email: string, password: string) => {
    console.log('useAuth.signIn called with email:', email)
    try {
      console.log('Calling supabase.auth.signInWithPassword...')
      const { data, error } = await $supabase.auth.signInWithPassword({
        email,
        password,
      })
      console.log('Supabase signIn result:', { data: !!data, error: !!error })
      
      if (error) {
        console.log('Supabase signIn error:', error)
        throw error
      }
      
      // Controlla se l'email è stata confermata
      console.log('Checking email confirmation status:', data.user?.email_confirmed_at)
      if (!data.user?.email_confirmed_at) {
        console.log('Email not confirmed, blocking login')
        throw new Error('Devi confermare la tua email prima di accedere. Controlla la tua casella di posta.')
      }
      
      console.log('Email confirmed, proceeding with login')
      console.log('Setting user.value...')
      user.value = data.user
      
      console.log('Skipping user details loading for now to avoid blocking')
      
      console.log('useAuth.signIn returning success')
      return { data, error: null }
    } catch (error) {
      console.log('useAuth.signIn caught error:', error)
      return { data: null, error }
    }
  }

  // Carica dettagli utente
  const loadUserDetails = async (userId: string) => {
    console.log('loadUserDetails called for userId:', userId)
    try {
      console.log('Querying user_details table...')
      const { data, error } = await $supabase
        .from('user_details')
        .select('*')
        .eq('id', userId)
        .single()
      
      console.log('user_details query result:', { data, error })
      
      if (error) {
        console.log('Error loading user details:', error)
        throw error
      }
      
      console.log('Setting userDetails.value to:', data)
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
      if (!user.value?.id) throw new Error('Utente non autenticato')
      
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

  // Crea dettagli utente base quando non esistono dati pending
  const createBasicUserDetails = async (user: any) => {
    console.log('createBasicUserDetails called for user:', user.email)
    try {
      const basicUserData = {
        id: user.id,
        email: user.email,
        first_name: '',
        last_name: '',
        plan: 'free',
        accept_terms: false,
        newsletter: false,
        is_admin: false,
        is_email_confirmed: !!user.email_confirmed_at,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }

      console.log('Inserting basic user details:', basicUserData)
      const { data, error } = await $supabase
        .from('user_details')
        .insert([basicUserData])
        .select()
        .single()

      if (error) {
        console.error('Error creating basic user details:', error)
        return null
      }

      console.log('Basic user details created successfully:', data)
      return data
    } catch (error) {
      console.error('Error in createBasicUserDetails:', error)
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