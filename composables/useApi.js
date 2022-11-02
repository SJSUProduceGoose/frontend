export const useApi = (path, options) => {
  const config = useRuntimeConfig();
  return $fetch(`${config.public.BASE_URL}${path}`, options)
}