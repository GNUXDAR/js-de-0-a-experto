// se defina la extencion con el lenguaje que se utiliza, en este caso TypeScript
import { ref, Ref } from 'vue'
import InterfacePost from '@/interfaces/InterfacePost'


class PostService {
    private posts:Ref<Array<InterfacePost>>

    constructor() {
        this.posts = ref<Array<InterfacePost>>([])
        
    }

    getPosts():Ref<Array<InterfacePost>> {
        return this.posts
    }

    async fetchAll():Promise<void> {
        try {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const response = await fetch(url)
            const json = await response.json()
            this.posts.value = await json

        }catch(error){
            console.log(error)
        }
    }
}

export default PostService