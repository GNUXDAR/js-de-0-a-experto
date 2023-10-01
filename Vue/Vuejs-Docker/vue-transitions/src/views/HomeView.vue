<template>
  <transition>
    <div v-if="show">
      <h1>Hello world animated </h1>
      <p>Transicion de un elemento</p>
    </div>
  </transition>

  <!-- show = !show  asignar lo contrario -->
  <button @click="show = !show">Mostrar / Ocultar</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const show = ref(false)
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
