<template>
    <div>
        <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" /><!--componente de vue-spiner -->
        <art-assets-table v-if="!isLoading" :assets="assets" /> <!-- v-if="!isLoading" se muestra si es false -->
    </div>
</template>

<script>
import api from '@/api'
import ArtAssetsTable from '@/components/ArtAssetsTable.vue';

export default {
    name: 'Home',
    components: {
        ArtAssetsTable,
    },

    data(){
        return {
            isLoading: false,
            assets: []
        }
    },

    created() {
        this.isLoading = true
        api.getAssets()
            .then(assets => (this.assets = assets))
            .finally(() => this.isLoading = false)
    }
}
</script>