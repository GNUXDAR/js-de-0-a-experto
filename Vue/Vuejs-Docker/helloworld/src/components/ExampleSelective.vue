<!-- Directivas v-show, v-if, v-else -->
<template>
    <div>
        <h2 v-if="age < 18 && age != 33">Eres Menor de Edad</h2>
        <h2 v-else>Eres Mayor de Edad</h2>
        <h2 v-show="age == 33">Tengo 33 años</h2>
    </div>
</template>

<script lang="ts" setup>
    let age = 33
</script>

<style scoped>
</style>