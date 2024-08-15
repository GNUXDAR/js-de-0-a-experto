<template>
	<div class="hello">
		<h1>{{ title }}</h1>
		<p>
			<span>Memory</span> es un juego para practicar la agilidad mental, activan el cerebro y las habilidades
			cognitivas. Mejoran la concentración. Ayuda a conservar la memoria tanto a corto, como a medio y largo
			plazo. Sirven como medio para algunos tratamientos médicos y psicológicos.
			<a href="https://arturocabrera.com" target="_self" rel="noopener">mi web</a>.
		</p>
		<input v-model.number="total" type="number">
		<h3>Memory con {{ total*2 }} cuadros</h3>


		<div class="container">
			<div>
				<ImageFlip :total="total" :imgBlack="imgBlack" :imgWhite="imgWhite" />
			</div>
		</div>
	</div>
</template>

<script>
import ImageFlip from '../components/ImageFlip.vue'
export default {
	name: 'PrincipalView',
	components: {
		ImageFlip,
	},
	data(){
		return {
			// square: 24,
			title: 'Memory {{Vue.js}}',
			imgBlack: 'img-front/bk-blak.png',
			imgWhite: 'img-front/bk-white.png',
			total: 24,
		}
	},
	methods: {
		// changedPair() {
		// 	if (this.square < 2) {
		// 		this.square = 2;
		// 	} else if (this.square > 42) {
		// 		this.square = 42;
		// 	}

		// 	return this.total = this.square * 2;
		// },
		// isEven(number) {
		// 	return number % 2 === 0;
		// },
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

span {
	font-weight: bold;
}

a {
	color: #42b983;
}

</style>
