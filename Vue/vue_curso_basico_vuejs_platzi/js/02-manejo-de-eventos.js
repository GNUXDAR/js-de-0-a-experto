const app = new Vue({					//instancia
    el: "#app",
    data() {
        return {
            name: 'Bitcoin',
            symbol: 'BTC',
            img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
            changePercent: 10,
            value: 0,
            color: 'f4f4f4',
            price: 8400,
            pricesWithDays : [
                { day: 'Lunes', value: 8400},
                { day: 'Martes', value: 5400},
                { day: 'Miercoles', value: 3300},
                { day: 'Jueves', value: 9000},
                { day: 'Viernes', value: 7600},
                { day: 'Sabado', value: 8400},
                { day: 'Domingo', value: 10000},
            ],
            showPrices: true,
        }
    },
    //propiedadas computadas, trabajan con valores del modelo y retorna un valor compuesto (funciones que siempre retornan algo)
    computed: {
        title() {
            return `${this.name} - ${this.symbol}`
        },

        convertedValue() {
            if (!this.value) {
                return 0
            }

            return this.value / this.price
        },
    },
    // ejecutan un codigo, los nombre de las funciones deben corresponder con el nombre de un propiedad de data, recibe dos valores, el valor nuevo y un valor viejo
    watch: {
        showPrices(newVal, oldVal) {
            console.log(newVal, oldVal)
        }
    },
    methods : {
        toggleShowPrices(){
            this.showPrices = !this.showPrices
            this.color = this.color.split('').reverse().join('')
        }
    }
});