<template>
  <h2>{{ counter }}</h2>
  <button @click="counter++">Increment</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const counter = ref(0)
</script>

<style scoped></style>