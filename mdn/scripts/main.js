//para obtener una referencia document.querySelector('Element');
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
		miImage.setAttribute('src', 'images/firefox-icon1.png');
		miLegend.style.color = '#fffc40';
		miLegend.style.background = '#006be6';
		miLegend.innerHTML ='Ouch! Deja de pincharme! soy un panda rojo en peligro de extinsion';
		
	}else if(miSrc === 'images/firefox-icon1.png'){
		miImage.setAttribute('src', 'images/firefox-icon2.png');
		miLegend.style.color = '#fffc40';
		miLegend.style.background = '#006be6';
		miLegend.innerHTML ='Soy mas viejo pero tambien soy un panda rojo en peligro de extinsion';
	}else if(miSrc === 'images/firefox-icon2.png'){
		miImage.setAttribute('src', 'images/firefox-icon3.png');
		miLegend.style.color = '#fffc40';
		miLegend.style.background = '#006be6';
		miLegend.innerHTML ='Soy mas viejo aun pero tambien soy un panda rojo en peligro de extinsion';
	}else if(miSrc === 'images/firefox-icon3.png'){
		miImage.setAttribute('src', 'images/firefox-icon4.png');
		miLegend.style.color = '#fffc40';
		miLegend.style.background = '#006be6';
		miLegend.innerHTML ='Yo soy un Phoenix';
	}else if(miSrc === 'images/firefox-icon4.png'){
		miImage.setAttribute('src', 'images/firefox-icon.png');
		miLegend.style.color = '#fffc40';
		miLegend.style.background = '#006be6';
		miLegend.innerHTML ='Yo no soy un panda';
	}
	else{
		alert('end');
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
    miTitulo.textContent += nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}