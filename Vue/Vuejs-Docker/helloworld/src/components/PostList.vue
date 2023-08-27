<template>
    <div class="container">
        <!-- <PostDetailVue />
        <PostDetailVue />
        <PostDetailVue />
        <PostDetailVue /> -->

        <!-- enviar dato al componente hijo "PostDetail" mediante las props title="elm.title" content="elm.content" img="mi-img.png" -->
        <!-- Comunicacion Descendiente -->
        <PostDetailVue v-for="elm in info" :key="elm.title" :title="elm.title" :content="elm.content" />
    </div>

</template>

<script lang="ts" setup>
  import PostDetailVue from './PostDetail.vue';

  interface Post {
    title: string,
    content: string
  }

  let info:Array<Post> = [
    {
        title: "Este es el post 1",
        content: "Texto de post 1"
    }, 
    {
        title: "Este es el post 2",
        content: "Texto de post 2"
    },
    {
        title: "Este es el post 3",
        content: "Texto de post 3"
    },
    {
        title: "Este es el post 4",
        content: "Texto de post 4"
    },]

</script>

<style scoped>
.container {
    display: flex;
    flex: wrap;
    justify-content: space-around;
}
</style>
