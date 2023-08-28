<template>
    <div class="post">
        <h3>{{ title }}</h3>
        <p>{{ content }}</p>
        <p>{{ props }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PostDetail',
    props: {
        id: Number,
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: false,
            dafault: "Aqui contenido por defecto"
        }
    },
    setup(props){
        return {
            props
        }
    }
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
