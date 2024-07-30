<template>
	<div>
		<button @click="toggleAdmin">{{ isAdmin ? 'Ocualtar' : 'Mostrar' }} props</button>
		<div v-show="isAdmin">
			<h1>Aqui hay un componente hijo!</h1>
			<button @click="count++">Me has clickeado {{ count }} veces</button><br>
			<label for="Titulo">Titulo:</label>{{ title }} <br>
			<label for="Descripcion">Descripcion:</label>{{ description }} <br>
			<label for="user">User Data:</label>{{ user.name }} {{ user.age }} {{ user.alias }}
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		description: String,
		user: Object,
		admin: Boolean,
	},
	data() {
		return {
			count: 0,
			isAdmin: this.admin,
		}
	},
	methods: {
		toggleAdmin() {
			this.isAdmin = !this.isAdmin;
		}
	}
}
</script>

<style></style>