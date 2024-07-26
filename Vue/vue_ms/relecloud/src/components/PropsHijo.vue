<template>
	<button @click="count++">Me has clickeado {{ count }} veces</button><br>
	<label for="Titulo">Titulo:</label>{{ title }} <br>
	<label for="Descripcion">Descripcion:</label>{{ description }}
</template>

<script>
export default {
	props: ['title', 'description'],
	data() {
		return {
			count: 0
		}
	}
}
</script>

<style>

</style>