<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Listado de usuarios</h1>

    <div class="btn">
      <button @click="handleLayout(ListLayout)">Ver en lista</button>
      <button @click="handleLayout(CardLayout)">Ver en tarjetas</button>
      <button @click="handleLayout(TableLayout)">Ver en tabla</button>
    </div>
    <!-- hacemos con el tag component "dinamico" :is para definir el componente
    y le pasamos un props con el listado de users -->
    <component :is="layout" :content="users" />
  </div>
</template>

<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'

const CardLayout = defineAsyncComponent(() => import('@/layouts/CardLayouts.vue'))
const ListLayout = defineAsyncComponent(() => import('@/layouts/ListLayout.vue'))
const TableLayout = defineAsyncComponent(() => import('@/layouts/TableLayout.vue'))

const layout = ref(ListLayout)

const handleLayout = (cmp) => layout.value = cmp

const users = ref([
  {
    name: "Arturo",
    age: 33,
    position: "fullstack"
  }, 
  {
    name: "Adrian",
    age: 32,
    position: "junior"
  },
  {
    name: "Victor",
    age: 34,
    position: "backend"
  },
  {
    name: "Meryuris",
    age: 31,
    position: "frontend"
  },
  {
    name: "Alexander",
    age: 14,
    position: "fullstack"
  },
  {
    name: "Alexa",
    age: 13,
    position: "frontend"
  },
  {
    name: "Adriana",
    age: 17,
    position: "backend"
  }
])

</script>


<style scoped></style>