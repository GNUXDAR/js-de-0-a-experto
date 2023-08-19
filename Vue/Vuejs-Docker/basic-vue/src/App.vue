<template>
  <div class="container">
    <h1>Hola Mundo Vue.js con {{ name.toUpperCase() }}</h1>   <!-- Interpolacion -->
    <h2>{{ arrayColors }}</h2>
    <h2 :style="styleColor">Soy Azul</h2>
    <h2 v-bind:style="styleColor">Soy otro Azul</h2>      <!-- v-bind === : -->
    <h2 :style="`color: ${arrayColors[2]}`">Rosa</h2>     <!--interpolacion de js -->
    <h2 v-if="activo">Estoy Activo</h2>
    <h2 v-else-if="activo == false">Estoy inactivo</h2>   <!-- varias maneras de pasar la directiva -->
    <h2 v-else>Estoy indeciso</h2>
    <h2 v-show="otroActivo">v-show</h2>                   <!-- no se muestra si es false, pero en el DOM existe -->
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

    <div class="btn-group">
      <button class="btn btn-secondary" v-on:click="handleClick">Button1</button>   <!-- handleClick "sin parametros" - handleClick(param, paramN) "con parametros"-->
      <button class="btn btn-secondary" @click="handleClick2('Me has pinchado en el 2do boton')">Button1</button>      
    </div>


    <!-- Modificadores(right, middle, left) -->
    <h2>Modificadores</h2> <!-- https://vuejs.org/guide/essentials/event-handling.html#event-modifiers -->

    <div class="btn-group">
      <button class="btn btn-success" @click.right.prevent="handleClick2('Se presiono el click derecho')">Click Derecho</button>  <!-- prevent es la alternativa de event.preventDefault() en js-->
      <button class="btn btn-success" @click.middle="handleClick2('Se presiono el click del medio')">Click del Medio</button>
      <button class="btn btn-success" @click.left="handleClick2('Se presiono el click izquierdo')">Click Izquierdo</button>      
    </div>


    <!-- Ractividad ref() -->
    <h2>Reactividad - Contador</h2>
    <!-- mala practica, no se recomienda usar demasiada logica en los templates -->
    <h2 v-if="counter==0">{{ counter }}</h2> 
    <h2 v-if="counter>0" style="color:green">{{ counter }}</h2> 
    <h2 v-if="counter<0" style="color:red">{{ counter }}</h2> 
    
    <div class="btn-group">
      <button class="btn btn-danger" @click="increment">Aumentar</button>
      <button class="btn btn-danger" @click="decrement">Disminuir</button>
      <button class="btn btn-danger" @click="reset">Resetear</button>
    </div>


    <!-- propiedades computadas computed() -->
    <!-- buena  practica -->
    <h2>Propiedades Computadas</h2>
    <h2 :class="classCounter">{{ counter }}</h2> 
    
    <div class="btn-group">
      <button class="btn btn-primary" @click="increment">Aumentar</button>
      <button class="btn btn-primary" @click="decrement">Disminuir</button>
      <button class="btn btn-primary" @click="reset">Resetear</button>
      <!-- boton para el ejercicio de add addFavNum -->
      <button class="btn btn-primary" @click="addFavoriteNumber" :disabled="isNumberFavorite">Agregar a Favoritos</button>
    </div>

    
    <h2>Números Favoritos:</h2>
    <ul class="list-group">
      <li class="list-group-item" v-for="(number, index) in favoriteNumbers" :key="index">
        {{ number }}
      </li>
    </ul>

  </div>
</template>


<script setup>
// composition API
import { ref, computed } from 'vue';

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

// eventos
const handleClick = () => {
  console.log("Me has pinchado")
}

// eventos con parametros
const handleClick2 = (message) => {
  console.log(message)
}

// Reactividad - hacer un contador
let counter = ref(0)        // ref() identifica que es una variable reactiva || para acceder al valor debemos especificarlo con .value (solo en el codigo js NOT in TEMPLATE, OK?)
const increment = () => {
  console.log("contador")
  counter.value++
  console.log(counter.value)
}

const decrement = () => {
  console.log("decrementar")
  counter.value--
  console.log(counter.value)
}

const reset = () => {
  console.log("resetear")
  counter.value = 0
  console.log(counter.value)
}

// computed, siempre debe retornar algo
const classCounter = computed(() => {
  if(counter.value == 0) {
    return 'zero'
  }

  if(counter.value > 0) {
    return 'positive'
  }

  if(counter.value < 0) {
    return 'negative'
  }

  return ''
})

// Ejercicios
/*
Agrega un array y su respectivo método y botón add para almacenar los números favoritos del usuario.
Pinta ese array utilizando v-for.
Utiliza :disabled en el botón add, para que solo se pueda presionar si el array no contiene números repetidos. (utiliza una propiedad computada).
:disabled si es true el botón se bloquea:
*/
const favoriteNumbers = ref([]);  // variable reactiva

// Método para agregar un número favorito
const addFavoriteNumber = () => {
  const numberToAdd = counter.value;
  if (!favoriteNumbers.value.includes(numberToAdd)) {
    favoriteNumbers.value.push(numberToAdd);
  }
};

// Propiedad computada para verificar si el número actual ya es favorito
const isNumberFavorite = computed(() => {
  const currentNumber = counter.value;
  return favoriteNumbers.value.includes(currentNumber);
});
</script>

<style>
h1 { 
  color:red;
}

.zero {
  color:brown;
}

.negative {
  color: yellow;
}

.positive {
  color:blue;
}
</style>