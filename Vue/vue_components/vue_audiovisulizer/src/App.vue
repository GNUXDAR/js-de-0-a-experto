<template>
	<img alt="Vue logo" src="./assets/logo.png">
	<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
	<HomeSound></HomeSound>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HomeSound from './components/HomeSound.vue'

export default {
	name: 'App',
	components: {
		HomeSound
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
