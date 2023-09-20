<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Counter</h3>
    <h3>{{ counter }} x2 = {{ times2 }}</h3>
    <button @click="increment">Increment</button>
  </div>
</template>

<script lang="ts">
// composition API
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex'

export default defineComponent({
  name: 'HelloWorld',
    props: {
      msg: String,
    },
  setup() {
    const store = useStore()
    const counter = computed(() => store.state.counter)
    const times2 = computed(()  => store.getters.times2)
    // para hacer una modificacion lo hacemos con el metodo commit
    const increment = () => store.commit('setCounter', counter.value +1)
    return { counter, times2, increment}
  }
})

// ------------------------------------------------------
// uso del mapeo
// import { defineComponent } from 'vue';
// import { mapMutations, mapState, mapGetters } from 'vuex'

// export default defineComponent({
//   name: 'HelloWorld',
//   props: {
//     msg: String,
//   },
//   computed: {
//     ...mapState(['counter']),
//     ...mapGetters(['times2'])
//   },
//   methods: {
//     ...mapMutations(['setCounter']),
//     increment() {
//       this.setCounter(this.counter + 1)
//     }
//   },
// });

// ------------------------------------------------------
// uso del $store
// import { defineComponent } from 'vue';

// export default defineComponent({
//   name: 'HelloWorld',
//   props: {
//     msg: String,
//   },
//   computed: {
//     counter():number {
//       // read the counter from store
//       return this.$store.state.counter
//     },
//     times2():number {
//       // read the times2 from store
//       return this.$store.getters.times2
//     }
//   },
//   methods: {
//     increment() {
//       // call the setCounter mutation from store
//       
//       this.$store.commit('setCounter', this.counter + 1)
//     }
//   },
// });
// Importé defineComponent de Vue correctamente.
// Usé this.$store.state.counter para acceder al estado counter del store.
// Usé this.$store.getters.times2 para acceder al getter times2 del store.
// En el método increment, llamé a la mutación setCounter del store usando this.$store.commit.
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
