<template>
    <ChildComponent ref="percentageComponent" />
    <button @click="banco">Añadir cuneta bancaria</button>
</template>

<script lang="ts" setup>
import ChildComponent from './ChildComponent.vue';
import { ref } from 'vue';

const percentageComponent = ref(null)
const banco = () => {
    // conectar con un servicio y subir la info
    percentageComponent.value.recalculate()
}

</script>

<style scoped>
</style>