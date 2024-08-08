<template>
	<header>
		<span class="title">Vue Trello</span>
		<router-link class="btn-header" to="/">Mis Paneles</router-link>
	</header>
</template>

<script>
export default {
	data() {
		return {

		}
	}
}
</script>

<style scoped>
header {
	box-sizing: border-box;
	background-color: #607d8b;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	margin: 0;
	padding: 1rem;

	.title {
		align-self: center;
		color: #eceff1;
		font-size: 1.2rem;
		font-weight: bold;
		margin-right: 1rem;
	}
}

.btn-header {
	background-color: #455A64;
	border: none;
	border-radius: 3px;
	box-shadow: 0 0 0 0.5px rgba(49, 49, 93, .03),
		0 2px 5px 0 rgba(49, 49, 93, .1),
		0 1px 2px 0 rgba(0, 0, 0, .08);
	color: #b0bec5;
	cursor: pointer;
	text-decoration: none;
	padding: 0.5rem;
	margin: 0 0.5rem;
}
</style>