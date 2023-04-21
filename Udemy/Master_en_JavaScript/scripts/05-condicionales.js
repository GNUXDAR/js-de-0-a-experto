'use strict'
// condicional
//si la condicion es true haz algo
var edad1 = 30;
var edad2 = 32;
var user = 'Arturo Cabrera';

/* 
operadores relacionales
Mayor que 	>
Menor que	<
Mayor o igual que	>=
Menor o igual que	<=
Diferente 	!=
*/

if (edad1 == edad2) {
	console.log('Son Iguales edades');
}else{
	console.log('Son diferentes edades');
}

if (edad1 >= 18) {
	console.log(user + ' Es Mayor de edad');
	if (edad1 === 30) {
		console.log('Tiene ' + edad1 + 'años');
	}else if (edad1 <= 30) {
		console.log('Esta en un rango entre 18 y 30 años');
	}
}else{
	console.log(user + ' Es Menor de edad');
}