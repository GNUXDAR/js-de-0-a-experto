<template>
  <h1>{{ counter }}</h1>
  <button @click="counter++">Increment</button>
</template>

<script setup>
import { ref } from 'vue'

const counter = ref(0)
</script>

<style scoped>
</style>