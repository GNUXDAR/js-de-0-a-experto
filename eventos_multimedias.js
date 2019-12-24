/*****
Author: Arturo Cabrera
Redes: @gnuxdar
Tema: Iniciandonos en JS
*****/

/*
eventos multimedia
play
ended
*/
//play
var reproductor = document.querySelector('.rep');
reproductor.addEventListener('play',
	function(){alert('Play')}
	);

//ended
var reproductor = document.querySelector('.rep');
reproductor.addEventListener('ended',
	function(){alert('Finalizo')}
	);

//seeking
var reproductor = document.querySelector('.rep');
reproductor.addEventListener('seeking',
	function(){alert('Adelentaste')}
	);

//seeking con currenTime para ver el tiempo exacto
var reproductor = document.querySelector('.rep');
reproductor.addEventListener('seeking',
	function(){alert(this.currentTime)}
	);


//cuadro de dialogos y ventanas emergentes
/*
	alert
	confirm
	prompt
*/

a = confirm('Volver a la pagina anterior?');
if (a) {window.location='eventos.html'}

//prompt, se puede acceder al input o a los botones
b = prompt('Nombre completo');
//b = prompt('Nombre completo', 'Arturo');
if (b) {
	document.write('Name es:'+b);
}else if (b==null) {
	document.write('Selecciono Cancelar');
}else{
	document.write('No coloco nada');
}
