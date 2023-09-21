<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>

  <input type="text">
  <button @click="senToServer">Enviar</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let note = ref('')
const senToServer = async () => {
  const rawResponde = await fetch('https://xxxxendpointxxxx.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Beaer  xxxxxxtockenxxxxx'
    },
    body: JSON.stringify({ note: note.value })
  })

  const response = await rawResponde.json()
  
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
