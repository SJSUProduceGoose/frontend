export default defineEventHandler((event) => {
  event.res.setHeader('Set-Cookie', 'session=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly');
  event.res.statusCode = 204;
  event.res.end();
})