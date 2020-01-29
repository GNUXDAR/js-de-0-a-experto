'use strict'

var user = 'gnuxdar';
var users = ['gnuxdar', 'grebo', 'merys']; //coleccion de datos
var ciudades = new Array('Venezuela', 'Ecuador', 'Colombia', 'Argentina', 'España', 'Inglaterra'); //Array en forma de objeto

console.log(user);
console.log(users);
console.log(ciudades);
console.log(ciudades[5]);  //accediendo a un elemento dentro del Array

//iterando con un blucle
document.write('<ul>');
	ciudades.forEach((elemento, indice)=>{
		document.write('<li>'+indice+' - '+elemento+'<li>');
	});
document.write('<ul>');