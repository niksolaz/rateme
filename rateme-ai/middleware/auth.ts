export default defineNuxtRouteMiddleware((to) => {
  const { getCurrentUser } = useAuth()
  
  // Verifica se l'utente è autenticato
  getCurrentUser().then(user => {
    if (!user) {
      return navigateTo('/login')
    }
  })
})