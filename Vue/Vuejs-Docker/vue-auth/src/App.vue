<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{name: 'auth'}">Login / Register</router-link> |
    <router-link to="/firebase">Auth with Firebase</router-link> |
    <router-link to="/social">Auth with Social login</router-link> |
    <router-link to="/aws">Auth with AWS</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
