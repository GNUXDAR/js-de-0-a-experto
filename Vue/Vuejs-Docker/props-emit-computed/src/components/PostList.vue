<template>
    <div class="container">
        <PostDetail v-for="elm in info" :key="elm.id" 
        :title="elm.title" :content="elm.content" 
        @sayHi="showAlert" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostDetail from './PostDetail.vue';

export default defineComponent({
    name: 'PostList',
    components: {
        PostDetail
    },
    setup() {
        interface Post {
            id: number,
            title: string,
            content: string
        }

        // Array de objetos validado por la interface
        let info:Array<Post> = [
            {
                id: 1,
                title: "Este es el title 1",
                content: "Texto de post 1"
            }, 
            {
                id: 2,
                title: "Este es el title 2",
                content: "Texto de post 2"
            },
            {
                id: 3,
                title: "Este es el title 3",
                content: "Texto de post 3"
            },
            {
                id: 4,
                title: "Este es el title 4",
                content: "Texto de post 4"
            }]

        function showAlert(msg:string) {
            alert(msg)
        }

            return { info, showAlert };
    }
});
</script>

<style scoped>
.container {
    display: flex;
    flex: wrap;
    justify-content: space-around;
}
</style>