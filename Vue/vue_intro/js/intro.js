const app = new Vue({					//instancia
	el: "#app", 			//parametro
	data: {					//modelo
		nuevaTarea: '',		//propiedades del modelo
		tareas: [],
	},
	computed: {				//propiedadas computadas, trabajan con valores del modelo
							//y retorna un valor compuesto (siempre retornan algo)
		urlCompleta(){
			return `${this.baseUrl}/${this.ancho*3}/${this.alto*3}`;
		}
	},
	methods: {				//metodo(la logica)
		guardarTarea(){
			this.tareas.push(this.nuevaTarea);	//agregar nuevaTarea a tareas
			this.nuevaTarea = '';				//limpia al input
		}
	}
});
Vue.conf.devtools = true;
