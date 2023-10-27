<template>
    <h1>Project: {{ projectId }}</h1>
</template>

<script lang="ts" setup>
const route = useRoute()
const projectId = ref()
projectId.value = route.params.id
</script>

<style scoped>
</style>