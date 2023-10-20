<template>
    <div>
        <h3>{{ props.title }}</h3>
        <p>{{ props.content }}</p>
        <button @Click="clickMe">Click me</button>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps(['title', 'content'])
const emit = defineEmits(['clickMe'])
const clickMe = () => {
    emit('clickMe', 1)
}
</script>

<style scoped>
</style>