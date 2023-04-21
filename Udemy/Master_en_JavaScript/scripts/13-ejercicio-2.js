'use strict'

/*
	#ejercicio 2
	utilizando un bucle, mostrar la suma y la media
	de los numeros introducidos, hasta introducir
	un numero negativo
*/

var suma = 0;
var media = 0;
var cont = 0;
do{
	var num = parseInt(prompt('Ingrese numero hasta que ingrese uno negativo', 0));
	if (isNaN(num)) {
		num = 0;
	}else if (num >= 0) {
		suma += num;
		cont++;
	}

	console.log(suma);	//la suma de los numeros
	console.log(cont);	//la cantidad de numeros ingresados

}while(num >= 0)
	alert('La suma es: ' + suma);
	alert('La media es:' + (suma/cont));