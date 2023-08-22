<template>
    <div class="post-card">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias a aliquid rem dolorem perspiciatis aut. Quae eveniet explicabo officiis sint ratione consequuntur distinctio nihil, at aspernatur in possimus ipsa corrupti!</p>
        <PostButton />
    </div>
</template>

<script lang="ts" setup>
    import PostButton from './PostButton.vue';
</script>

<style scoped>
.post-card {
    width: 100%;
    border-radius: 15px;
    padding: 10px;
    border: 1px solid #ccc;
}
</style>