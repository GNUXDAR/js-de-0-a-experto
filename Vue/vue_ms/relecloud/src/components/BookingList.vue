<template>
	<section>
		<h2>Aqui sus reservas actuales:</h2>
	</section>
	<div class="row" v-for="(booking, index) in bookings" :key="index">
		<div>{{ booking.name }} -> $ {{ booking.price }} </div>
	</div>

	<h3 class="row">
		Total: {{ totalDisplay }}
	</h3>

	<button @click="emitirEvento">Enviar mensaje</button>
</template>

<script>
export default {
	props: {
		bookings: Array
	},
	computed: {
		totalDisplay() {
			let totalCost = 0;
			if(this.bookings && this.bookings.length > 0) {
				totalCost = this.bookings.map(b => b.price).reduce((a, b) => a + b);
			}

			return '$ '+ totalCost.toLocaleString('es-ES');
		}
	},
	methods: {
		emitirEvento() {
			const message = 'Hola desde el hijo'; //datos que queremos enviar
			this.$emit('my-event', message); //emitir el evento con los datos
		}
	},
}
</script>

<style>

</style>