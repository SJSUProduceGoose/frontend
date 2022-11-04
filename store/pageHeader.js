import { defineStore } from 'pinia'

export const usePageHeaderStore = defineStore('pageHeader', () => {
    const visible = ref(false)
    const title = ref('')

    const hide = () => {
        visible.value = false
    }
    
    const setOptions = (options) => {
        visible.value = true;
        title.value = options.title;
    }

    const router = useRouter()
    
    router.beforeEach((to, from, next) => {
        hide()
        next()
    })

    return {
        visible,
        title,
        hide,
        setOptions,
    }
})