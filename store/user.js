import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const user = ref(null)

    const nuxt = useNuxtApp()

    const base64decode = (str) => nuxt.ssrContext ? Buffer.from(str, 'base64').toString('utf-8') : atob(str)

    const setWithUserToken = (token) => {
        user.value = JSON.parse(base64decode(token.split('.')[1]))
    }
    
    const sessionCookie = useCookie('session')
    if (sessionCookie.value) {
        setWithUserToken(sessionCookie.value)
    }

    return {
        user,
        setWithUserToken
    }
})