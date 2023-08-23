<!-- Composition API -->
<!-- con setup en el script podemos obviar el defineComponent,
el name del componente, el setup() y hasta el return -->
<template>
    <div class="btn-counter">
        <h3>Contador con Composition API y setup como parametro</h3>
        <h3>{{ counter }}</h3>
        <button @click="addCounter">Incrementar * 2</button>
    </div>

</template>

<script lang="ts" setup>
import { defineComponent, Ref, ref } from 'vue';
// tenemos mas control de que elementos queremos que sean reactivos, ref()
let counter:Ref = ref(0)
const addCounter = ():void => {
    counter.value+=2
}
</script>

<style>
</style>