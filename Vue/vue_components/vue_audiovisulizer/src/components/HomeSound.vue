<template>
	<div>
		<h1>Audio Visualizer with Controls</h1>
		<input type="file" @change="handleFileChange" accept="audio/*" />
		<div id="controls">
			<button @click="playAudio">Play</button>
			<button @click="pauseAudio">Pause</button>
			<button @click="stopAudio">Stop</button>
			<input type="range" v-model="progress" @input="handleProgressChange" max="100" />
		</div>
		<canvas ref="canvas" width="800" height="200"></canvas>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const canvas = ref(null);
const audioContext = ref(null);
const audioSource = ref(null);
const analyser = ref(null);
const dataArray = ref([]);
const bufferLength = ref(0);
const audioBuffer = ref(null);
const isPlaying = ref(false);
const startTime = ref(0);
const pausedAt = ref(0);
const progress = ref(0);

function initAudioContext() {
	audioContext.value = new (window.AudioContext || window.webkitAudioContext)();
	analyser.value = audioContext.value.createAnalyser();
	analyser.value.fftSize = 2048;
	bufferLength.value = analyser.value.frequencyBinCount;
	dataArray.value = new Uint8Array(bufferLength.value);
}

function connectAudioSource(buffer) {
	audioBuffer.value = buffer;
	audioSource.value = audioContext.value.createBufferSource();
	audioSource.value.buffer = audioBuffer.value;
	audioSource.value.connect(analyser.value);
	analyser.value.connect(audioContext.value.destination);
	audioSource.value.onended = () => stopAudio();
	draw();
}

function playAudio() {
	if (!isPlaying.value) {
		audioSource.value = audioContext.value.createBufferSource();
		audioSource.value.buffer = audioBuffer.value;
		audioSource.value.connect(analyser.value);
		analyser.value.connect(audioContext.value.destination);
		audioSource.value.onended = () => stopAudio();
		audioSource.value.start(0, pausedAt.value);
		startTime.value = audioContext.value.currentTime - pausedAt.value;
		isPlaying.value = true;
	}
}

function pauseAudio() {
	if (isPlaying.value) {
		audioSource.value.stop();
		pausedAt.value = audioContext.value.currentTime - startTime.value;
		isPlaying.value = false;
	}
}

function stopAudio() {
	if (isPlaying.value) {
		audioSource.value.stop();
		pausedAt.value = 0;
		isPlaying.value = false;
	}
}

function draw() {
	if (!canvas.value) return;
	const ctx = canvas.value.getContext('2d');
	requestAnimationFrame(draw);
	analyser.value.getByteFrequencyData(dataArray.value);
	ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
	const barWidth = (canvas.value.width / bufferLength.value) * 8; // Incrementar el ancho de las barras
	let barHeight;
	let x = 0;
	ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
	ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);

	for (let i = 0; i < bufferLength.value; i++) {
		barHeight = dataArray.value[i] / 2;
		ctx.fillStyle = `rgb(0, 0, ${barHeight + 100})`; // Color azul para las barras
		ctx.fillRect(x, canvas.value.height - barHeight, barWidth, barHeight);
		x += barWidth + 1;
	}

	// Actualizar el progreso del audio
	if (isPlaying.value) {
		const elapsedTime = audioContext.value.currentTime - startTime.value;
		const duration = audioBuffer.value.duration;
		progress.value = (elapsedTime / duration) * 100;
	} else {
		progress.value = (pausedAt.value / audioBuffer.value.duration) * 100;
	}
}

function handleFileChange(event) {
	if (event.target.files.length > 0) {
		const file = event.target.files[0];
		const reader = new FileReader();
		reader.onload = (e) => {
			initAudioContext();
			audioContext.value.decodeAudioData(e.target.result, connectAudioSource);
		};
		reader.readAsArrayBuffer(file);
	}
}

function handleProgressChange() {
	const progressValue = progress.value / 100;
	if (isPlaying.value) {
		audioSource.value.stop();
		pausedAt.value = audioBuffer.value.duration * progressValue;
		playAudio();
	} else {
		pausedAt.value = audioBuffer.value.duration * progressValue;
	}
}

onMounted(() => {
	initAudioContext();
});

onUnmounted(() => {
	if (audioContext.value) {
		audioContext.value.close();
	}
});
</script>

<style>
body {
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #282c34;
	color: white;
	font-family: Arial, sans-serif;

}

h1, input {
	color: #fff;
}
canvas {
	border: 1px solid white;
	margin-top: 20px;
	background: rgba(243, 225, 225, 0.5);
}

#controls {
	margin: 10px;
}

button {
	margin: 5px;
	padding: 10px;
	font-size: 16px;
	cursor: pointer;
	border-radius: 30px;
	border: none;
}

input[type="range"] {
	width: 300px;
	margin-top: 10px;
}
</style>
