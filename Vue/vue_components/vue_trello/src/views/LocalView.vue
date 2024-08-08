<template>
	<div>
		<h3>Mis Paneles</h3>
		<div class="boards-collection">
			<span v-if="fetchingData">Cargando...</span>
			<input type="text" placeholder="Añade un nuevo panel" v-model="boardName" @keyup.enter="add()">
			<board-card v-for="(board, index) in boards" :key="index" :name="board.name" :id="board.id"></board-card>
		</div>
	</div>
	<h1>Home</h1>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BoardCard from '../components/BoardCard.vue'

export default {
	data() {
		return {
			boardName: '',
		}
	},
	computed: {
		...mapState([
			'boards',
			'fetchingData',
			'error'
		])
	},
	methods: {
		...mapActions([
			'fetchBoards',
			'addBoard'
		]),
		add() {
			this.addBoard({ name: this.boardName })
			this.boardName = ''
		}
	},
	created() {
		this.fetchBoards({ user: 1 })
	},
	components: {
		BoardCard,
	}
}
</script>

<style scoped>
h3 {
	text-align: flex;
	margin: 1.5rem;
}

.boards-collection {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	padding-top: 1rem;
}

input {
	box-sizing: border-box;
	background-color: #546E74;
	border: 2px solid #546E74;
	border-radius: 3px;
	font-size: 1.1rem;
	outline: 0;
	padding: 0.5rem;
	transition: all 600ms ease;
}

input:focus,
input:active {
	background-color: white;
	color: #546E74;
}
</style>