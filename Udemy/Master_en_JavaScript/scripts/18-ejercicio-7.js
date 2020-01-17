'use strict'

/*
	Calculadora:
	* pida dos numeros por pantalla
	* que valide que no se meta caracteres y vuelva a pedir
	* en el body, en un alerta y  por la consola
		el resultado de sumar, restar, multiplicar y dicidir esas dos cifras
*/

var num1 = parseInt(prompt('Ingrese un numero: '));

//validando
while(num1 <= 0 || isNaN(num1)){
	num1 = parseInt(prompt('Ingrese un numero: '));
}

var num2 = parseInt(prompt('Ingrese segundo numero: '));
while(num2 <= 0 || isNaN(num2)){
	num2 = parseInt(prompt('Ingrese segundo numero: '));
}

//hacer los calculos para la suma
let result = num1 + num2;

document.write('Numero1: '+num1+'<br>');
document.write('Numero2: '+num2+'<br><br>');

document.write('La suma da: '+result+'<br>');
alert('La suma da: '+result);
console.log('La suma da: '+result);

//hacer los calculos para la resta
let result2 = num1 - num2;

document.write('La resta da: '+result2+'<br>');
alert('La resta da: '+result2);
console.log('La resta da: '+result2);

//hacer los calculos para la multiplicacion
let result3 = num1 * num2;

document.write('La multiplicacion da: '+result3+'<br>');
alert('La multiplicacion da: '+result3);
console.log('La multiplicacion da: '+result3);

//hacer los calculos para la division
let result4 = num1 / num2;

document.write('La division da: '+result4+'<br>');
alert('La division da: '+result4);
console.log('La division da: '+result4);