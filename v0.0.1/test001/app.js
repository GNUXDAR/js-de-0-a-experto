/*****
Author: Arturo Cabrera
Redes: @gnuxdar
Tema: Iniciandonos en JS
*****/

/*
numericos
cadena (string)
booleanos (true - false)
fechas
simbolos
fechas
*/


var primero = 16;

document.write(primero);
document.write('<br>');
document.write(typeof primero);//tipo de dato de la variable
document.write('<br>');

var fecha = new Date(); //creando objeto fecha
//document.write(typeof fecha);
//document.write(fecha);
document.write(fecha.getHours() +':'+fecha.getMinutes());
document.write('<br>');
//operaciones aritmeticas
//prioridad
/*
* 
/
%
+
- 
*/

//condicionales

var number = 5;
number += number;
document.write(number);
document.write('<br>');

if(number == 10){
	document.write("Es igual a 10");
}else if(number == 5){
	document.write('Es igual a 5');
}else if(number == 10){
	document.write('Es igual a 10');
}else{
	document.write('Ninguna de las anteriores');
}

document.write('<br>');

var option = '9';
switch(option){
	case 0: b = 'Cero'; break;
	case 1: b = 'Uno'; break;
	case 2: b = 'Dos'; break;
	case 3: b = 'Tres'; break;
	case '9': b = 'string 9'; break;
	default: b = 'Ninguno'; break;
}

document.write(b);
document.write('<br>');

var uno = 10;
var dos = 20;

while(uno <= dos){
	document.write(uno + '<br>');
	uno++;
}

//funciones
function hola(){
	var saludo = document.write('Hola mundo');
	return saludo;
}

//hola();

function datos(a,b,c){
	var datosPersonales = document.write('Mi nombre es: '+ a
		+'<br>Mi apellido es: '+ b 
		+'<br>Mi edad es: '+c+'<br>');
	return datosPersonales;
}

datos('arturo', 'cabrera', 30);


//manera de pasar varios parametros, sin declarar
function meses(...meses){
	document.write(meses);
}

meses('enero', 'febrero');


function meses(...meses){
	for(let uno of meses){
		document.write(uno + '<br>');
	}
}

meses('enero', 'febrero', 'marzo', 'abril');



//======================000
function uno(nombre){
	return nombre;
}

// es lo mimsmo que el de arriba pero mas corto
var uno = nombre => nombre;
var dos = (nombre, apellido) => nombre + apellido;

document.write(uno('Arturo Cabrera'));
document.write('<br>');
document.write(dos('Arturo'+' ', 'Cabrera'));