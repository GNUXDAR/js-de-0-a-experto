<template>
	<input type="checkbox" v-model="inEnable"> Activo?
	<section v-show="inEnable">
		<div class="nav-bar"></div>
		<h1>Relecloud Galaxy Tours</h1>

		<div>
			<h2>{{ cruise.name }}</h2>
			<div>{{ cruise.description }}</div>
			<hr>

			<div class="row">
				<div>
					<!-- TODO: Add booking-form -->
				</div>
				<div>
					<!-- TODO: Add booking-list -->
					<booking-list 
						:bookings="bookings" 
						@my-event="manejarEvento"
					>
					</booking-list>
					<p v-if="mensajeRecibido">Mensaje recibido: {{ mensajeRecibido }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import BookingList from './BookingList.vue';
// TODO: Register next component
export default {
	name: 'Host',
	data(){
		return {
			mensajeRecibido: null, // Para almacenar el mensaje recibido
			inEnable: true,
			cruise: {
				name: 'Crucero a la luna',
				description: 'Viaja a la luna en nuestro lujoso transporte. Observe a los astronautas trabajando fuera de la Estación Espacial Internacional.',
				cabins: [
					{ name: 'Coach', price: 125000 },
					{ name: 'Business', price: 275000 },
					{ name: 'First', price: 430000 },
				]
			},
			bookings: [
				{ name: 'Sample', price: 0 },
				{ name: 'Sample2', price: 10 },
				{ name: 'Sample3', price: 20 }
			]
		}
	},
	methods: {
		manejarEvento(message){
			this.mensajeRecibido = message; //almacenar mensaje recibido
		}
	},
	components: {
		BookingList,
		// TODO: Add next component
	},
}
</script>

<style scoped>
	body {
		background-color: #f2f2f2;
		margin: 0, 5%;
		font-family: tahoma;
	}

	.row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		vertical-align: middle;
		margin: 2em;
	}

	.button {
		background-color: #39495c;
		border-radius: 5px;
		color: white;
		text-align: center;
	}

	.nav-bar {
		background: linear-gradient(-50deg, #010801, #0d0d60);
		height: 60px;
		margin-bottom: 25px;
	}

</style>