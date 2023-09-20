import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => {
        return {
            count: 2
        }
    },
    getters: {
        times2: (state) => state.count * 2
    },
    actions: {
        increment( val = 1) {
            this.count += val
        }
    }
})