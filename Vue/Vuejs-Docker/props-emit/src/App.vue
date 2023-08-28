<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h2>Props</h2>
  <p>Los props en Vue son propiedades personalizadas que se pueden pasar de un componente padre a un componente hijo. Permiten la comunicación entre componentes al permitir que el componente padre envíe datos al componente hijo para su uso. Los props son valores inmutables en el componente hijo, lo que significa que el componente hijo no puede modificar directamente los valores de los props; en cambio, los utiliza como datos de solo lectura. Los props son una parte fundamental de la comunicación vertical en Vue y son esenciales para la construcción de aplicaciones basadas en componentes reutilizables.</p>
  <PostList />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostList from './components/PostList.vue'

export default defineComponent({
  name: 'App',
  components: {
    PostList
  }
});
</script>

<style>
body {
  text-align: center;
  color: #2c3e50;
}
</style>
