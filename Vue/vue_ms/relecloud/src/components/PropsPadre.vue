<template>
	<h1>Aqui hay un componente hijo!</h1>
	<props-hijo :title="title" :description="description"></props-hijo>
</template>

<script>
import PropsHijo from "./PropsHijo.vue"

export default {
	data(){
		return {
			title: 'Hello world!',
			description: 'Este es un mensaje del props Padre',
		}
	},
	components: { 
		PropsHijo 
	}
}
</script>

<style></style>