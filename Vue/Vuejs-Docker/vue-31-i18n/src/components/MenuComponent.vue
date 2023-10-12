<template>
    <div>
        <select name="" id="" v-model="$i18n.locale">
            <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
        </select>
    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
</style>