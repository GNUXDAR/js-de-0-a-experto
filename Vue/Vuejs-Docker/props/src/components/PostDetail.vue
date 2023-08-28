<template>
    <div class="post">
        <h3>{{ title }}</h3>
        <p>{{ content }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, defineProps } from 'vue';

export default defineComponent({
    name: 'PostDetail',
    props: {
        id: Number,
        title: String,
        content: {
            type: String,
            dafault: "Aqui contenido por defecto"
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
