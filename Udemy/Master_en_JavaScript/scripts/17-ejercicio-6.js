'use strict'

/*
	Hacer una tabla de multiplicar de un numero intriducido por pantalla
*/

var num = parseInt(prompt('Ingrese el numero que quiere que se haga la tabla de multiplicar: ', 0));

var title = document.getElementsByTagName('h1')[0];
title.innerHTML += '<br> Tabla de Multiplicar de '+num;

while(num <= 0 || isNaN(num)){
	num = parseInt(prompt('Ingrese el numero que quiere que se haga la tabla de multiplicar: ', 0));
}

for (var i = 0; i <= 10; i++) {
	let result = num * i;
	document.write(num + ' * ' + i + ' = ' +result +'<br>');
}