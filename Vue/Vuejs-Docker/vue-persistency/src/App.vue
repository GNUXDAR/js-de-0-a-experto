<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{name: 'local'}">LocalStorage</router-link> |
    <router-link :to="{ name: 'watch' }">Watch - op</router-link> |
    <router-link :to="{ name: 'watchcomposition' }">Watch - con</router-link> |
    <router-link :to="{ name: 'watcheffect' }">WatchEffect</router-link> 
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
