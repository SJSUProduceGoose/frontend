import { useUserStore } from '@/store/user.js'

export const $api = async (path, options) => {
  const config = useRuntimeConfig();
  const userStore = useUserStore();
  const headers = useRequestHeaders(['cookie'])

  try {
    return await $fetch(path, {
      baseURL: config.BASE_URL || config.public.BASE_URL,
      headers: {
        ...headers,
        ...(options.headers || {}),
      },
      ...options
    })
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