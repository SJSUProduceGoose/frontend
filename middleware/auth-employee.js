import { useUserStore } from "@/store/user";

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();

  if (userStore.user === null || (!userStore.user.is_employee && !userStore.user.is_superuser)) {
    navigateTo('/login')
  }
})