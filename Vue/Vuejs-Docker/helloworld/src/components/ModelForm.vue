<!-- Directivas v-model -->
<template>
    <form action="">
        v-model con "input"  <input type="text" v-model="inputText">
        <br>
        v-model con "checkbox"  <input type="checkbox" v-model="agree">
        <br>
        v-model con "select"    
        <select name="" id="" v-model="country">
            <option value="venezuela">Venezuela</option>
            <option value="ecuador">Ecuador</option>
            <option value="colombia">Colombia</option>
        </select>

    </form>
    <h4>{{ inputText }}</h4>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue'
    let inputText:Ref<string> = ref('')
    let agree = ref(true)
    let country = ref('venezuela')
</script>

<style scoped>
</style>