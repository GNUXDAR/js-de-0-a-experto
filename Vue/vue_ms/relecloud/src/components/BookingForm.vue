<template>
	<section>
		<h2>Book Now!</h2>
		<form>
			<div class="row">
				<label for="cruise-cabin">Select Class:</label>
				<select id="cruise-cabin" v-model="cabinIndex">
					<option disabled value="-1">Selecciona una Cabina</option>
					<option v-for="(cabin, index) in cabins" :value="index" :key="index">
						{{ cabin.name }} $ {{ cabin.price.toLocaleString('es-ES') }}
					</option>
				</select>
			</div>
			<div class="row">
				<button class="button" type="button" @click="bookCabin">Reservar ahora!</button>
			</div>
		</form>
	</section>
</template>

<script>
export default {
	props: {
		cabins: Array,
	},
	emits: ['bookingCreate'],
	data(){
		return {
			cabinIndex: -1
		}
	},
	methods: {
		bookCabin() {
			if(this.cabinIndex < 0) return;
			this.$emit('bookingCreated', this.cabinIndex);
			this.cabinIndex = -1;
		},
	},

}
</script>

<style>

</style>