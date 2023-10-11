<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  <h1>Comments</h1>
  <div v-if="loading">
    <h3>Loading..</h3>
  </div>
  <div v-else>
    <ul>
      <li v-for="(comment, index) in result.getAllComments" :key="index">
        {{ comment.name }}
        {{ comment.text }}
      </li>
    </ul>
  </div>
  <div v-if="error">
    <h3 class="error">{{ error.message }}</h3>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useQuery } from '@vue/apollo-composable';
  import gql from 'graphql-tag'

  export default defineComponent({
    setup(){
      const {result, loading, error} = useQuery(gql`
        query {
          getAllComments {
            name
            text
          }
        }
      `)
      return {
        result, loading, error
      }
    }
  })
</script>

<style>
.error {
  color: red;
}
</style>
