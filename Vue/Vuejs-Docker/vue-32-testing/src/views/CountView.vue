<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>Welcome to Your Vue.js + TypeScript App</h1>

        <h3 id="counter-info">{{ counter }}</h3>
        <button @click="counter++">Increment</button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const counter = ref(0)
</script>
