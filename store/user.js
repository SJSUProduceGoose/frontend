import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const user = ref(null)
    const loginNofification = ref(null)

    const nuxt = useNuxtApp()

    const base64decode = (str) => nuxt.ssrContext ? Buffer.from(str, 'base64').toString('utf-8') : atob(str)

    const setWithUserToken = (token) => {
        const sessionInfo = JSON.parse(base64decode(token.split('.')[1]));
        
        if (sessionInfo.exp * 1000 > Date.now()) {
            user.value = sessionInfo;
        } else {
            // TODO: redirect to login with error message and redirect to previous page when logging in
            sessionCookie.value = '';
            user.value = null;
        }
    }
    
    const sessionCookie = useCookie('session')
    
    if (sessionCookie.value !== undefined && sessionCookie.value !== '') {
        setWithUserToken(sessionCookie.value)
    } else {
        user.value = null
    }

    const setupLoginNotification = (message) => {
        loginNofification.value = message;
    }

    return {
        user,
        loginNofification,
        isLoggedIn: computed(() => user.value !== null),
        setWithUserToken,
        setupLoginNotification,
    }
})