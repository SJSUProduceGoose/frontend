import { useUserStore } from "@/store/user";

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();

  console.log(userStore.user);

  if (to.path.startsWith('/admin') && (userStore.user === null || !userStore.user.is_superuser)) {
    navigateTo('/login')
  }

  if (to.path.startsWith('/employee') && (userStore.user === null || !userStore.user.is_employee || !userStore.user.is_superuser)) {
    navigateTo('/login')
  }
})