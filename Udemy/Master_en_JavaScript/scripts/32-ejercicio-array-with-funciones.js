'use strict'

/*
	1. pida 6 numeros por pantalla
	2. mostra el array entero (todos sus elementos) en el body y consola
	3. ordenar y mostrarlo
	4. invertir su orden y mostrarlo
	5. mostrar cuantos elementos tiene su array
	5. busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y si su indice
	(uso de funciones)
*/
function mostrarArray(elementos, texto=''){
	document.write('<h1>Contenido del array '+texto+'</h1>');
	document.write('<ul>');
	elementos.forEach((elemento, index)=>{
		document.write('<li>'+elemento+'<li>');
	});
	document.write('<ul>');
}

//pedir los numeros para alimentar el array
var numero = '';
var array = [];
for (var i = 0; i < 6; i++) {
	numero = prompt('Ingrese un Numero: ');
	array.push(numero);
}

//ejecutar la funcion para mostrar en pantalla 
mostrarArray(array, 'mostrar en pantalla');

//mostrar en consola
console.log(array);

//ejecutar la funcion para mostrar ordenados
array.sort();
mostrarArray(array, 'mostrar ordenados');

//invertir y mostrar
array.reverse();
mostrarArray(array, 'mostrar invertido');

//indice
var indice = array.length;
document.write('<h1>Indice del array '+array.length+'</h1>');

//buscar elemento ingresado por el usuario
var buscar = parseInt(prompt('Buscar numero',0));
var posicion = array.findIndex(numero => numero == buscar);

if (posicion && posicion != -1) {
	document.write('<hr><h1>Encontrado '+buscar+'</h1>');
	document.write('<h1>posicion de la busqueda '+posicion+'</h1><hr>');	
}else{
	document.write('<hr><h1>No Encontrado '+buscar+'</h1>');
}
