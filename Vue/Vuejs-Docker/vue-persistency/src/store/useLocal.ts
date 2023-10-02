import { defineStore } from 'pinia'

export const useLocal = defineStore('useLocal', {
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
            localStorage.setItem('count', this.count.toString())
        }
    }
})