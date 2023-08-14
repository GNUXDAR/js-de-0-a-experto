<template>
    <button
        @click="buttonClick"
        class="bg-transparente hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 border border-gree-500 hover:border-transparent rounded">
        
        <beat-loader :loading = "isLoading" :color = "'#68d391'" :size="8" />  <!-- disponible de la libreria vue-spiner -->
        <span v-show = "!isLoading">
            <slot ></slot>
        </span>
    </button>
</template>

<script>
export default {
    name: 'ArtButton',
    props: {
        isLoading: {
            type: Boolean,
            default:false
        }
    },
    methods: {
        buttonClick() {
            this.$emit('custom-click')
        }
    }
}
</script>