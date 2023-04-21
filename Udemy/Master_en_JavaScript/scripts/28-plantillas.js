'use strict'

//plantillas de textos
var nombre = prompt('Ingrese su nombre');
var apellido = prompt('Ingrese su Apellido');

function firstLetterMayus(nombre){
	return nombre.charAt(0).toUpperCase()+nombre.substring();	
}


//var texto = 'Mi noombre es '+nombre+'<br>'+'Mi apellido es '+apellido;
var texto = `
	<h1>Welcome</h1>
	<h2>Mi nombre es: ${ nombre.charAt(0).toUpperCase()+nombre.substring(1) }</h2>
	<h2>Mi apellido es: ${ apellido.charAt(0).toUpperCase()+apellido.substring(1) }</h2>
`; 
//AltGR + } = `` (la tecla al lado de enter) para escribir multilineas
//$( variable )  (interpolacion de variable)

document.write(texto);