<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Los servicios se utilizan para separar la logica de la vista, para mantener un codigo limpio y mantenible
    </p>
    <p>
      <a href="https://arturocabrera.com">
        <button class="btn btn-success">
          Boton con Bootstrap
        </button>
      </a>
    </p>

    <h2>Listado de Post</h2>
    <ul class="posts">
      <li v-for="(post, index) in posts" :key="index">
        <router-link :to="{name: 'PostDetail', params: {id:post.id}}">
          <a href="">{{ post.title }}</a>
        </router-link>
        
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

.posts {
  width: 95vw;
  height: 75px;
  padding: 20px;
  list-style-type: none;

  li {
    padding: 10px;
    width: 100%;

    a {
      text-decoration: none;
      color: $primaryColor;
      cursor: pointer;

      &:hover {
        color: #fff; // Cambia el color del texto a blanco al hacer hover en el enlace
      }
    }

    &:hover {
      background-color: $primaryColor;
    }

    &:hover a {
      color: #fff; // Cambia el color del texto a blanco al hacer hover en el <li>
    }
  }
}



</style>
