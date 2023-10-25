<template>
  <h1>{{ counter }}</h1>
  <button @click="counter++">Click</button>
</template>

<script setup>
import { ref } from 'vue'

const counter = ref(0)
</script>

<style scoped>
</style>