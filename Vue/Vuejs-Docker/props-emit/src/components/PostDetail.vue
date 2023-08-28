<template>
    <div class="post">
        <h3>{{ title }}</h3>
        <p>{{ content }}</p>
        <p>{{ props }}</p>
        <input type="text" v-model="message">
        <button @click="handleClick">Saluda</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';

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
    emits: ["sayHi"],
    setup(props, {emit}){
        const handleClick = () => {
            // alert("Hola desde el hijo")
            // emit("sayHi", "Hola")
            emit("sayHi", message.value)
        }

        let message:Ref<string> = ref("")

        return { 
            props,
            message,
            handleClick
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
