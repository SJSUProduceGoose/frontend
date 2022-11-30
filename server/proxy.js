export const proxyToBackend = (path) => async (event) => {
  const config = useRuntimeConfig();
  
  let res = null;
  const body = await readBody(event);

  const headers = { 
    'user-agent': event.req.headers['user-agent'],
    'content-type': event.req.headers['content-type'],
    origin: event.req.headers.origin,
    referer: event.req.headers.referer,
    cookie: event.req.headers.cookie,
  }

  try {
    res = await $fetch.raw(path, {
      baseURL: config.BASE_URL,
      method: event.req.method,
      headers,
      body
    })
  } catch (error) {
    console.error(error);
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