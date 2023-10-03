<template>
    <h2>Porcentaje completado: {{ percentage }}</h2>
</template>

<script lang="ts" setup>
    import { onMounted, ref, defineExpose } from 'vue'
    const percentage = ref(0)

    onMounted(() => {
        // traer el valor de porcentaje del servicio
        percentage.value = 2
    })

    const recalculate = () => {
        // actualiza el valor del porcentaje a traves del servicio
        percentage.value *= 2
    }

    // comentar para que no recalcule y marce el calcule original
    defineExpose({recalculate})
</script>

<style scoped>
</style>