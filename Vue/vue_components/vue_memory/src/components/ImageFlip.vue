<template>

	<button class="btn" type="button" @click="refresh()">Barajar</button>
	<button class="btn-flipped" type="button" @click="showCards()">{{ showingCards ? 'Ocultar' : 'Mostrar' }}</button>

	<div class="card-container">
		<div class="card" v-for="(card, index) in cards" :key="index"
			:class="{ flipped: card.flipped, 'green-border': card.border === 'green', 'red-border': card.border === 'red' }"
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
			selectedCards: [],
			pairedCards: [],
			showingCard: false,
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
				'cards-tec/23.svg',
				'cards-tec/24.svg',
				'cards-tec/25.svg',
				'cards-tec/26.svg',
				'cards-tec/27.svg',
				'cards-tec/28.svg',
				'cards-tec/29.svg',
				'cards-tec/30.svg',
				'cards-tec/31.svg',
				'cards-tec/32.svg',
				'cards-tec/33.svg',
				'cards-tec/34.svg',
				'cards-tec/35.svg',
				'cards-tec/36.svg',
				'cards-tec/37.svg',
				'cards-tec/38.svg',
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
			if (this.cards[index].flipped) {
				return;
			}

			// marcar la carta como volteada
			this.cards[index].flipped = true;

			// this.cards[index].flipped = !this.cards[index].flipped;

			// un array para consultar las volteadas
			this.selectedCards.push(index);
			if (this.selectedCards.length === 2) {
				// las marca en rojo "comparando"
				this.cards[this.selectedCards[0]].border = 'red';
				this.cards[this.selectedCards[1]].border = 'red';

				setTimeout(() => {
					// Si las cartas no coinciden
					if (this.cards[this.selectedCards[0]].image !== this.cards[this.selectedCards[1]].image) {
						// Voltea las cartas de vuelta y deja el borde rojo para mostrar que no coinciden
						this.cards[this.selectedCards[0]].flipped = false;
						this.cards[this.selectedCards[1]].flipped = false;

						this.cards[this.selectedCards[0]].border = '';
						this.cards[this.selectedCards[1]].border = '';
						this.selectedCards = [];
					} else {
						// Si las cartas coinciden, marca ambas con un borde verde y reinicia `selectedCards`
						this.cards[this.selectedCards[0]].border = 'green';
						this.cards[this.selectedCards[1]].border = 'green';
						this.selectedCards = [];
					}
				}, 1000);
			}
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
		},
		showCards() {
			this.showingCards = !this.showingCards;
			// Resetear el borde cuando se muestran todas las cartas y también cuando se ocultan todas las cartas
			if (this.showingCards) {
				this.cards.forEach(card => {
					card.flipped = true;
					card.border = '';
				});
			} else {
				this.cards.forEach(card => {
					card.flipped = false;
					card.border = '';
				});
			}
		}
,
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
	border-radius: 11px;
	outline-offset: 0;
	box-sizing: border-box;
}

.card.green-border,
.card.red-border {
	border-radius: 11px;
	outline: 4px solid transparent;
	outline-offset: 0px;
	box-sizing: border-box;
}

.card.green-border {
	outline-color: green;
}

.card.red-border {
	outline-color: red;
}

.card-face {
	position: absolute;
	width: 100%;
	height: 100%;
	backface-visibility: hidden; /* oculta la cara no visible cuando la carta se voltea */
	display: flex;
	align-items: center;
	justify-content: center;
}

/* .card-front {
	border: solid #000;
	border-radius: 15px;
	width: 100%;
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
	margin-left: 1.5px;
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
}
.btn {
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
.btn-flipped {
	width: 110px;
	padding: 0.5%;
	margin: 0.9%;
	background-color: #34495e;
	border: 0cap;
	border-radius: 25px;
	cursor: pointer;
	font-size: medium;
	color: beige;
}
</style>
