<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">

        <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>

        <RouterLink to="/" class="link">Volver Atras</RouterLink>
    </div>
</template>

<script lang="ts" setup>
import PostService from '@/services/PostService'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const postService = new PostService()
const post = postService.getPost()

onMounted(async () => {
    const route = useRoute()
    const elm = route.params.id
    await postService.fetchById(elm)
})
</script>
