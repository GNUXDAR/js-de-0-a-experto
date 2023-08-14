<template>
    <table>
        <thead>
            <tr class="bg-gray-100 border-b-2 border-gray-400">
                <th></th>
                <th :class="{ up: this.sortOrder === 1, down: this.sortOrder === -1 }">
                    <span
                        class = "underline cursor-pointer"
                        @click = "changeSortOrder">Ranking</span>
                </th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cap de mercado</th>
                <th>Variacion 24 hrs</th>
                <td class="hidden sm:block">
                    <!-- input de filtro, con v-model con la propiedad filter progrmada en script, con una computed -->
                    <input class="bg-gray-100 focus:outline-none border-b border-gray-400 py-2 px-4 block w-full appearance-none leading-normal" 
                    id="filter"
                    placeholder="Buscar..."
                    type="text"
                    v-model="filter"
                    >
                </td>
            </tr>
        </thead>
        <tbody>
            <tr 
                v-for="a in filteredAssets"
                v-bind:key ="a.id"
                class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
            >
                    <td>
                        <img 
                            class="w-6 h-6"
                            :src="`https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`" :alt="a.name">
                    </td>
                    <td>
                        <b>#{{ a.rank }}</b>
                    </td>
                    <td>
                        <router-link
                            class="hover:underline text-green-600"
                            :to="{ name: 'coin-detail', params: { id: a.id}}">
                            {{ a.name }}
                        </router-link>
                        <small class="ml-1 text-gray-500">
                            {{ a.symbol }}
                        </small>
                    </td>
                    <td>
                        {{ a.priceUsd | dollar}}
                    </td>
                    <td>
                        {{ a.marketCapUsd | dollar }}
                    </td>
                    <td :class="a.changePercent24Hr.includes('-') ? 'text-red-600' : 'text-gree-600'">
                        {{ a.changePercent24Hr | percent }}
                    </td>
                    <td class="hidden sm:block">
                        <art-button @custom-click = "goToCoin(a.id)">
                            <span>Detalle</span>
                        </art-button>
                    </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import ArtButton from '@/components/ArtButton'

export default {
    name: 'ArtAssetsTable',
    components: {
        ArtButton
    },
    data() {
        return {
            filter: '',
            sortOrder: 1,
        }
    },
    props: {
        assets: {
            type: Array,
            default: ()=> []
        }
    },
    computed: {
        filteredAssets() { //filtro para buscar por el symbol o por el nombre de la cryptomoneda

            const altOrder = this.sortOrder == 1 ? -1 : 1

            return this.assets.filter(
                a=> a.symbol.toLowerCase().includes(this.filter.toLowerCase()) || 
                a.name.toLowerCase().includes(this.filter.toLowerCase())
            )
            .sort((a, b) =>  {
                if(parseInt(a.rank) > parseInt(b.rank)){
                    return this.SortOrder
                }

                return altOrder
            })
        }
    },

    methods: {
       goToCoin(id) { //navegacion programatica con $router en el boton componenete ArtButton
           this.$router.push({ name: 'coin-detail', params: { id }})
       },
       changeSortOrder() {  //ordenar el ranking
            this.sortOrder = this.sortOrder === 1 ? -1 : 1
       }
    }
}
</script>

<style scoped>
.up::before {
  content: '👆';
}
.down::before {
  content: '👇';
}
td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}
th {
  padding: 5px;
  font-size: 0.6rem;
}
@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }
  th {
    padding: 12px;
  }
}
</style>