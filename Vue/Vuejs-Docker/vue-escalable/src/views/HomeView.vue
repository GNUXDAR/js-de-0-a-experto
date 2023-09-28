<template>
   <MainLayout>
    <!-- #mainnes equivalente a utilizar v-slot:main -->
    <template #main>
      <h1>My Home</h1>
    </template>
    <template #aux>
      <h3>Algo en el aux</h3>
    </template>
   </MainLayout>

</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue'
</script>
