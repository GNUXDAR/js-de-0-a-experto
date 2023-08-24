<!-- Directivas v-for -->
<template>
    <ul>
        <li v-for="(country, index) in countries" :key="index">{{ country }}</li>
    </ul>

    <ul>
        <li v-for="(code, index) in code_countries" :key="index">{{ code.code }}</li>
    </ul>

</template>

<script lang="ts" setup>

import { Ref, ref } from 'vue';

let countries:Ref<Array<string>> = ref([
    'Venezuela', 'Ecuador', 'colombia'
])

let code_countries = ref([
    {
        code: 've',
        name: 'Venezuela'
    },
    {
        code: 'ec',
        name: 'Ecuador'
    },
    {
        code: 'co',
        name: 'Colombia'
    }
])
</script>


<style scoped>
</style>