<template>
	<h3>
		<span>Mis Panales > {{ name }}</span>
	</h3>
	<input type="text" placeholder="Agregar una lista" v-model="listName" @keyup.enter="add()">

	<div class="coantainer">
		<column-card v-for="(list, index) in boardList" :key="index" :listId="list.id" :name="list.name"></column-card>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import ColumnCard from '../components/ColumnCard.vue'

export default {
	data() {
		return {
			listName: '',
		}
	},
	props: {
		id: String,
		name: String,
	},
	methods: {
		...mapActions([
			'addColumn',
			'fetchLists'
		]),
		add() {
			this.addColumn({ board: this.id, name: this.listName })
			this.listName = ''
		}
	},
	created() {
		this.fetchLists({ board: this.id })
	},
	computed: {
		...mapState([
			'fetchingData',
			'error'
		]),
		...mapGetters([
			'getListsByBoard'
		]),
		boardLists() {
			return this.getListsByBoard(this.id)
		}
	},
	components: {
		ColumnCard,
	}
}
</script>

<style scoped>
section {
	text-align: left;
}

h3 {
	color: #37474F;
	text-align: left;
	margin: 1.5rem;
}

span {
	color: #546E7A;
}

input {
	background-color: #607D8B;
	border: 0;
	border-radius: 3px;
	box-shadow: 0 0 0 0.5px rgba(49, 49, 93, .03),
		0 2px 5px 0 rgba(49, 49, 93, .1),
		0 1px 2px 0 rgba(0, 0, 0, .08);
	color: #607D8D;
	font-size: 1.2rem;
	margin: 0 1rem;
	outline: 0;
	padding: 1rem;
	transition: all 600ms ease;
}

input:focus,
input:active {
	background-color: #FAFAFA;
}
</style>