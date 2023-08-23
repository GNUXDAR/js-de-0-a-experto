<!-- Composition API -->
<template>
    <div class="btn-counter">
        <h3>Contador con Composition API</h3>
        <h3>{{ counter }}</h3>
        <button @click="addCounter">Incrementar</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
export default defineComponent({
    name: 'CounterComposition',
    setup() {
        // tenemos mas control de que elementos queremos que sean reactivos, ref()
        let counter:Ref = ref(0)
        const addCounter = ():void => {
            counter.value++
        }
        return {counter, addCounter}
    }

})
</script>

<style>
</style>