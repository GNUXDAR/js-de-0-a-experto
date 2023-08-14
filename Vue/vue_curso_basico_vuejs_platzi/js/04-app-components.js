		const app =
		Vue.component('coin-detail', {
			// props ""propiedad donde podemos definir cuales son las propiedadas
			//que el componente padre le va enviar componente hijo
			//props: ['changePercent', 'title', 'img', 'name', 'price'],  //una manera de pasar los elementos del padre
			props: ['coin'],

			data() {
				return {
					showPrices: true,
					value: 0,
				}
			},

			methods: {
				toggleShowPrices(){
					this.showPrices = !this.showPrices
					this.$emit('change-color', 'FF96C8')
					// $emit es una funcion del core de VUE, 
					//indicamos que nuestro componente tiene que evitir un evento cada vez que se ejecute este evento
				}
			},
			//propiedadas computadas, trabajan con valores del modelo y retorna un valor compuesto (siempre retornan algo)
			computed: {
				convertedValue() {
					if (!this.value) {
						return 0
					}

					return this.value / this.coin.price
				},

				title() {
					return `${this.coin.name} - ${this.coin.symbol}`
				}
			},

			created() {
				console.log('created CoinDetail..')
			},

			mounted() {
				console.log('mounted CoinDetail..')
			},
			// los componentes de vue necesitan tener un componen padre unico - div
			template: `
			<div>
				<img
					class="mouse"
					v-on:mouseover="toggleShowPrices"
					v-on:mouseout="toggleShowPrices"
					v-bind:src="coin.img" v-bind:alt="coin.name" width="50px;"
				>
				<h1 v-bind:class="coin.changePercent > 0 ? 'green' : 'red'">
					{{ title }}

					<p>Mostrar: {{ showPrices }}</p>

					<span v-on:click="toggleShowPrices" class="mouse">
  						{{ showPrices ? '🐵' : '🙈' }}
					</span>
				</h1>

				<input type="number" v-model="value">	<span>$</span>
				<br>
				<span>{{ convertedValue }} {{ title }}</span>

				<slot name="text"></slot>
				<slot name="link"></slot>

				<br>
				<ul v-show="showPrices"> <!-- muestra si es true -->
					<!-- aplicar v-bind: class con condicional y con objetos -->
					<li
						class="uppercase"
						v-bind:class="{ orange: d.value === coin.price, red: d.value < coin.price, green: d.value > coin.price  }"
						v-for="d in coin.pricesWithDays">
						{{ d.day }} - {{ d.value }}
					</li>
				</ul>
			</div>
			`
		})

		new Vue({					//instancia
			el: "#app",
			data() {
				return {
					head: 'Mini app creada con componentes',
					btc: {
						name: 'Bitcoin',
						symbol: 'BTC',
						img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
						changePercent: 10,
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
					},

					color: 'f4f4f4',
				}
			},

			created() {
				console.log('created..')
			},

			mounted() {
				console.log('mounted..')
			},

			methods : {
				updateColor(color){
					this.color = color || this.color
					this.color = this.color.split('').reverse().join('')
				}
			}
		});
