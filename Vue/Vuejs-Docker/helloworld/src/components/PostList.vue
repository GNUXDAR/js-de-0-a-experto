<template>
    <div class="container">
        <PostDetailVue />
        <PostDetailVue />
        <PostDetailVue />
        <PostDetailVue />
    </div>

</template>

<script lang="ts" setup>
  import PostDetailVue from './PostDetail.vue';

</script>

<style scoped>
.container {
    display: flex;
    flex: wrap;
    justify-content: space-around;
}
</style>
