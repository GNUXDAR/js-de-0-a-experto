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

		<h2>Sigueme...</h2>
		<p>
			Mi objetivo es crear contenido valioso sobre tecnologías de desarrollo web, compartiendo mi experiencia
			profesional y personal acumulada a lo largo de mi carrera en informática. Me siento afortunado de trabajar
			en lo que me apasiona y quiero inspirar a otros que estudian, han estudiado o se interesan por el desarrollo
			de software.
		</p>
		<p>
			Quiero motivar a aquellos que se sienten desanimados o desorientados en su carrera, y demostrar que es
			posible dedicarse a lo que se ama. Mi intención es contribuir con mi granito de arena y compartir mis
			conocimientos para que todos puedan beneficiarse.
		</p>
		<p>
			Considero que el desarrollo web es un campo donde todos podemos aprender y contribuir juntos, y espero que
			mi contenido sea una fuente de inspiración y motivación para aquellos que comparten mi pasión.
		</p>
		<div class="icons">
			<span class="heart-icon">❤️</span>
			<span class="m-icon">➕</span>
			<span class="laptop-icon">💻</span>
			<span class="r-icon">🟰</span>
			<span class="fly-icon">🚀</span>
		</div>

		<div class="network-media">
			
		</div>
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

.heart-icon, .laptop-icon, .fly-icon {
	font-size: 100px;
}

.m-icon, .r-icon {
	font-size: 50px;
	filter: hue-rotate(120deg);
}
</style>
