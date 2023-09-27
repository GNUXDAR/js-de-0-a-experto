<template>
    <h1>Login</h1>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="loginUser">Submit</button>
    </form>
    <RouterLink :to="{name: 'register'}">Create Account</RouterLink>

    {{ email }}
    {{ password }}

    <p style="color:red">{{ feedback }}</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import useAuth from '@/store/auth';
import router from '@/router';

const store = useAuth()
const email = ref('')
const password = ref('')
const feedback = ref('')

const loginUser = async () => {
    feedback.value = "Loging..."

    const response = await store.login(email.value, password.value)

    if(response == false){
        // error
        feedback.value = "Error en el Login"
    } else {
        // success
        router.push({name: 'note'})
    }
}
</script>

<style>
</style>