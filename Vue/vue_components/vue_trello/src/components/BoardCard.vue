<template>
	<router-link class="board-card" :to="{ name: 'board', params: { name, id } }">
		<span class="board-card-title">{{ name }}</span>
	</router-link>

</template>

<script>
export default {
	props: {
		id: String,
		name: String,
	}
}
</script>

<style scoped>
.board-card {
	background-color: #546E7A;
	box-shadow: 0 0 0 0.5px rgba(49, 49, 93, .03),
		0 2px 5px 0 rgba(49, 49, 93, .1),
		0 1px 2px 0 rgba(0, 0, 0, .08);
	box-sizing: border-box;
	border-radius: 5px;
	color: #FAFAFA;
	margin: 0.5rem, 1.5rem;
	padding: 1rem;
	text-align: left;
	text-decoration: none;
	transition: all 600ms ease;
	width: 100%;
	height: 100px;
}

.board-card-title {
	font-size: 1.2rem;
}

.board-card-title:hover {
	background-color: #90A4AE;
	font-weight: bold;
}

@media screen and (min-witdh: 600px) {
	width: 33%;
}

@media screen and (min-witdh: 1024) {
	width: 250px;
}
</style>