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