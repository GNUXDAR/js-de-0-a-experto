<!-- 
    Directiva v-bind, composition API standar 
    bindiando clases y estilos

    Directiva con eventos v-on
-->
<template>
    <p v-bind:class="{'danger': hasError}">El mensaje se ha enviado satisfactoriamente.</p>
    <p v-bind:style="{'background-color': 'orange', color: myColor}">El mensaje se ha enviado satisfactoriamente.</p>
    <button v-on:click="handleClick">Cambiar color</button>


</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
    name: 'ClassBind',
    setup() {
        let hasError = true;
        let myColor = ref('green')

        const random = (max) => Math.floor(Math.random() * max);
        const handleClick = () => { myColor.value= `rgb(${random(255)}, ${random(255)}, ${random(255)})`; }
        // const rndCol = ;
        return { hasError, myColor, handleClick }
    }
})

</script>

<style scoped>
.danger {
    color: red;
}
</style>