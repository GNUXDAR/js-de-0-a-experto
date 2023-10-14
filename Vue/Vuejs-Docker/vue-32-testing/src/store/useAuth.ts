import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuth = defineStore('useAuth', {
    state: () => {
        return {
            is_auth: ref(false)
        }
    },
    actions: {
        login(email:string, password:string):boolean {
            if((email == 'admin@admin.com') && (password == '1234567')) {
                this.is_auth = true
                return true
            }else {
                this.is_auth = false
                return false
            }
        }
    }
})