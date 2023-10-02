import { defineStore } from 'pinia'

export const useExample = defineStore('useExample', {
    state: () => {
        return {
            count: 1
        }
    },
    actions: {
        // uso de localStorage 
        init() {
            const initCount = localStorage.getItem('count')
            if(initCount) {
                this.count = parseInt(initCount)
            }
        },
        // fin de function init() para uso de localStorage 
        increment(val = 1) {
            this.count += 1
            // uso de localStorage (nombre, valor)
            localStorage.setItem('count', this.count.toString())
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