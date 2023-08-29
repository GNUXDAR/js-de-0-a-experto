<!-- example -->
<template>
    <div>
        <label for="">SubTotal</label>
        <input type="number" v-model="subTotal">
        <h3>Total de impuestos a pagar: {{ totalVat }} ({{ vat }}%)</h3>
    </div>
</template>

<script lang="ts" setup>
import { Ref, ref, computed} from 'vue'

    const vat = 21
    let subTotal:Ref<number> = ref(0)
    const totalVat:Ref<number> = computed(() => 
        (vat*subTotal.value) / 100
    )

    /* 
        1000---------subtotal
        21-----------x

        x = (21 * subtotal) / 100
    */

</script>

<style scoped>
</style>
