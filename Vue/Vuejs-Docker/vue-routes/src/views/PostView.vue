<template>
    <h1>Post</h1>
    <p>Este es el post Numero {{ postId }}</p>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

let postId = ref('')

onMounted(() => {
    const route = useRoute()
    postId.value = route.params.postid
})
</script>

<style scoped>
</style>
