import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const sessionCookie = useCookie('session')
    
    // used to store the user data loaded from the ssr context
    // contained within an httpOnly cookie
    const user = useState('userStore:user', () => null)
    const loginNofification = ref(null)

    // const refreshing = ref(false)
    const refreshAll = async () => {
        // TODO: implement refreshAll in favor of reload
        // refreshing.value = true
        // try {
        //     // await refreshNuxtData(['user:me', 'order:all'])
        //     await refreshNuxtData('user:me')
        //     await refreshNuxtData('order:all')
        // } finally {
        //     refreshing.value = false
        // }
    }

    const base64decode = (str) => process.server ? Buffer.from(str, 'base64').toString('utf-8') : atob(str)
    
    const loginWithToken = (token) => {
        setWithUserToken(token);
        refreshAll();
    }

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

    if (process.server) {
        if (sessionCookie.value !== undefined && sessionCookie.value !== '') {
            setWithUserToken(sessionCookie.value)
        } else {
            user.value = null
        }
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
        loginWithToken,
        logout: async () => {
            await $api('/logout', {
                baseURL: '/bridge'
            })
            user.value = null;
            // refreshNuxtData('user:me')
            refreshAll();
            window.location.href = '/?logout=true';
        }
    }
})