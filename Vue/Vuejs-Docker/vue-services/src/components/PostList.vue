<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Los servicios se utilizan para separar la logica de la vista, para mantener un codigo limpio y mantenible
    </p>

    <ul class="posts">
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
<style scoped lang="scss">
$color: #34495E;
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
  // color: #42b983;
  color: $color;
}

.posts {
  width: 95vw;
  height: 75px;
  padding: 20px;
  list-style-type: none;
}

.posts li {
  padding: 10px;
  width: 100%;
}
</style>
