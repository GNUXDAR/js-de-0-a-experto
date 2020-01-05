/*
window es un objeto y como tal tiene atributos
*/

window.name = 'Este es el nombre de la ventana';
var dato 	= 'El nombre es: ' +window.name+'<br>';
var ancho 	= 'El Ancho es: ' +window.outerWidth+'<br>';
var alto 	= 'El Alto es : ' +window.outerHeight+'<br>'
var anchoInterno 	= 'El Ancho Interno es: ' +window.innerWidth+'<br>';
var altoInterno 	= 'El Alto Interno es: ' +window.innerHeight+'<br>';
var scrollHorizontal	= 'El Scroll Horizontal es: '+window.pageXOffset+'<br>';
var scrollVertical	= 'El Scroll Vertical es: '+window.pageYOffset+'<br>';
var distanciaIzq	= 'La distancia desde la Izquierda es: '+window.screenX+'<br>';
var distanciaSup	= 'La distancia desde la parte superior es: '+window.screenY+'<br>';

document.write(dato,ancho, alto, anchoInterno, altoInterno, scrollHorizontal, scrollVertical, distanciaIzq, distanciaSup);

//window.alert
window.alert('Atributo Alert');

//window.open
function visitar(){
	ventana = window.open('http://arturocabrera.com.ve/', '_blank', 'width=500, height=300');
}

function cerrar(){
	ventana.close();
}

function dimension(){
	ventana.resizeBy(100, 100);
}

function dimension(){
	ventana.resizeTo(500, 500);
}

function dimension(){
	ventana.moveBy(100, 100);
}

function dimension(){
	ventana.moveTo(100, 100);
}

function dimension(){
	ventana.focus();
}

function dimension(){
	ventana.print();
}