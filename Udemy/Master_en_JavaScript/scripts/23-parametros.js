'use strict'

/*
	parametros REST y SPREAD
*/

function listaDeFrutas(fruta1, fruta2, ...resto){ //REST
	console.log('Fruta1 ', fruta1);
	console.log('Fruta2 ', fruta2);
	console.log(resto);
}

//listaDeFrutas('naranja', 'manzana', 'papaya', 'durazno');

var frutas = ['limon', 'coco'];
//listaDeFrutas(frutas, 'naranja', 'manzana', 'papaya', 'durazno');
listaDeFrutas(...frutas, 'naranja', 'manzana', 'papaya', 'durazno'); //SPREAD