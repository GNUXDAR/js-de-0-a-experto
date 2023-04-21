'use strict'

/*
	#ejercicio 3 
	hacer un programa que muestre todos los numeros entre dos numeros
	introducidos por el usuario
*/

var num1 = parseInt(prompt('Ingrese el primer numero', 0));
var num2 = parseInt(prompt('Ingrese el segundo numero', 0));

//isNAN: devuelve tru si no es un numero
while(num1 <= 0 || isNaN(num1)){
	num1 = parseInt(prompt('Ingrese su primer numero'));
}

while(num2 <= 0 || isNaN(num2)){
	num2 = parseInt(prompt('Ingrese el segundo numero'));
}

for(var i = num1; i <= num2; i++){
	if (i === num1)
		continue;
	if (i === num2)
		break;
	document.write(i+', ');
}