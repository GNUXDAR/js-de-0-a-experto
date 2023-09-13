<template>
    <h1>Auth View</h1>
    <div class="container">
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary mt-2">Submit</button>
            <!-- {{ email }}
            {{ password }} -->
        </form>
    </div>

</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue'

    let email:Ref = ref("")
    let password:Ref = ref("")

</script>

<style>
</style>