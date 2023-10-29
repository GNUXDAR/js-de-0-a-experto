<template>
    <h1>Index</h1>
    <h2>Title {{ note.title }}</h2>
    <h2>Content {{ note.content }}</h2>
</template>

<script lang="ts" setup>
import NoteService from '../services/NoteService'
import { onMounted, ref } from 'vue';

const note = ref({
    title: 'loading...',
    content: 'loading...' 
})
const noteService = new NoteService()

onMounted(async () => {
    note.value = await noteService.GetNotes()
})
</script>

<style scoped>
</style>