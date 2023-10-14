import InterfacePost from '@/interfaces/InterfacePost'
import { ref, Ref } from 'vue'

class PostService {
    private post: Ref<InterfacePost> = ref<InterfacePost>({})
    private posts: Ref<Array<InterfacePost>> = ref<Array<InterfacePost>>([])

    cosntructor(){
        // this.post = ref<InterfacePost>({})
        // this.posts = ref<Array<InterfacePost>>([])
    }

    getPost(): Ref<InterfacePost> {
        return this.post
    }

    getPosts(): Ref<Array<InterfacePost>> {
        return this.posts
    }

    async fetchAll(): Promise<void> {
        try {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const response = await fetch(url)
            const json = await response.json()
            this.posts.value = await json
        } catch(error) {
            console.log(error)
        }
    }

    async fetchById(id:string | Array<string>): Promise<void> {
        try {
            const url = `https://jsonplaceholder.typicode.com/posts/${id}`
            const response = await fetch(url)
            const json = await response.json()
            this.post.value = await json
        } catch(error) {
            console.log(error)
        }
    }
}

export default PostService