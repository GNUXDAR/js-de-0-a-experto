<template>
	<props-hijo :title="title" :description="description" :user="user" :admin="true"></props-hijo>
</template>

<script>
import PropsHijo from "./PropsHijo.vue"

export default {
	data(){
		return {
			title: 'Hello world!',
			description: 'Este es un mensaje del props Padre',
			user: {
				name: 'Arturo',
				age: 34,
				alias: '@gnuxdar',
			},
		}
	},
	components: { 
		PropsHijo 
	}
}
</script>

<style></style>