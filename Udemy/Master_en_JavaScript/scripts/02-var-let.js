'use strict'

let mensaje = 'Este es un mensaje con una variable let';
console.log(mensaje);

//* var y let
//* prueba con var
var numero = 50;
console.log(numero); //50

if (true) {
	var numero = 100;
	console.log(numero);	//100
}

console.log(numero);	//100

//* prueba con let
/*
	con let su alcance es por bloque
*/
var texto = 'curso de js';
console.log(texto);

if (true) {
	let texto = 'master de js'; //imprime el de variable let
	console.log(texto);
}

console.log(texto); //imprime el de  var
