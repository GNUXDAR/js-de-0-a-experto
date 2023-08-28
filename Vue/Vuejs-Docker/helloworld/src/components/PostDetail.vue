<template>
    <div class="post">
        <h3>{{ props.title }}</h3>
        <p>{{ props.content }}</p>
        <img src="" alt="">
    </div>
    
</template>
<!-- composition API definiendo setup -->
<!-- <script lang="ts">
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
</script> -->

<!-- composition API -->
<script setup> 
import { ref, defineProps } from 'vue';
// aqui recibe la informacio que el padre le envia
const props = defineProps({
  title: String,
  content: {
    type: String,
    default: "Aqui debes escribir tu contenido"
  },
  imageSrc: String  // Agrega la prop imageSrc si la necesitas
});
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
