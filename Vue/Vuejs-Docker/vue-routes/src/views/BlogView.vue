<template>
    <h1>Blog</h1>
    <ul>
        <li>
            <router-link :to="{name: 'post', params: {postid:1}}">Mi Primer Post</router-link> 
        </li>
        <li>
            <router-link :to="{name: 'post', params: {postid:2}}">Segundo Post</router-link>
        </li>
        <li>
            <router-link :to="{name: 'post', params: {postid:3}}">Tercer Post</router-link>
        </li>
        <li>
            <router-link :to="{name: 'post', params: {postid:4}}">Cuarto Post</router-link>
        </li>
    </ul>
</template>

<script lang="ts" setup>
</script>

<style scoped>
</style>
