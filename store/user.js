import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const sessionCookie = useCookie('session')
    
    // used to store the user data loaded from the ssr context
    // contained within an httpOnly cookie
    const user = useState('userStore:user', () => null)

    const base64decode = (str) => process.server ? Buffer.from(str, 'base64').toString('utf-8') : atob(str)
    
    const loginWithToken = (token) => {
        setWithUserToken(token);
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

    return {
        user,
        isLoggedIn: computed(() => user.value !== null),
        setWithUserToken,
        loginWithToken,
        logout: async () => {
            await $api('/logout', {
                baseURL: '/bridge',
                method: 'POST',
            })
            user.value = null;
            window.location.href = '/?logout=true';
        }
    }
})