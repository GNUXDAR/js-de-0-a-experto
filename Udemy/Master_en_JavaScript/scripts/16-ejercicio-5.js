'use strict'

/*
	#ejercicio 5
	que nos diga si un numero es par o impar
	1. ventana prompt
	2. si no es valido que nos pida de nuevo el numero
*/


var num = parseInt(prompt('Ingrese su numero', 0));

while(isNaN(num)){
	num = parseInt(prompt('Ingrese su numero', 0));
}

if (num % 2 === 0)
	alert(num + ' Es un numero par')

if (num % 2 != 0)
	alert(num + ' Es un numero impar')