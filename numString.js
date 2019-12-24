/*****
Author: Arturo Cabrera
Redes: @gnuxdar
Tema: Iniciandonos en JS
*****/

/*
	numeros
*/
var s = 'hola';
var a = 10.55; //numero
var b = '10.55';	//string
var c = parseInt(b); //convierte en numero en int
var d = parseFloat(b); //convierte en numero en float
var e = isNaN(s);  //verifica que no es un numero
var f = Number.isInteger(a); //verifica si es un entero
var g = 15.46648;
var h = g.toFixed(2); //cantidad de decimales y redondea
var i = h.toString(); //convierte a cadena

document.write(a);
document.write('<br>');
document.write(a);
document.write('<br>');
//document.write(typeof c);
document.write('parseInt("10.55") ');
document.write(c);
document.write('<br>');
document.write('parseFloat() ');
document.write(d);
document.write('<br>');
document.write(e);
document.write('<br>');
document.write('Number.isInteger(a) ');
document.write(f);
document.write('<br>');
document.write(h);
document.write('<br>');
document.write(typeof i);
document.write('<br>');

/*
	cadenas - string
	______________
	length
	indexOf
	search
	lastIndexOf
	match
	substr
	charAt
	startsWith
	endsWith
	includes
	______________
	repeat
	replace
	slice
	split
	trim
	toLowerCase
	toUpperCase
	concat
*/
var saludo = 'Hola mundo a "todos"';
var estudiar = "todos debemos 'estudiar'";
var cadA = 'Hola';
var cadB = "mundo bello";
var cadC = 'Hola a todos todos mis amigos de youtube, que todos son buenos';
document.write(saludo);
document.write('<br>');
document.write(estudiar);
document.write('<br>');
document.write(cadA+" "+cadB);//concatenar
document.write('<br>');
document.write(cadA.length); //propiedad que mide cant del string
document.write(' con length()');
document.write('<br>');
document.write(cadC.indexOf('amigos'));//comienza desde esa posicion
document.write('<br>');
document.write(cadC.search('amigos'));//comienza desde esa posicion, como indexOf
document.write('<br>');
document.write(cadC.lastIndexOf('amigos'));//toma la ultima, de las palabras que se toma, en caso de tener mas
document.write('<br>');
document.write(cadC.match('todos'));//localiza la palabra y lo asign aen un array
document.write('<br>');
var cadBar = cadC.match(cadC);
document.write();
document.write('<br>');
document.write(cadC.match(/todos/gi));//localiza y expone todas las palabras que se pasan como parametro
document.write('<br>');
document.write(cadC.substr(5,11));//subtrae parte de la cadena, entre el indice 5 y a partir de ahi hasta el 11
document.write('<br>');
document.write(cadC.substring(5));//substrae continuamente la cadena desde el indice 5 (continuo)
document.write('<br>');
document.write(cadC.substring(5,11));//substrae continuamente la cadena entre el 5 y11 (continuo)
document.write('<br>');
document.write(cadC.charAt(5));//subtrae una letra en ese indice
document.write('<br>');
document.write(cadC.startsWith('Hola')); //funcion que verifica como comienza una palabra cadena
document.write('<br>');
document.write(cadC.endsWith('buenos')); //funcion que verifica como termina una palabra de una cadena
document.write('<br>');
document.write(cadC.includes('amigo')); //verifica si existe esta palabra
document.write('<br>');
document.write(cadC.includes('amigo',10)); //code mas eficiente, busca a partir de ese indice que indiquemos
document.write('<br>');	

var cad = '@gnuxdar <br>';
var cadD = 'guxdar, arthurx96, guerrero'; //cadena
document.write(cad.repeat(3)); //repetir N cantidad de veces que le indiquemos
document.write('<br>');
document.write(cad.replace('gnuxdar', 'arthurx96'));//remplaza una cadena
document.write('<br>');
document.write(cad.slice(1)); //lee la cadena a partir del indice que le indiquemos,  incluyendolo
document.write('<br>');
document.write(cad.split()); //convierte una cadena en array
document.write('<br>');
document.write('convierte una cadena en un array con split() <br>');
document.write(cadD.split(',')); ////convierte una cadena en array, separando indice con el elemento que incluimos (,)
document.write('<br>');
var d = cadD.split(',')
//document.write(typeof d);
console.log(d);
document.write('<br>');

var cadE = 'HOLA como estan toda migenteee    ';
document.write(cadE.trim()); //El método trim( ) elimina los espacios en blanco en ambos extremos del string.
document.write('<br>');
document.write(cadE.toLowerCase());// todas a minusculas
document.write('<br>');
document.write(cadE.toUpperCase());// todas a mayusculas
document.write('<br>');
var uno = 'Hello world ';
var dos = 'persons of planet ';
var tres = 'tierra';
document.write(uno.concat(dos,tres, ' soy gnuxdar')); //concatenar, como +
document.write('<br>');

//otra manera de reprentar string y concatenaciones
var fin = 'seccion';
document.write(`se termina esta ${fin} del curso con los numeros y string`);
document.write('<br>');