const app = new Vue({					//instancia
	el: "#app", 			//parametro
	data() {
		return {
			name: 'Bitcoin',
			img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
			changePercent: 10,
			prices: [15000, 2500, 1225, 3200, 4500, 6000, 8000],
			pricesWithDays : [
				{ day: 'Lunes', value: 8400},
				{ day: 'Martes', value: 5400},
				{ day: 'Miercoles', value: 3300},
				{ day: 'Jueves', value: 9000},
				{ day: 'Viernes', value: 7600},
				{ day: 'Sabado', value: 8400},
				{ day: 'Domingo', value: 10000},
			]
		}
	},
});
