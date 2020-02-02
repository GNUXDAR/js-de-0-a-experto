'use strict'

/* 
	arrays multidimensionales
	soa arrays dentro de otros
*/

var category = ['Accion', 'Anime', 'Amor'];
var films = ['Ironman', 'Naruto', 'En busca de la felicidad'];
var cine = [category, films]; //una array de arrays

console.log(cine);
console.log(cine[0][1]);//accediendo al primer array
console.log(cine[1][1]);//accediendo al segundo array

//agregar elementos a aun array
films.push('Red social');
console.log(films);

//interaccion con arrays
var elemento = "";

do {
	elemento = prompt('Agrega una pelicula \n para terminar agregegue END');
	films.push(elemento);
}while(elemento != 'END');
films.pop();	//elimina el ultimo elemento de un Array

console.log(films);
document.write(films);

//convertir un Array en string
var films_string = films.join();
console.log(films_string);
console.log(typeof films_string);

//convertir un string en Array
var string = 'Rapido y furioso, Bad Boys, Distrito 13';
var string_array = string.split(', ');
//console.log(typeof string);
console.log(string_array);
console.log(typeof string_array);

//ordenar arrays
console.log('Ordenados al reves reverse()');
films.reverse();
console.log(films);

console.log('Ordenados alafabeticamente con sort()');
films.sort();
console.log(films);

//buscar en array
var busqueda = films.find(function(film){
	return film == 'Ironman'; //buscar Ironman
});
//console.log(busqueda);

//buscar con la funcion flecha
var busqueda = films.find(film => film == 'Ironman');
console.log(busqueda);

//buscar con la funcion flecha el indice
var busqueda = films.findIndex(film => film == 'Ironman');
console.log(busqueda);

/*
El método some() comprueba si al menos un elemento del array 
cumple con la condición implementada por la función proporcionada.
*/
var edades = [10, 15, 18, 30, 45];
var busqueda = edades.some(edad => edad >= 48);
console.log(busqueda);