const app = new Vue({					//instancia
	el: "#app", 			//parametro
	data: {					//modelo
		titulo: "Aprendiendo VueJs",
		nuevaTarea: '',		//propiedades del modelo
		tareas: [],
		tareas2: [
			{nombre: 'Aprender js', tiempo: 3},
			{nombre: 'Aprender vue', tiempo: 6},
			{nombre: 'vuejar', tiempo: 10},
			{nombre: 'campping', tiempo: 15},
			{nombre: 'motero', tiempo: 20},
			{nombre: 'trabajar', tiempo: 5},
			{nombre: 'Estudiar', tiempo: 50},
		],
		enlace: "https://arturocabrera.com",	//atributos dinamicos

		baseUrl: "https://placekitten.com",
		ancho: 50,
		alto: 50,
		porAncho: 3,
		porAlto: 3,
		usuario: {
			username: 'gnuxdar',
			role: 'root',
		},
		tiempo: 0,
		busqueda: '',
	},
	computed: {				//propiedadas computadas, trabajan con valores del modelo
							//y retorna un valor compuesto (siempre retornan algo)
		urlCompleta(){
			return `${this.baseUrl}/${this.ancho*this.porAncho}/${this.alto*this.porAlto}`;
		},
		//filtrar tareas2
		filtroTareas2(){
			//this.tareas2 es la propiedad del modelo data
			//tarea.tiempo es la propiedad tiempo de cada una de las tareas
			//this.tiempo es la propiedad del modelo data
			//filter es un metodo que crea un nuevo array con los elementos que pasan el test
			//includes es un metodo que determina si cierto valor se incluye en una propiedad de una matriz
			//this.busqueda es la propiedad del modelo data
			return this.tareas2.filter(tarea => {
				return this.tiempo >= tarea.tiempo && tarea.nombre.includes(this.busqueda);
			})
		}
	},
	methods: {				//metodo(la logica)
		guardarTarea(){
			this.tareas.push(this.nuevaTarea);	//agregar nuevaTarea a tareas
			this.nuevaTarea = '';				//limpia al input
		}
	}
});
//Vue.conf.devtools = true;
