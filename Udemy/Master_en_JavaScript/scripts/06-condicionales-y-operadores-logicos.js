'use strict'
// operadores logicos
/*
	AND(Y) 	: &&
	OR(O)	: ||
	Negacion : !
*/

var year = 2020;
//Negacion
if (year != 2019) {
	console.log('No estamos en el 2019');
}

//AND
if (year >= 2019 && year <= 2021) {
	console.log('Si estamos en el ' + year);
}else{
	console.log('No estamos en el ' + year);
}

//OR
if (year === 2008 || year === 2020 && year != 2019) {
	console.log('Estamos en los morochos 20');
}else{
	console.log('El año no es 2008 ni 2020');
}