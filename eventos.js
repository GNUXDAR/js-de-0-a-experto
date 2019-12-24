/*****
Author: Arturo Cabrera
Redes: @gnuxdar
Tema: Iniciandonos en JS
*****/

//Eventos de Mouse
function apretar(){
	alert('Hola desde el evento onclick()');
}
function encima(){
	alert('Hola desde el evento onmouseover()');
}
function fuera(){
	alert('Hola desde el evento onmouseout()');
}

// creando las funciones desde el js
var eventoUno = document.querySelector('.tres');
eventoUno.addEventListener('click', function(){ alert('Hola desde el evento click, desde js') });

var eventoDos = document.querySelector('.cuatro');
eventoDos.addEventListener('mouseover', function(){ alert('Hola desde el evento mouseover, desde js') });

var eventoTres = document.querySelector('.cinco');
eventoTres.addEventListener('mouseout', function(){ alert('Hola desde el evento mouseout, desde js') });
//addEventListener('mouseout', function(){ alert('Hola desde el evento mouseout, desde js') });  //toda la pantalla

//Eventos de Teclado
/*
	keydown
	keypress
	keyup
*/
window.addEventListener('keypress', function(){
	//alert('keydown funcionando');
});

addEventListener('keypress', function(e){
	//console.log(e.keyCode); //keycode
	console.log(String.fromCharCode(e.keyCode)+' = '+(e.keyCode)); //capturar los keycode y pasar en string
	//document.write(String.fromCharCode(e.keyCode));//solo escribe una sola letra
});


//eventos de carga

window.addEventListener('load', function(){
	console.log('ya cargo la pagina');
});
/*
	setInterval //se va aejecutar de manera indefinida
	setTimeout	//se ejecuta una sola vez
*/

var tiempoI = setInterval(
	function(){
		document.write('Cada 5 Segundos se escribe esto con setInterval<br>');
	},
	5000
	);
//setInterval(valor,tiempo); //como se utiliza (en este caso es una  funcion anonima)

var tiempoI = setTimeout(
	function(){
		document.write('Paso 2 Segundos y se escribio esto con el  setTimeout<br>');
	},
	2000
	);
//setTimeout(valor,tiempo); //como se utiliza

