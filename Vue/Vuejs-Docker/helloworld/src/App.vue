<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <h1>Listado de Posts</h1>
  <PostContainer />
</template>

<script lang="ts" setup>
  import PostContainer from './components/PostContainer.vue';
</script>

<style>
body {
  text-align: center;
  color: #2c3e50;
}

h1 {
  color: #2c3e50;
}
</style>
