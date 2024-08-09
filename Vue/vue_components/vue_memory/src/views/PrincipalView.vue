<template>
	<div class="hello">
		<h1>{{ title }}</h1>
		<p>
			<span>Memory</span> es un juego para practicar la agilidad mental, activan el cerebro y las habilidades
			cognitivas. Mejoran la concentración. Ayuda a conservar la memoria tanto a corto, como a medio y largo
			plazo. Sirven como medio para algunos tratamientos médicos y psicológicos.
			<a href="https://arturocabrera.com" target="_self" rel="noopener">mi web</a>.
		</p>
		<input v-model.number="square" type="number">
		<h3>Memory con {{ changedPair() }} cuadros</h3>

		<div class="container">
			<div>
				<img 
					v-for="(el, index) in total" 
					:key="index" 
					:src="index % 2 === 0 ? imgBlack : imgWhite"
					:alt="index % 2 === 0 ? 'imagen de cuadro negra' : 'imagen de cuadro blanca'">
				<!-- :src="isEven(total) ? imgBlack : imgWhite" 
					alt="isEven(total) ? 'imagen de cuadro negra' : 'imagen de cuadro blanca'" -->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PrincipalView',
	props: {
		title: String
	},
	data(){
		return {
			square: 22,
			imgBlack: 'img-front/bk-blak.png',
			imgWhite: 'img-front/bk-white.png',
			total: 0
		}
	},
	methods: {
		changedPair() {
			if (this.square <= 42) {
				return this.total = this.square * 2
			}else{
				this.square = 42
			}
			
		},
		isEven(number) {
			return number % 2 === 0;
		}
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
