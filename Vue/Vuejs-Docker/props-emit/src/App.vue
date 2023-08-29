<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h2>props && emit</h2>
  <h2 class="props">props</h2>
  <p>Los props en Vue son propiedades personalizadas que se pueden pasar de un componente padre a un componente hijo. Permiten la comunicación entre componentes al permitir que el componente padre envíe datos al componente hijo para su uso. Los props son valores inmutables en el componente hijo, lo que significa que el componente hijo no puede modificar directamente los valores de los props; en cambio, los utiliza como datos de solo lectura. Los props son una parte fundamental de la comunicación vertical en Vue y son esenciales para la construcción de aplicaciones basadas en componentes reutilizables.</p>
  
  <h2 class="emit">emit</h2>
  <p>Emitir en Vue es un mecanismo que permite a un componente hijo comunicarse con su componente padre. Utiliza la función `emit` para enviar eventos personalizados desde el componente hijo al componente padre. Estos eventos personalizados pueden llevar datos y desencadenar funciones en el componente padre, lo que facilita la interacción y la comunicación entre componentes en una aplicación Vue. El componente hijo emite un evento y el componente padre lo "escucha" y responde según sea necesario, lo que permite una comunicación efectiva y flexible entre componentes en la jerarquía de Vue.</p>
  <PostList />

  <hr>
  <h2>Propiedades Computadas</h2>
  <p>Las propiedades computadas Vue son una de las características más potentes del framework. Permiten establecer comparaciones y lógica elaborada que se reevalúa cada vez que uno de sus valores a comprobar cambia, asegurando su reactividad.</p>

  <p>Las propiedades computadas son un tipo de propiedad especial que se declara como una función, y que se ejecuta cuando accedemos a la propiedad con dicho nombre.</p>
  <ComputedExample />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostList from './components/PostList.vue'
import ComputedExample from './components/ComputedExample.vue';

export default defineComponent({
  name: 'App',
  components: {
    PostList,
    ComputedExample
}
});
</script>

<style>
body {
  text-align: center;
  color: #2c3e50;
}

.props, .emit {
  text-align: left;
}
</style>
