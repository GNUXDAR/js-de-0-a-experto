<template>
    <h1>Create Note</h1>
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">My Note</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Note" v-model="note">
        </div>
    
        <button type="submit" class="btn btn-primary" @click.prevent="sendNote">Submit</button>
    </form>


    <p style="color:red">{{ feedback }}</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import useAuth from '@/store/auth';
import router from '@/router';

const store = useAuth()
const note = ref('')
const feedback = ref('')

const sendNote = async () => {
    const response = await store.createNote(note.value)
    if(response == false) {
        feedback.value = "Error al Guardar"
    } else {
        router.push({name: 'note'})
    }
}
</script>

<style>
</style>