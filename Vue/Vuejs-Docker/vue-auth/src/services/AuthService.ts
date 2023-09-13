// se defina la extencion con el lenguaje que se utiliza, en este caso TypeScript
import { ref, Ref } from 'vue'

class AuthService {

    private jwt: Ref<string>
    private error: Ref<string>

    constructor() {
        this.jwt = ref('')
        this.error = ref('')
    }

    getJwt(): Ref<string> {
        return this.jwt
    }

    getError(): Ref<string> {
        return this.error
    }

    async login(email:string, password:string): Promise<boolean> {
        try {
            const resp = await fetch('https://hfp69ilv.directus.app/auth/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })

            const response = await resp.json()

            if('error' in response) {
                this.error.value = 'No se pudo loguear'
                return false
            }
            this.jwt = response.data.acces_token
            return true
            
        }catch(error){
            this.error.value = 'No se pudo loguear'
            return false
        }
    }
}

export default AuthService