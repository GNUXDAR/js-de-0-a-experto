import { defineStore } from 'pinia'

export const useExample = defineStore('useExample', {
    state: () => {
        return {
            count: 1
        }
    },
    actions: {
        increment(val = 1) {
            this.count += 1
        }
    },
    // uso de pinia-plugin-persistedstate
    // persist: true,
    // ó
    persist: {
        storage: sessionStorage,
        paths: ['count']
    }
})