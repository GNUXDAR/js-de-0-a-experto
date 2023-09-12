<template>
    <div class="post">
        <div class="card">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
        </div>
        <router-link :to="{name: 'PostList'}" class="link">Volver Atras</router-link>
    </div>
</template>

<script lang="ts" setup>
    import PostService from '@/services/PostService';
    import { onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    const service = new PostService()
    const post = service.getPost()

    onMounted(async()=>{
        const route = useRoute()
        let elm = route.params.id
        await service.fetchById(elm)
    })
</script>

<style lang="scss" scoped>
    .post {
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .card {
        padding: 25px;
        width: 750px;
        border-radius: 15px;
        border: 1px solid #ccc;
    }

    .link {
        margin-top: 25px;
        color: $primaryColor;
        text-decoration: none;
    }

    .link:hover {
        text-decoration: underline;
    }

</style>