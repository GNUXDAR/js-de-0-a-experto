const app = new Vue({					//instancia
	el: "#app", 			//parametro
	data: {
		baseUrl: "https://placekitten.com",
		ancho: 50,
		alto: 50,
	},
	computed: {				//propiedadas computadas, trabajan con valores del modelo
							//y retorna un valor compuesto (siempre retornan algo)
		urlCompleta(){
			return `${this.baseUrl}/${this.ancho*3}/${this.alto*3}`;
		}
	}
});
Vue.conf.devtools = true;
