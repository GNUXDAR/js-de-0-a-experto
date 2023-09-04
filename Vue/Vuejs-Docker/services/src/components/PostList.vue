<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Los servicios se utilizan para separar la logica de la vista, para mantener un codigo limpio y mantenible
    </p>

    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <a href="">{{ post.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import PostService from '@/services/PostService'

export default defineComponent({
  name: 'PostList',  
  setup() {
    const service = new PostService()
    const posts = service.getPosts()

    onMounted(async ()=> {
      await service.fetchAll()
    })

    return { posts }
  },
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
