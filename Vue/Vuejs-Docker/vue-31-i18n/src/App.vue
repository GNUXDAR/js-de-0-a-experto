<template>
  <h1>i18n plugin</h1>
  <MenuComponent />
  <h2>{{ $t("message.hello", {name: username, surname: surname}) }}</h2>
  <p>{{ $t("message") }}</p>

  <p>{{ $t("message.products", {count: 8}) }}</p>
  <p>{{ $t("message.comments", 8) }}</p>
</template>

<script lang="ts" setup>
import MenuComponent from '@/components/MenuComponent.vue'
import { ref } from 'vue'

const username = ref('Arturo')
const surname = ref('Cabrera')
</script>

<style scoped>
</style>