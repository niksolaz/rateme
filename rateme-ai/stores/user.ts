import { defineStore } from 'pinia'
import type { UserDetails } from '~/types/auth'

interface UserState {
  userDetail: UserDetails | null
  isLoading: boolean
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    userDetail: null,
    isLoading: false
  }),

  getters: {
    isAuthenticated: (state) => !!state.userDetail,
    fullName: (state) => {
      if (!state.userDetail) return ''
      return `${state.userDetail.first_name} ${state.userDetail.last_name}`.trim()
    },
    userPlan: (state) => state.userDetail?.plan || 'none'
  },

  actions: {
    setUserDetail(userDetail: UserDetails | null) {
      this.userDetail = userDetail
    },

    setLoading(loading: boolean) {
      this.isLoading = loading
    },

    async loadUserDetail(userId: string) {
      this.setLoading(true)
      
      try {
        const { $supabase } = useNuxtApp()
        
        const { data, error } = await $supabase
          .from('user_details')
          .select('*')
          .eq('id', userId)
          .single()

        if (error) {
          console.error('Errore nel caricamento dei dettagli utente:', error)
          return null
        }

        this.setUserDetail(data)
        return data
      } catch (error) {
        console.error('Errore nel caricamento dei dettagli utente:', error)
        return null
      } finally {
        this.setLoading(false)
      }
    },

    async updateUserDetail(updates: Partial<UserDetails>) {
      if (!this.userDetail) {
        throw new Error('Utente non autenticato')
      }

      this.setLoading(true)

      try {
        const { $supabase } = useNuxtApp()

        const { data, error } = await $supabase
          .from('user_details')
          .update({
            ...updates,
            updated_at: new Date().toISOString()
          })
          .eq('id', this.userDetail.id)
          .select()
          .single()

        if (error) {
          console.error('Errore nell\'aggiornamento dei dettagli utente:', error)
          throw error
        }

        this.setUserDetail(data)
        return data
      } finally {
        this.setLoading(false)
      }
    },

    clearUserDetail() {
      this.userDetail = null
      this.isLoading = false
    }
  }
})