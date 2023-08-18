<template>
  <h1>Hola Mundo Vue.js con {{ name.toUpperCase() }}</h1>   <!-- Interpolacion -->
  <h2>{{ arrayColors }}</h2>
  <h2 :style="styleColor">Soy Azul</h2>
  <h2 :style="`color: ${arrayColors[2]}`">Rosa</h2>     <!--interpolacion de js -->
  <h2 v-if="activo">Estoy Activo</h2>
  <h2 v-else-if="activo == false">Estoy inactivo</h2>   <!-- varias maneras de pasar la directiva -->
  <h2 v-else>Estoy indeciso</h2>
  <h2 v-show="otroActivo">v-show</h2>                   <!-- no se muestar si es false -->
  <!-- recorrer un arrary, mostrando el index -->
  <h2>Recorrer un array</h2>
  <ul>
    <li v-for="(fruta, index) in arrayFrutas" :key="index">
      {{ index }} {{ fruta }}
    </li>
  </ul>

    <!-- recorrer un array mas complejo e interacturar con los elementos -->
    <h2>Recorrer un array mas complejo</h2>
  <ul>
    <li v-for="person in datosPersonas" :key="person.name">
      {{ person.name }} -
      {{ person.age }} -
      {{ person.role }}
    </li>
  </ul>

  <!-- recorrer un objeto, mostrando la propiedad y el index -->
  <h2>Recorrer un objeto</h2>
  {{ objetoPersona }}
  <ul>
    <li v-for="(person, propiedad, index) in objetoPersona" :key="index">  <!-- person, propiedad, index | En objetos el segundo elemento toma la propiedas y de tercero el indice-->
      {{ index }} {{ propiedad }} : {{ person }}
    </li>
  </ul>

  <!-- recorrer un v-for con un v-if  -->
  <h2>Recorrer v-if dentro de un v-for</h2>
  <ul>
    <!-- MALA PRACTICA, porque pinta el elemento aunque excluya el contenido -->
    <h3>Mala Practica</h3>
    <!-- el v-if tiene mayor perso que el v-for se lee primero el v-if-->
    <li v-for="(customer, index) in objetoCustomer" :key="index">
      <span v-if="customer.age > 18">
        {{ index }} : {{ customer }}
      </span>
    </li>
  </ul>

  <!-- BUENA PRACTICA -->
  <ul>
    <h3>Buena Practica - utilizando template</h3>
    <template v-for="(customer, index) in objetoCustomer" :key="index">
      <li v-if="customer.age > 18">
        {{ index }} : {{ customer }}
      </li>
    </template>
    
  </ul>

  <h2>Eventos v-on || @</h2>
  <button v-on:click="handleClick">Button1</button>
  <button @click="handleClick">Button1</button>


</template>


<script setup>
const name = 'Arturo Cabrera'
const styleColor = 'color:blue'
const arrayColors = ['blue', 'yellow', 'pink']
const activo = null  // false
const otroActivo = false
const arrayFrutas = ['🍇','🍈','🍉','🍊','🍋','🍌','🍍','🥭','🍎','🍏','🍐','🍑','🍒','🍓','🫐','🥝','🍅','🫒','🥥','🥑']
const datosPersonas = [
  {
    name: "Arturo Cabrera",
    age: 33,
    role: "Developer full Stack"
  },
  {
    name: "Alexander Cabrera",
    age: 4,
    role: "Developer jr"
  },
  {
    name: "Meryuris de Cabrera",
    age: 30,
    role: "Wife of Developer"
  }
]

const objetoPersona = {
    name: "Arturo Cabrera",
    age: 33,
    role: "Developer full Stack"
  }

  const objetoCustomer = [
    {
      name: "Richard Stallman",
      age: 60,
      role: "Developer Master",
      id: 1
    },
    {
      name: "Linus Torvalds",
      age: 55,
      role: "Developer Master",
      id: 2
    },
    {
      name: "Tux",
      age: 10,
      role: "Icon",
      id: 3
    }
  ]

  const handleClick = () => {
    console.log("Me has pinchado")
  }

</script>

<style>
h1 { 
  color:red;
}
</style>