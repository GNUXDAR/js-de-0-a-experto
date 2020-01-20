'use strict'

/*
	funciones con parametros opcionales y argumentos por defectos
	https://github.com/ryanmcdermott/clean-code-javascript#use-default-arguments-instead-of-short-circuiting-or-conditionals
*/



function calculadora(num1 = 5, num2 = 8){
	document.write('Suma '+(num1 + num2)+'<br>');
	document.write('Resta '+(num1 - num2)+'<br>');
	document.write('Multiplicar '+(num1 * num2)+'<br>');
	document.write('Dividir '+num1 / num2+'<br>');
}

//invocar funcion
calculadora();
