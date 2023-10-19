<template>
    <div>
        <h3>{{ props.title }}</h3>
        <p>{{ props.content }}</p>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps(['title', 'content'])
</script>

<style scoped>
</style>