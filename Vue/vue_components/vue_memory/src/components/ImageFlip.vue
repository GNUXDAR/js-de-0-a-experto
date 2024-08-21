<template>

	<button class="btn" type="button" @click="refresh()">Barajear</button>

	<div class="card-container">
		<div class="card" v-for="(card, index) in cards" :key="index" :class="{ flipped: card.flipped }"
			@click="flipCard(index)">
			<div class="card-face card-front">
				<img class="square" :src="imgWhite" alt="Image Front">
			</div>
			<div class="card-face card-back">
				<img class="square" :src="card.image" alt="Image Back">
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
	mounted() {
		this.selectedImages();
	},
	data() {
		return {
			cards: [],
			flip: 0,
			flippedCount: 0,
			images: [
				'cards-tec/00.svg',
				'cards-tec/02.svg',
				'cards-tec/03.svg',
				'cards-tec/04.svg',
				'cards-tec/05.svg',
				'cards-tec/06.svg',
				'cards-tec/07.svg',
				'cards-tec/08.svg',
				'cards-tec/09.svg',
				'cards-tec/10.svg',
				'cards-tec/11.svg',
				'cards-tec/12.svg',
				'cards-tec/13.svg',
				'cards-tec/14.svg',
				'cards-tec/15.svg',
				'cards-tec/16.svg',
				'cards-tec/17.svg',
				'cards-tec/18.svg',
				'cards-tec/19.svg',
				'cards-tec/20.svg',
				'cards-tec/21.svg',
				'cards-tec/22.svg',
				
			]
		}
	},
	computed: {
		flippedCards() {
			return this.cards.filter(card => card.flipped)
		},
	},
	methods: {
		// index me da la posicion de la imagen
		flipCard(index) {
			this.cards[index].flipped = !this.cards[index].flipped; //ayudado con IA
		},
		selectedImages() {
			const images = this.images.flatMap(image => [image, image]);
			for(let i=images.length-1; i>0; i--) {
				const j=Math.floor(Math.random()*(i+1));
				[images[i], images[j]] = [images[j], images[i]];
			}
			this.cards = images.map((image)=>({image, flipped:false}));
		},

		refresh() {
			window.location.reload()
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
	background-color: #41b883;
	width: 92%;
	padding: 1%;
	border-radius: 25px;
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
	/* background-color: white; */
	transform: rotateY(180deg);
}

/* Voltea al hacer click */
.flipped {
	transform: rotateY(180deg);
	transition: transform 0.5s;
}
.square {
	margin-left: 4px;
}
.btn{
	width: 110px;
	padding: 0.5%;
	margin: 0.9%;
	background-color: #41b883;
	border: 0cap;
	border-radius: 25px;
	cursor: pointer;
	font-size: medium;
	color: beige;
}
</style>
