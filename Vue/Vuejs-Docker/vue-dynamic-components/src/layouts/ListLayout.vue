<template>
    <h1>List</h1>
    <div class="container">
        <UserList v-for="item in props.content" :key="item.name" :content="item" />
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import UserList from '@/components/UserList.vue';

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