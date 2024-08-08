<template>
	<ul>
		<li v-for="(task, index) in tasks" 
			:key="index" 
			class="{completed: task.completed}"
			@click="markAsCompleted({ task })" 
			@dblclick="deleteTask({ taskId: task.id })">
			{{ task.title }}
		</li>
		<input type="text" placeholder="Agregar nueva tarea" v-model="title" @keyup.enter="add()">
	</ul>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	data() {
		return {
			title: '',
		}

	},
	props: {
		listId: String,
		tasks: Array
	},
	methods: {
		...mapActions([
			'addTask',
			'markAsCompleted',
			'deleteTask'
		]),
		add() {
			this.addTask({ list: this.listId, title: this.title })
			this.title = ''
		}
	}

}
</script>

<style scoped>
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

li {
	background-color: #FAFAFA;
	border-radius: 3px;
	border-bottom: 1px solid #CCC;
	margin: 0.25rem;
	padding: rem;
}

li.completed {
	background-color: #CFD8DC;
	color: 90A4AE;
}

input {
	box-sizing: border-box;
	background-color: #ECEFF1;
	border: none;
	border-radius: 3px;
	color: #607D8D;
	font-size: 1rem;
	margin: 0 1rem;
	outline: 0;
	padding: 1rem;
	transition: background-color 600ms ease;
	width: 100%;
}

input:focus,
input:active {
	background-color: #FAFAFA;
}
</style>