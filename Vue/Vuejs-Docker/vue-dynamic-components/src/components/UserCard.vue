<template>
    <div class="card">
        <h3>{{  props.content.name }}</h3>
        <p>Edad: {{ props.content.age }}</p>
        <p>Position: {{ props.content.position }}</p>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps(['content'])
</script>

<style scoped>
.card {
    color: #fff;
    background-color: #34495E;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin: 10px;
    width: 350px;
}
</style>