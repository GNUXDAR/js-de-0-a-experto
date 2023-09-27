<template>
    <h1>Register</h1>
    <form>
        <div class="form-group">
            <label for="exampleInputName">User Name</label>
            <input type="email" class="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter User Name" v-model="name">
        </div>
        <div class="form-group">
            <label for="exampleInputEmail">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword" placeholder="Password" v-model="password">
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="createUSer">Submit</button>
        <RouterLink :to="{name: 'login'}"></RouterLink>

        <p style="color:red">{{ feedback }}</p>
    </form>
    {{ name }}
    {{ email }}
    {{ password }}
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import useAuth from '@/store/auth';
import router from '@/router';

const store = useAuth()
const name = ref('')
const email = ref('')
const password = ref('')
const feedback = ref('')

const createUSer = async () => {
    feedback.value = "Sending..."
    const response = await store.register(name.value, email.value, password.value)

    if(response == false){
        // error
        feedback.value = "Error en el registro"
    } else {
        // success
        router.push({name: 'note'})
    }
}
</script>

<style>
</style>