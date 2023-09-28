<template>
   <MainLayout>
    <!-- #main es equivalente a utilizar v-slot:main -->
    <template #main>
      <h1>My Home</h1>
      <p>La posición La mouse X: {{ x }}</p> 
      <p>La posición del mouse Y: {{ y }}</p> 
    </template>
    <template #aux>
      <h3>Algo en el aux</h3>
    </template>
   </MainLayout>

</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue'

// uso de composable
import { useMouse } from '@/composables/useMouse'

// para usar 'x' y 'y' de useMount
const {x, y} = useMouse()
</script>
