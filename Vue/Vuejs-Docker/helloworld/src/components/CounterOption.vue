<!-- Options API -->
<template>
    <div class="btn-counter">
        <h3>Contador con Options API</h3>
        <h3>{{ counter }}</h3>
        <button @click="addCounter">Incrementar</button>
    </div>

</template>

<script lang="ts">
    // estructura de la options API
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'CounterOption',
        components: {},
        data(){
            // todo los elementos de aca son reactivos
            let counter = 0;
            return { counter }
        },
        methods: {
            addCounter() {
                this.counter++
            }
        }
    })
</script>

<style>
</style>