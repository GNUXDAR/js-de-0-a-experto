var miTitulo = document.querySelector('h1');
miTitulo.innerHTML = 'Hello world! ';

document.querySelector('img').onclick = function() {
    alert('Ouch! Deja de pincharme! soy un panda rojo en peligro de extinsion');
}

//cambiador de imagen
var miLegend = document.querySelector('h2');
var miImage = document.querySelector('img');
miImage.onclick = function(){
	var miSrc = miImage.getAttribute('src');
	if (miSrc === 'images/firefox-icon.png') {
		miImage.setAttribute('src', 'images/firefox-icon2.png');
		miLegend.style.color = 'red';
		miLegend.style.background = 'blue';
		miLegend.innerHTML ='Soy mas viejo pero tambien soy un panda rojo en peligro de extinsion';
		
	}else{
		miImage.setAttribute('src', 'images/firefox-icon.png');
		miLegend.style.color = 'red';
		miLegend.style.background = 'blue';
		miLegend.innerHTML ='Ouch! Deja de pincharme! soy un panda rojo en peligro de extinsion';
	}
}

//cambiar de usuario
var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent += miNombre;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es fresco, '+nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}