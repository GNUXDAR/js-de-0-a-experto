<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Welcome to Your Vue.js + TypeScript App</h1>

    <h1>Post List</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="{ name:'detail', params:{ id:post.id } }">{{ post.title }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import PostService from '@/services/PostService'
import { onMounted } from 'vue'

const postService = new PostService()
const posts = postService.getPosts()

onMounted(async () => {
  await postService.fetchAll()
})
</script>
