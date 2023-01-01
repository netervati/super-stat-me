export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id === '') {
    // Redirect to user not found
    return navigateTo('/');
  }
});
