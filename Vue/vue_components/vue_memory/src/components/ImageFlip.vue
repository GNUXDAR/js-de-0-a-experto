<template>
	<div class="card-container">
		<div 
			class="card" 
			v-for="(card, index) in cards" 
			:key="index" 
			:class="{ flipped: card.flipped }"
			@click="flipCard(index)"
		>
			<div class="card-face card-front">
				<img class="square" :src="imgWhite" alt="Imagen Frontal Blanca">
			</div>
			<div class="card-face card-back">
				<img class="square" :src="images[index]" alt="Imagen Trasera Negra">
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
			]
		}
	},
	computed: {
		cards() {
			// 	un Array de objetos
			return Array.from(
				{ length: this.total * 2 },
				() => ({ flipped: false }),
			);
		}
	},
	methods: {
		// index me da la posicion de la imagen
		flipCard(index) {
			console.log('aquiiii' +this.images);

			if (this.cards[index].flipped) {
				this.flippedCount--
			} else {
				this.flippedCount++
			}

			// if (this.flippedCount > 2) {
			// 	// return;
			// 	this.cards.forEach((card) => {
			// 		console.log(this.flippedCount + ' voltedas');
			// 		document.querySelectorAll('.card')[index].classList.remove('flipped')

			// 		if(card.flipped === true) {
			// 			console.log(card.flipped)
			// 			card.flipped = false;
			// 			// this.flippedCount--;
			// 		}
			// 	});
			// }

			console.log('Antes de cambiar ', this.cards[index].flipped);
			this.cards[index].flipped = !this.cards[index].flipped; //ayudado con IA
			console.log('Despues de cambiar ', this.cards[index].flipped);
			document.querySelectorAll('.card')[index].classList.toggle('flipped');
			// alert(this.cards[index].flipped)
		},
		selectedImages() {

			const selectedImages = [];
			const imagesCopy = [...this.images]; //copia el array original
			while (selectedImages.length < this.total * 2) {
				const randomIndex = Math.floor(Math.random() * imagesCopy.length);
				const randomImage = imagesCopy[randomIndex];
				selectedImages.push(randomImage);

				// if (selectedImages.includes(randomImage)) {
				// 	continue;
				// }

				selectedImages.push(randomImage);
				selectedImages.push(randomImage); //para el par
			}

			// this.selectedImages = selectedImages;
			this.cards = this.cards.map((card, index) => {
				card.image = selectedImages[index];
				return card;
			});
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
	transition: transform 0.5s;
}
.square {
	margin-left: 4px;
}
</style>
