'use strict'


var edad = 30;
var imprimir = "";
switch(edad){
	case 18:
		imprimir = "Ya eres mayor de edad";
	break;
	case 25:
		imprimir = "Ya eres un Joven, se mas responsable";
	break;
	case 30:
		imprimir = "Ya estas mayor tio";
	break;
	case 70:
		imprimir = "Ya eres de la tercera edad";
	break;
	default:
		imprimir = "Switch para edad";
	break;
}

console.log(imprimir);