<template>
    <RouterLink :to="{name: 'create'}">Create New Note</RouterLink>
    <br>
    <a @click.prevent="logout" class="btn btn-danger">Logout</a>
    <table class="table" v-if="notes">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nota</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="note in notes" :key="note.id">
          <th scope="row">{{ note.id }}</th>
          <td>{{ note.content }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>No hay Datos</p>
</template>

<script lang="ts" setup>
import { ref, Ref, onMounted } from 'vue'
import useAuth from '@/store/auth';
import router from '@/router';
import InterfaceNote from '@/interfaces/InterfaceNote';

const store = useAuth()
const notes:Ref<Array<InterfaceNote>> = ref([])

onMounted(async () => {
    notes.value = await store.getNotes()
})

const logout = () => {
    store.logout()
    router.push({name: 'login'})
}
</script>

<style>
</style>