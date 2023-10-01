<template>
  <div class="about">
    <h1>Transitions</h1>
    <p>
      Trabajar con transiciones nativas de <a href="https://vuejs.org/" target="_blank">vue</a> 
    </p>

    <h2>Icons</h2>
    <p>
      Trabajando con <a href="https://oh-vue-icons.js.org/docs" target="_blank">vue-icons</a> 
    </p>

    <code>npm install oh-vue-icons</code>

    <p>main.ts</p>
    <code style="color: red;">
      import { createApp } from 'vue' <br>
      import App from './App.vue' <br>
      import router from './router' <br>

      import { OhVueIcon, addIcons } from "oh-vue-icons"; <br>
      import { BiFileEarmarkCodeFill } from "oh-vue-icons/icons"; <br>  <!--paquete de icons de boostrap-->

      addIcons(BiFileEarmarkCodeFill); <br>

      const app = createApp(App) <br>
      app.component("v-icon", OhVueIcon); <br>
      app.use(router).mount('#app') <br>
    </code>
  </div>
</template>
