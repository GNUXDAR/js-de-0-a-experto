import {defineStore} from 'pinia'

const useAuth = defineStore('auth', {
    state: () => {
        return {
            token: null,
            baseUrl: 'http://172.20.0.3/api/'
            // endpoint de la API
        }
    },
    actions: {
        // <gnuxdar>
        async register(name:string, email:string, password:string) {
            const uri = `${this.baseUrl}auth/register`
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
            // console.log(name, email, password)

            // manage reponse
            const response = await rawResponse.json()

            if(response.status == false) {
                // error
                return false
            } else {
                this.token = response.token
                return true
            }
        },
        async login(email:string, password:string) {
            const uri = `${this.baseUrl}auth/login`
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

            if(response.status == false) {
                // error
                this.token = null
                return false
            } else {
                this.token = response.token
                return true
            }
        },
        async getNotes() {
            const uri = `${this.baseUrl}note`
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
            return response
        },
        async createNote(content:string) {
            const uri = `${this.baseUrl}note`
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
            if(response.status == false){
                return false
            } else {
                return true
            }
        },
        logout() {
            this.token = null
        }
    }
})

export default useAuth