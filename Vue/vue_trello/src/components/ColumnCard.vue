<template>
	<section>
		<header>
			<h3>{{ name }}</h3>
		</header>
		<task-list :listId="listId" :tasks="taskList"></task-list>
	</section>
</template>

<script>
import TaskList from './TaskList.vue'

export default {
	data() {
		return {
			taskList: [
				{ id: 1, title: 'Aprender Vue', completed: false },
				{ id: 2, title: 'Aprender Vuex', completed: false },
			]
		}
	},
	props: {
		listId: String,
		name: String,
	},
	components: {
		TaskList,
	}
}
</script>

<style scoped>
section {
	box-sizing: border-box;
	background-color: ECEFF1;
	border-radius: 3px;
	box-shadow: 0 0 0 0.5px rgba(49, 49, 93, .03),
		0 2px 5px 0 rgba(49, 49, 93, .1),
		0 1px 2px 0 rgba(0, 0, 0, .08);
	margin: 1rem;
	padding: 1rem;
	width: 100%;
}

header {
	color: #37474F;
	margin: 0;
	padding-bottom: 1rem;
}

h3 {
	margin: 0;
}

@media screen and (min-witdh: 600px) {
	width: calc(50% - 2rem - 2px);
}

@media screen and (min-witdh: 1024) {
	width: calc(33% - 2rem - 2px);
}


@media screen and (min-witdh: 1200) {
	width: calc(25% - 2rem - 2px);
}
</style>