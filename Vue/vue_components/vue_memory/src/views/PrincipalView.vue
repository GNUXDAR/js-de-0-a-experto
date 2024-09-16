<template>
	<div class="hello">
		<h1>{{ title }}</h1>
		<p class="intro">
			<span>Memory</span> es un juego para practicar la agilidad mental, activan el cerebro y las habilidades
			cognitivas. Mejoran la concentración. Ayuda a conservar la memoria tanto a corto, como a medio y largo
			plazo. Sirven como medio para algunos tratamientos médicos y psicológicos.
			<a href="https://arturocabrera.com" target="_self" rel="noopener">mi web</a>.
		</p>
		<!-- <input v-model.number="total" type="number" @input="changedPair"> -->
		<!-- <h3>Memory with {{ changedPair() }} cards</h3> -->


		<div class="container">
			<div>
				<ImageFlip 
					:total="total" 
					:imgBlack="imgBlack" 
					:imgWhite="imgWhite" 
					:cardsBlock="cardsBlock"
				/>
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
			title: 'Memory {{ Capitan Vue }}',
			imgBlack: 'img-front/bk-blak.png',
			imgWhite: 'cards-tec/original.svg',
			total: 11,
			cardsBlock: [],
		}
	},
	// methods: {
	// 	changedPair() {
	// 		if (this.total < 2) {
	// 			this.total = 2;
	// 		} else if (this.total > 44) {
	// 			this.total = 44;
	// 		}
	// 		return this.total * 2;
	// 	},
	// // 	// isEven(number) {
	// // 	// 	return number % 2 === 0;
	// // 	// },
	// }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
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
}
/* end */
.intro, h1 {
	color: #fff;
	font-size: 25px;
	padding: 40px;
}
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
