<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <PostList msg="Services"/> -->
  <RouterView msg="Services" />
</template>

<script lang="ts" setup>
// import PostList from './components/PostList.vue';
// import PostListView from './views/PostListView.vue';
// ya no lo necesitaremos, porque usamoe el reouterView

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primaryColor;
  margin-top: 60px;
}
</style>
