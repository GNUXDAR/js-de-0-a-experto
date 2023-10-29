<template>
  <v-expansion-panels>
    <v-expansion-panel
      title="Title"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
    >
    </v-expansion-panel>
  </v-expansion-panels>
  
  <v-container>
    <v-row>
      <v-col class="yellow">Celda 1 - 1</v-col>
      <v-col class="yellow">Celda 1 - 2</v-col>
      <v-col class="yellow">Celda 1 - 3</v-col>
    </v-row>
    <v-row>
      <v-col class="blue">Celda 2 - 1</v-col>
      <v-col class="blue">Celda 2 - 2</v-col>
    </v-row>
    <v-row>
      <v-spacer></v-spacer> <!--espaciar, o cubrir el espacio faltante-->
      <v-col class="red">Celda 3 - 1</v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
</script>

<style scoped>
  .red {
    background-color: red;
  }
  .blue {
    background-color: blue;
  }
  .yellow {
    background-color: yellow;
  }
</style>
