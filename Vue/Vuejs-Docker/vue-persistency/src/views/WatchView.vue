<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </div>

    <h2>Uso del Watch con "Options API"</h2>

    <input type="text" v-model="note">
</template>

<script lang="ts">
// option API
import { defineComponent } from 'vue'
export default defineComponent({
    data(){
        return {
            note: ""
        }
    },
    watch: {
        note(value, oldValue){
            alert("Antiguo valor: " + oldValue + " Valor: " + value)
            localStorage.setItem('note', value)
        }
    }
})
</script>

<style scoped>
</style>