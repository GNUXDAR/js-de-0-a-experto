<template>
  <h3 :style="color">
    My name is: {{ myName }}
    <br>
    My age is: {{ myAge }}
  </h3>
  <button @click="saludar">Aceptar</button>
  <button @click="saludo(myName)">Aceptar parametro</button>

  <!-- contador -->
  <h3>contador Ref</h3>
  <button @click="decrement">-</button>
  <span :class="myColor">{{ count }}</span>
  <button @click="increment">+</button>

  <!--  -->
  
</template>

<script setup>
  // import HelloWorld from './components/HelloWorld.vue'
  // import TheWelcome from './components/TheWelcome.vue'

  import { ref } from 'vue'

  const myName = 'Arturo Cabrera'
  const myAge = '33'
  const color = 'color:#33a0ff;font-size:2em'

  const saludar = () => {
    alert("Hola Terricola")
  }

  // con parametro
  const saludo = (miName) => {
    alert(`Hola ${miName}`)
  }

  // contador
  const count = ref(0);
  const increment = () => {
    count.value++;
  }

  const decrement = () => {
    count.value--;
  }

  const myColor = ref = ("azul")
</script>

<style scoped>
.rojo {
  color: rojo;
}

.verde {
  color: verde;
}

.azul {
  color: azul;
}
</style>
