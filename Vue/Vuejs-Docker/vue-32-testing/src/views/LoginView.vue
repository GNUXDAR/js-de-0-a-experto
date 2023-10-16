<template>
    <h1>Login</h1>
    <input type="text" placeholder="email" v-model="email" id="email"> <br>
    <input type="password" placeholder="password" v-model="password" id="password"> <br>
    <button @click="login()">Login</button>
    <div v-if="!error">
        <code>wrong email or password</code>
    </div>
    
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    import { useAuth } from '@/store/useAuth';
    import router from '@/router';

    const store = useAuth()
    const email = ref('')
    const password = ref('')
    const error = ref(true)

    const login = () => {
        store.value =  store.login(email.value, password.value)
        if(store.is_auth) {
            router.push('/')
        }
    }

</script>

<style scoped>
</style>