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