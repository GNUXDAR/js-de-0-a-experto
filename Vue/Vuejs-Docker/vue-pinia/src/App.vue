<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App + pinia"/>
  <h3>{{ store.count }} x 2 = {{ store.times2 }}</h3>
  <button @click="store.increment(2)">Increment</button>
</template>

<script lang="ts" setup>
import HelloWorld from './components/HelloWorld.vue';
import { useCounterStore } from './store/counter'

const store = useCounterStore()




</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
