<template>
	<div class="card-container">
		<div 
			class="card" 
			v-for="(el, index) in cards" 
			:key="index" 
			:class="{ flipped: el.flipped }"
			@click="flipCard(index)"
		>
			<div class="card-face card-front">
				<img class="square" :src="imgWhite" alt="Imagen Frontal Blanca">
			</div>
			<div class="card-face card-back">
				<img class="square" :src="imgBlack" alt="Imagen Trasera Negra">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ImageFlip',
	props: {
		total: {
			type: Number,
			required: true
		},
		imgBlack: {
			type: String,
			required: true
		},
		imgWhite: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			// flipped = volteada / ayudado con IA
			cards: Array.from({ length: this.total }, () => ({ flipped: false })),
			// un array de objeto para cada tarjeta
		}
		
	},
	methods: {
		// index me da la posicion de la imagen
		flipCard(index) {
			this.cards[index].flipped = !this.cards[index].flipped; //ayudado con IA
			// alert('diste click')
		}
	}
}
</script>

<style scoped>
.card-container {
	/*efecto 3D */
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	perspective: 1000px;
}

.card {
	width: 150px;
	height: 140px;
	position: relative;
	transform-style: preserve-3d;
	transition: transform 0.6s;
	cursor: pointer;
}

.card-face {
	position: absolute;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
	/* oculta la cara no visible cuando la carta se voltea */
}

/* .card-front {
	background-color: black;
} */

.card-back {
	/* voltea la parte trasera de la card */
	background-color: white;
	transform: rotateY(180deg);
}

/* Voltea al hacer hover */
/* .card-container:hover .card {
	transform: rotateY(180deg);
} */

.flipped {
	transform: rotateY(180deg);
}
.square {
	margin-left: 4px;
}
</style>
