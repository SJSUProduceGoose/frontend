import { useUserStore } from '@/store/user.js'
import { ElNotification } from 'element-plus'

const formatError = (serverError, error) => {
  if (error.value === null) return;
  
  if (!serverError.value) {
    serverError.value = {
      status: error.value.response.status,
      data: error.value.response._data,
    }
  }
}

const handleError = (serverError, data, error) => {
  // Only set the value on server and if serverError is empty
  if (error.value !== null) {
    if (serverError.value.status === 401) {
      navigateTo('/login')
    }
    if (process.client) {
      const errorData = serverError.value.data[0] || serverError.value.data
      const errorMessage = errorData?.detail || errorData?.msg;
      if (errorMessage) {
        ElNotification({
          type: serverError.value.status == 422 ? 'warning' : 'error',
          title: serverError.value.status == 422 ? 'Input Invalid' : 'Error',
          message: errorMessage,
          durration: 5000,
        })
      }
    }
  }
  
  // Clear error if data is available
  if (data.value) {
    serverError.value = null
  }
}

export const $api = async (path, options) => {
  const config = useRuntimeConfig();
  const headers = useRequestHeaders(['cookie'])

  const clientError = ref(null)

  try {
    return await $fetch(path, {
      credentials: 'include',
      baseURL: config.BASE_URL || config.public.BASE_URL,
      headers: {
        ...headers,
        ...(options.headers || {}),
      },
      ...options
    })
  } catch (error) {
    formatError(clientError, ref(error))

    handleError(clientError, ref(null), error)

    if (error.value) {
      throw error.value
    }
  }
}

export const useApi = async (path, options={}) => {
  const config = useRuntimeConfig();
  const headers = useRequestHeaders(['cookie'])
  
  const serverError = useState(`server:error:${options.key || path}`, () => null)

  const { data, error, ...rest } = await useFetch(path, {
    credentials: 'include',
    baseURL: config.BASE_URL || config.public.BASE_URL,
    headers: {
      ...headers,
      ...(options.headers || {}),
    },
    key: path,
    ...options,
  })
  
  if (process.server || (process.client && data.value !== true)) {
    formatError(serverError, error)
  }

  handleError(serverError, data, error)

  return {
    ...rest,
    data,
    error: serverError,
  }
}