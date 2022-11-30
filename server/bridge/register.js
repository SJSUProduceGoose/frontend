import { proxyToBackend } from '@/server/proxy'

export default defineEventHandler(proxyToBackend('/auth/register/'));
