<template>
    <h2>Transition group</h2>

    <input type="text" v-model="note">
    <button @click="handleNote">Save Note</button>

    <transition-group name="list" tag="ol">
        <p>
            <v-icon name="bi-file-code" />mostrando con icon
        </p> 
        <li v-for="note in notes" :key="note">
            <v-icon name="pi-pikachu" scale="2" color="green" animation="wrench" hover="true" />{{ note }}
        </li>
    </transition-group>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'

    const notes = ref([])
    const note = ref('')

    const handleNote = () => {
        notes.value.push(note.value)
        note.value = ''
}
</script>

<style lang="scss" scoped>
    .list-enter-active,
    .list-leave-active {
        transition: all 0.5s ease;
    }

    .list-enter-from,
    .list-leave-to {
        opacity: 0;
        transform: translateX(1000px);
    }
</style>