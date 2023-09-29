<template>
    <h1>Cards</h1>
    <div class="container">
        <UserCard v-for="item in props.content" :key="item.name" :content="item" />
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import UserCard from '@/components/UserCard.vue';

// "content", es el listado de usuarios
const props = defineProps(['content'])
</script>

<style scoped>
.container {
    background-color: #41B883;
    width: 100vw;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
}
</style>