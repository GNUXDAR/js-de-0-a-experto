'use strict'

/*
	1. pida 6 numeros por pantalla
	2. mostra el array entero (todos sus elementos) en el body y consola
	3. ordenar y mostrarlo
	4. invertir su orden y mostrarlo
	5. mostrar cuantos elementos tiene su array
	5. busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y si su indice
	(uso de funciones)
*/
// validar que solo sean numeros y que el bucle se mantenga para pedir los 6 numeros
/*
var array = [];
for (var i = 0; i < 6; i++) {
	var numero = parseInt(prompt('Ingrese un numero'+i, 0));
	//isNAN: devuelve tru si no es un numero
	while(numero <= 0 || isNaN(numero)){
		numero = parseInt(prompt('Ingrese un nuWero'+i, 0));
		if (parseInt(numero))
			array.push(numero);
		i--;
	}
	array.push(numero);
}
console.log(array);
*/

//un bucle que pide el numero 6 veces (no validado)
//mostrado de manera sencillo
var numero = '';
var array = [];
for (var i = 0; i < 6; i++) {
	numero = prompt('Ingrese un Numero: ');
	array.push(numero);
}

var busqueda = array.find(array => array == 2);

console.log(array);	//escribir en consola
document.write(array+'<br>'); //escribir en pantalla
document.write(array.sort()); //ordenarlo
document.write('<br>'+array.reverse()+'<br>');	//invertir array
document.write(array.length+'<br>'); //indice del array
document.write(busqueda); //mostrar el numero si existe

//pedira datos hasta que se ingfrese END
/*
var numero = '';
var array = [];

do {
	numero = prompt('Agrega un nummero \n para terminar agregegue END');
	array.push(numero);
}while(numero != 'END');

array.pop(); //elimino el ultimo elemento
console.log(array);
*/