'use strict'

/*
	funcinoes con parametros
*/

function calculadora(num1, num2){
	document.write('Suma '+(num1 + num2)+'<br>');
	document.write('Resta '+(num1 - num2)+'<br>');
	document.write('Multiplicar '+(num1 * num2)+'<br>');
	document.write('Dividir '+num1 / num2+'<br>');
}

//invocar funcion
calculadora(2, 5);

//invocar con bucles
for(var i= 0; i<=10; i ++){
	calculadora(i, i);
	document.write('<br>');
}