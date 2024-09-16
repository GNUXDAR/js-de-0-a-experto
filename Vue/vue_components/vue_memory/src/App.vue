<template>
	<nav>
		<router-link to="/">Kids</router-link> |
		<router-link to="/dev">Developers</router-link> |
		<router-link to="/about">About</router-link>
	</nav>
	<router-view />
	<app-footer />
</template>

<script>
import AppFooter from './components/AppFooter.vue'

export default {
	components: {
		AppFooter,
	}
}
</script>

<style>
/* estilos graienates para todas las vistas */
/* #app {
	background: linear-gradient(-45deg, #52eed7, #3ce789, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	min-height: 100vh;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}

	50% {
		background-position: 100% 50%;
	}

	100% {
		background-position: 0% 50%;
	}
} */

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
