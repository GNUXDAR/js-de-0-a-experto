'use strict'

/*
	funciones dentro de funcines
*/

function porConsola(num1 = 10, num2 = 20){
	console.log('Suma '+(num1 + num2));
	console.log('Resta '+(num1 - num2));
	console.log('Multiplicar '+(num1 * num2));
	console.log('Dividir '+(num1 / num2));
}

function porPantalla(num1 = 5, num2 = 25){
	document.write('Suma '+(num1 + num2)+'<br>');
	document.write('Resta '+(num1 - num2)+'<br>');
	document.write('Multiplicar '+(num1 * num2)+'<br>');
	document.write('Dividir '+num1 / num2+'<br>');
}

function calculadora(num1 = 1, num2 = 2, mostrar = true){
	if(mostrar)
		porPantalla(num1, num2);
	else
		porConsola(num1, num2);

	return true;
}

//invocando
//porConsola(5, 5);
//porPantalla();
calculadora(2, 6, true);