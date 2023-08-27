<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <img alt="Vue logo" src="./assets/logo.png">

  <h1>Listado de Posts</h1>
  <PostContainer />

  <h1>Options API y Composition API</h1>
  <CounterOption />

  <CounterComposition />

  <!-- cada componente tiene su propio estado independiente -->
  <CounterComposition />

  <CounterComposition2 />

  <h1>Directivas</h1>
  <h2>v-if, v-else, v-show</h2>
  <ExampleSelective />

  <h2>v-for</h2>
  <ExampleFor />

  <h2>v-bind AND v-on</h2>
  <ClassBind />

  <h2>v-model</h2>
  <ModelForm />

  <h2>Ciclos de vida</h2>
  <CycleOption />  <!-- con el optin api -->
  <CycleComposition /> <!-- con el composition api -->
  <code>ver en console.log</code>

  <hr>
  <h2>Props</h2>
  <PostList />


</template>

<script lang="ts" setup>
  import CounterOption from './components/CounterOption.vue';
  import CounterComposition from './components/CounterComposition.vue';
  import CounterComposition2 from './components/CounterComposition2.vue';
  import PostContainer from './components/PostContainer.vue';
  import ExampleSelective from './components/ExampleSelective.vue';
  import ExampleFor from './components/ExampleFor.vue';
  import ClassBind from './components/ClassBind.vue';
  import ModelForm from './components/ModelForm.vue';

  // ciclo de vida de un componente
  import CycleOption from './components/CycleOption.vue';
  import CycleComposition from './components/CycleComposition.vue';

  // comunicacion vertical y el uso de props
  import PostList from './components/PostList.vue';
</script>

<style>
body {
  text-align: center;
  color: #2c3e50;
}

h1 {
  color: #2c3e50;
}

.btn-counter {
  display: block;
  float: left;
  width: 25%;

}
</style>
