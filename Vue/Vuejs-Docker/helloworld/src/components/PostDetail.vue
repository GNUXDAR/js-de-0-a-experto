<template>
    <div class="post">
        <h3>{{ props.title }}</h3>
        <p>{{ props.content }}</p>
        <img src="" alt="">
    </div>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'PostDetail',
    props: {
        // validando las props, con TypeScript
        title: {
            type: String,
            required: true
        },
        content: {
            content: String,
            required:false,
            default: "Aqui debes escribir tu contenido"
        }
    },
    setup(props) {
        // 
        return { props }
    },
})
</script>

<style scoped>
.post {
    width: auto;
    height: auto;
    background-color: aquamarine;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;

}
</style>
