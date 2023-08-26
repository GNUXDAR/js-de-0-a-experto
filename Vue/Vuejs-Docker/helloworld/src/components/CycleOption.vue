<template>
    <p>Option API</p>
</template>

<script lang="ts">
// uso de option API
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CycleOption',
    // data() {
    //     return {
    //     }
    // },
    // methods: {

    // },
    created() {
        console.log('Created in option api');
        
    },
    mounted() {
        console.log('Mounted in option api');
    },
    updated() {
        console.log('Updated in option api');
    },
    unmounted() {
        console.log('Unmounted in option api');
    },


})
</script>

<style scoped>
</style>
