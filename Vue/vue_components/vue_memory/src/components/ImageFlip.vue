<template>
	<div class="card-container">
		<div class="card" v-for="(el, index) in total" :key="index">
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
	name: 'ImageFlipComponent',
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
	/* width: 100%;
	height: 100%; */
	position: relative;
	transform-style: preserve-3d;
	transition: transform 0.6s;
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

.card-container:hover .card {
	/* Voltea al hacer hover */
	transform: rotateY(180deg);
}

.square {
	margin-left: 4px;
}
</style>
