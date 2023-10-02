<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </div>

    <h2>Uso del Watch con "Composition API"</h2>

    <input type="text" v-model="note">
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
const note = ref('')
watch(note, () => alert("Valor modificado: " + note.value))

</script>

<style scoped></style>