'use strict'

/*
	metos para convertir en strings
*/

var num = 500;
var texto1 = 'Hola mundo de la programacion en el frontend en js';
var texto2 = 'Hello world';

//num es de tipo number
console.log(num);
console.log(typeof num);

//se convierte num a string
var result = num.toString();
console.log(result);
console.log(typeof result);

//convertir a minusculas en js
result = texto1.toLowerCase();
console.log(result);

//convertir a mayusculas en js
result = texto1.toUpperCase();
console.log(result);

//calcular longitud
result = texto1.length;
console.log(result);

//concatenar textos
var textTotal = texto1 + texto2;
console.log(textTotal);

textTotal = texto1.concat(' '+texto2);
console.log(textTotal);

//hacer busquedas dentro de un string

//busca la primera coincidencia
var busqueda = texto1.indexOf('frontend');
console.log(busqueda);

//busca la primera coincidencia, es como idexOf
busqueda = texto1.search('en');
console.log(busqueda);

//busca la ultima coincidencia
busqueda = texto1.lastIndexOf('en');
console.log(busqueda);

//busca las coincidencias
busqueda = texto1.match('en');
console.log(busqueda);

busqueda = texto1.match(/en/g);  //expresion regular para que busque todas
console.log(busqueda);


//subtrae del string
busqueda = texto1.substr(0, 10);
console.log(busqueda);

//subtrae desde la posicion que le pasemos
busqueda = texto1.substring(5);
console.log(busqueda);

//subtrae una letra
busqueda = texto1.charAt(9);
console.log(busqueda);

//da un resultado booleano si el string inicia asi
busqueda = texto1.startsWith('Hola');
console.log(busqueda);


//da un resultado booleano si el string finaliza asi
busqueda = texto1.endsWith('frontend en js');
console.log(busqueda);

//da un resultado booleano si existe lo que pasemos por parametro
busqueda = texto1.includes('frontend en js');
console.log(busqueda);

//da un resultado booleano si existe lo que pasemos por parametro, pero podemos indicar desde donde comenzar a buscar
busqueda = texto1.includes('frontend en js', 10);
console.log(busqueda);

//remplazar un texto por otro
busqueda = texto1.replace('frontend en js', 'backend con laravel');
console.log(busqueda);

//recortar desde el primer parametro o desde el 1 al 2 cuando tiene 2 parametros
busqueda = texto1.trim();
console.log(busqueda);

//convierte un string en Array
busqueda = texto1.split();
console.log(busqueda);

//divide en lo que le pasemos en Array
busqueda = texto1.split(" ");
console.log(busqueda);

//elimina los espacios en blanco en ambos extremos del string
texto1 = '     quitar los espacios de los extremos de una cadena  ';
busqueda = texto1.trim();
console.log(busqueda);

//elimina los espacios en blanco del final de una cadena
texto1 = '     quitar los espacios del  final de una cadena  ';
console.log(texto1);
console.log(texto1.length);
busqueda = texto1.trimEnd();
console.log(busqueda.length);
console.log(busqueda);

//elimina los espacios en blanco del inicio de una cadena
texto1 = '     quitar los espacios del  inicio de una cadena  ';
console.log(texto1);
console.log(texto1.length);
busqueda = texto1.trimStart();
console.log(busqueda.length);
console.log(busqueda);