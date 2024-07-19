const App = Vue.createApp({
	data() {
		return {
			title: 'Ir a arturocabrera.com',
			imageSource: 'img/default-banner.png',
			imageDescription: 'Banner por default del sitio arturocabrera.com',
			imageStyle: {
				'border-radius':'10px',
				width: '40%'
			},
			classObject: {
				centered: true,
				active: false,
			},
			styleObject: {
				'background-color': '#33a0ff',
				color: '#fff',
			},
		};
	},
});
