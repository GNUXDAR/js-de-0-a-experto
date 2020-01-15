'use strict'
/*
script que pida dos numeros y que nos diga 
cual es el mayor, el menor y si son iguales */
alert('Ejercicio #1');

var num1 = parseInt(prompt('Ingrese su primer numero'));
var num2 = parseInt(prompt('Ingrese el segundo numero '));

if (num1 > num2) {
	alert(num1 + ' Es mayor que ' + num2);
}else if (num1 < num2) {
	alert(num1 + ' Es menor que ' + num2);
}else{
	alert(num1 + ' y ' + num2 + ' son iguales');
}
