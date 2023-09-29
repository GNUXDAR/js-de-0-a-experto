<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Listado de usuarios</h1>

    <input type="text" placeholder="Buscar Usuario" v-model="search" @keyup="handleSearch">

    <div class="btn">
      <button @click="handleLayout(ListLayout)">Ver en lista</button>
      <button @click="handleLayout(CardLayout)">Ver en tarjetas</button>
      <button @click="handleLayout(TableLayout)">Ver en tabla</button>
    </div>
    <!-- hacemos con el tag component "dinamico" :is para definir el componente
    y le pasamos un props con el listado de users -->
    <component :is="layout" :content="filteredUsers" />
  </div>
</template>

<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'

const CardLayout = defineAsyncComponent(() => import('@/layouts/CardLayout.vue'))
const ListLayout = defineAsyncComponent(() => import('@/layouts/ListLayout.vue'))
const TableLayout = defineAsyncComponent(() => import('@/layouts/TableLayout.vue'))

const layout = ref(ListLayout) //asignar un layout por defecto

const handleLayout = (cmp) => layout.value = cmp

const search = ref('')

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

// para que de inicio salgan todos los users
const filteredUsers = ref([])
filteredUsers.value = users.value

const handleSearch = () => {
  filteredUsers.value = users.value.filter(item => item.name.toLowerCase().includes(search.value.toLowerCase()))

}
</script>


<style scoped></style>