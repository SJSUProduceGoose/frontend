export const proxyToBackend = (path) => async (event) => {
  const config = useRuntimeConfig();
  
  let res = null;

  try {
    res = await $fetch.raw(path, {
      baseURL: config.BASE_URL,
      method: event.req.method,
      headers: event.req.headers,
      body: await readBody(event)
    })
  } catch (error) {
    res = error.response || null
  }

  if (res === null) {
    event.res.statusCode = 500

    return {
      detail: 'Internal Server Error'
    }
  }

  event.res.setHeader('Set-Cookie', res.headers.get('set-cookie'))
  
  event.res.statusCode = res.status
  
  return res._data;
}