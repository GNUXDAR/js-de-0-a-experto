<template>
	<div class="about">
		<h1>Memory</h1>
		<h2>Beneficios de los juegos de memoria</h2>
		<p>Entre los beneficios que pueden otorgar los juegos de memoria para las personas encontramos:</p>
		<ol>
			<li>Entrenan la memoria visual.</li>
			<li>Potencian las habilidades cognitivas.</li>
			<li>Activan el cerebro y las habilidades cognitivas.</li>
			<li>Mejoran la concentración.</li>
			<li>Ayuda a conservar la memoria tanto a corto, como a medio y largo plazo.</li>
			<li>Sirven como medio para algunos tratamientos médicos y psicológicos.</li>
			<li>Favorecen el contacto social y la comunicación.</li>
			<li>Aumenta la autoestima y autonomía del adulto mayor.</li>
			<li>En definitiva, mejora su calidad de vida.</li>
		</ol>
	</div>

	<div class="particles">
		<ParticlesComponent />
	</div>
</template>

<script>
import ParticlesComponent from '@/components/ParticlesComponent.vue';

export default {
	components: {
		ParticlesComponent
	}
}

</script>

<style>
ol {
		text-align: center;
		display: inline-block;
}

.particles {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	/* Para que quede detrás de .about */
}

.about {
	position: relative;
	/* z-index: 999; */
}
.about,
h1 {
	color: #fff;
}

p, ol {
	font-size: 25px;
}
</style>
