import {defineStore} from 'pinia'

const useAuth = defineStore('auth', {
    state: () => {
        return {
            token: null,
            baseUrl: 'http://172.20.0.3/'
        }
    },
    actions: {
        // <gnuxdar>
        async register(name:string, email:string, password:string) {
            const uri = `${this.baseUrl}/auth/register`
            const rawResponse = await fetch(uri, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json',
                    'Accept': 'Application/json'
                },
                body: JSON.stringify({
                    'name': name,
                    'email': email,
                    'password': password
                })
            })

            // manage reponse
            const response = await rawResponse.json()
        },
        async login(email:string, password:string) {
            const uri = `${this.baseUrl}/auth/login`
            const rawResponse = await fetch(uri, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json',
                    'Accept': 'Application/json'
                },
                body: JSON.stringify({
                    'email': email,
                    'password': password
                })
            })

            // manage reponse
            const response = await rawResponse.json()
        },
        async getNotes() {
            const uri = `${this.baseUrl}/note`
            const rawResponse = await fetch(uri, {
                method: 'GET',
                headers: {
                    'Content-Type': 'Application/json',
                    'Accept': 'Application/json',
                    'Authorization': `Bearer ${this.token}`
                }
            })

            // manage reponse
            const response = await rawResponse.json()
        },
        async createNote(content:string) {
            const uri = `${this.baseUrl}/note`
            const rawResponse = await fetch( uri, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json',
                    'Accept': 'Application/json',
                    'Authorization': `Bearer ${this.token}`
                },
                body: JSON.stringify({
                    'content': content
                })
            })
            
            // manage reponse
            const response = await rawResponse.json() 
        }
    }
})

export default useAuth