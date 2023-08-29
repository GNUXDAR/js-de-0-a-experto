<template>
    <div>
        <!-- revertir el texto que pasemos -->
        <input type="text" v-model="message">
        <br>
        <code>Revertir el texto que se escriba aca, mediante una propiedad computada</code>
        <h3>{{ reverse }}</h3>
    </div>
</template>

<script lang="ts">
// options API
// import { defineComponent } from 'vue';

// export default defineComponent({
//     name:'ComputedExample',
//     data() {
//         return {
//             message: ''
//         }
//     },
//     computed: {
//         reverse: function () {
//             return this.message.split('').reverse().join('')
//         }
//     },
// })

// Composition APi

    import { defineComponent, Ref, ref, computed } from 'vue';

    export default defineComponent({
        name: 'ComputedExample',
        setup() {
            let message:Ref<string> = ref('aa')
            const reverse = computed(()=> message.value.split('').reverse().join(''))
            return { message, reverse }
        }

    })

</script>

<style scoped>
</style>
