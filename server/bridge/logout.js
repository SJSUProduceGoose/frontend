export default defineEventHandler((event) => {
  event.res.setHeader('Set-Cookie', 'session=; Domain=producegoose.farm; expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; Path=/; SameSite=none; Secure');
  event.res.statusCode = 204;
  event.res.end();
})