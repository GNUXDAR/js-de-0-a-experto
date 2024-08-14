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
			// flipped = volteada
			cards: Array.from({ length: this.total }, () => ({ flipped: false }))
		}
	},
	methods: {
		flipCard(index) {
			this.cards[index].flipped = !this.cards[index].flipped;
		}
	}
}
</script>

<style scoped>
.card-container {
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
}

.card-back {
	background-color: white;
	transform: rotateY(180deg);
}

.flipped {
	transform: rotateY(180deg);
}

.square {
	margin-left: 4px;
}
</style>
