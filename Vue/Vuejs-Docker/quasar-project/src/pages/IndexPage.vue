<template>
  <div class="row wrap">
    <div class="yellow col-xs-12 col-sm-6 col-md-4">
      col
    </div>
    <div class="blue col-xs-12 col-sm-6 col-md-4">
      col
    </div>
    <div class="red col-xs-12 col-sm-6 col-md-4">
      col
    </div>
  </div>

  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
        :text="['hola que tal, soy Arturo C.']"
        sent
      />
      <q-chat-message
        name="Meryuris"
        avatar="https://cdn.quasar.dev/img/avatar2.jpg"
        :text="['Hola!']"
      />
        <q-chat-message
          name="me"
          avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          :text="['Soy el chico de las poesias.']"
          sent
        />
        <q-chat-message
          name="Meryuris"
          avatar="https://cdn.quasar.dev/img/avatar2.jpg"
          :text="['En serio?!']"
        />
        <q-chat-message
          name="me"
          avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          :text="['Tu fiel admirador!.']"
          sent
        />
        <q-chat-message
          name="Meryuris"
          avatar="https://cdn.quasar.dev/img/avatar2.jpg"
          :text="['Oh que hermoso!']"
        />
        <q-chat-message
          name="me"
          avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          :text="['y aunque no me conocias, hoy es noche de Sexo!!!.']"
          sent
        />
    </div>
  </div>

</template>

<script lang="ts" setup>
</script>

<style>
.yellow {
  background-color: yellow;
}

.blue {
  background-color: blue;
}

.red {
  background-color: red;
}
</style>
