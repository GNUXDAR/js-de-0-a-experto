<template>
  <img alt="Vue logo" src="./assets/logo.png" >

  <TextComponent />


</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TextComponent from './components/TextComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    TextComponent
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #41b883;
  margin-top: 60px;
}

p {
  text-align: justify;
}
</style>
