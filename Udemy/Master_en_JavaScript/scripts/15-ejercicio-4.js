'use strict'

/*
	#ejercicio 4
	mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
*/

var num1 = parseInt(prompt('Ingrese su primer numero', 0));
var num2 = parseInt(prompt('Ingrese su primer numero', 0));

//isNAN: devuelve true si no es un numero
while(num1 <= 0 || isNaN(num1)){
	num1 = parseInt(prompt('Ingrese su primer numero', 0));
}

while(num2 <= 0 || isNaN(num2)){
	num2 = parseInt(prompt('Ingrese su segundo numero', 0));
}

for(var i = num1; i <= num2; i++){
	if (i === num1)
		continue;
	else if(i%2 != 0)
		document.write(i+' ');
	if (i === num2)
		break;
}