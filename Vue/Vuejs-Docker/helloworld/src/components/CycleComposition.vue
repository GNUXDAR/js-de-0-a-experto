<template>
    <p>Composition API</p>
</template>

<script lang="ts" setup>
// uso de composition API
import { onMounted, onUpdated } from 'vue'

onMounted(() => {
    console.log('Mounted in composition')
})

onUpdated(() => {
    console.log('Updated in composition')
})

</script>

<style scoped>
</style>
