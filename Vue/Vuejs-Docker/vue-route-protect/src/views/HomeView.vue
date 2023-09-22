<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App + Protected router"/>

    <input type="text">
    <button @click="senToServer">Enviar</button>
  </div>
</template>

<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
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
