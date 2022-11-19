import { useUserStore } from '@/store/user.js'

export const useApi = async (path, options) => {
  const config = useRuntimeConfig();
  const userStore = useUserStore();

  try {
    // return await $fetch.raw(`${config.public.BASE_URL}${path}`, options)
    return await $fetch(`${config.public.BASE_URL}${path}`, options)
  } catch (error) {
    if (error.response.status === 401) {
      userStore.setupLoginNotification({
        type: 'error',
        title: 'Error',
        message: error.data.detail,
        durration: 2000,
      });
      navigateTo('/login')
    }
    throw error
  }
  
}