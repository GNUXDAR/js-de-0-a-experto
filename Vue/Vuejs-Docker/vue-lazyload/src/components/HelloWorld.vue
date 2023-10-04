<template>
  <h1>LazyLoad</h1>
  <!-- <img v-lazy="{ src: 'https://fastly.picsum.photos/id/425/1280/800.jpg?hmac=hj4EesrT7_qptxw4AYiRxVfaQJK8VCypDx9r4srvbgw',
    loading: 'loading.gif', error: 'loading.gif', delay: 500 }"> -->

    <img v-lazy="{ src:lazyOptions.src, lifecycle: lazyOptions.lifecycle, delay: lazyOptions.delay}" lazy="loading">
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const lazyOptions = ref({
  src: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
  delay: 500,
  lifecycle: {
    loading: (el) => {
      console.log('cargando imagen', el)
    },
    error: (el) => {
      console.log('image error', el)
    },
    loaded: (el) => {
      console.log('imagen cargada', el)
    }
  }
})
</script>

<style scoped>
  img[lazy=loading] {
    /*your style here*/
    background-color: blue;
    width: 500px;
  }
  img[lazy=error] {
    /*your style here*/
    background-color: red;
    width: 500px;
  }
  img[lazy=loaded] {
    /*your style here*/
  }
</style>