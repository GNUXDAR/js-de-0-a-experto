<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
    </div>

    <h2>Uso del WatchEffect con "Composition API"</h2>

    <input type="text" v-model="note">
</template>

<script lang="ts" setup>
// option API
import { ref, watchEffect } from 'vue'
        const note = ref('')
        watchEffect(()=> alert('se ha modificado el valor: ' + note.value))

</script>

<style scoped>
</style>