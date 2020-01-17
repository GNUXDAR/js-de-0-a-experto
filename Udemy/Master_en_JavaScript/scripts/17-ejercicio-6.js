'use strict'

/*
	Hacer una tabla de multiplicar de un numero intriducido por pantalla
*/

var num = parseInt(prompt('Ingrese el numero que quiere que se haga la tabla de multiplicar: ', 0));

while(num <= 0 || isNaN(num)){
	num = parseInt(prompt('Ingrese el numero que quiere que se haga la tabla de multiplicar: ', 0));
}

for (var i = 0; i <= 10; i++) {
	var result = num * i;
	document.write(num + ' * ' + i + ' = ' +result +'<br>');
}