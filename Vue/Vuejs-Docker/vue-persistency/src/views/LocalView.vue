<template>
    <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    </div>
    
    <h2>Uso del LocalStorage</h2>
    <h3>{{ store.count }}</h3>
    <button @click="store.increment(1)">Añadir</button>
</template>

<script lang="ts" setup>
import { useLocal } from '@/store/useLocal'
const store = useLocal()
store.init()
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}</style>
