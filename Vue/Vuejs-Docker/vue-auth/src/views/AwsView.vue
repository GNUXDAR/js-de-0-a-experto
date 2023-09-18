<template>
    <h1>Auth View with AWS</h1>
    <authenticator>
        <template v-slot="{user, signOut}">
            <div>
                <h1>Hello {{  user.username, user.email }}</h1>
                <button @click="signOut"></button>
                
            </div>
        </template>
    </authenticator>
</template>

<script lang="ts" setup>
import { Authenticator } from '@aws-amplify/ui-vue';
import '@aws-amplify/ui-vue/styles.css'

</script>

<style>
</style>