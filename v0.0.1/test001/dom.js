var a = document.querySelector('#todo');
var b = document.querySelector('.ultimo h1');
var c = document.querySelector('a[class="vinculo"]');

var d = document.querySelectorAll('p')[0]; //se referencia por el indice
var e = document.getElementById('dos');
var f = document.getElementsByClassName('segundo')[1]; //se referencia por el indice
var g = document.getElementsByTagName('p')[2]; //se referencia por el indice
var h = document.getElementsByTagName('p')[3]; //se referencia por el indice
var j = document.getElementsByClassName('segundo')[4]; //se referencia por el indice

a.style.color='red';
b.style.color='green';
c.style.color='yellow';
d.style.color='blue';
e.style.color='maroon';
f.style.color='pink';
g.style.color='orange';
h.innerHTML += 'New parrafo'; //modificar el dom, adicionar
//j.className = j.className.replace('segundo', 'tercero');	//no funciona
f.style.border = '1px solid red';
f.style.fontFamily = 'Arial';
f.style.fontSize = '25px';

function fondo(color){
	if (color=='red') {
		a.style.background = 'red';
		a.style.color = 'white';
	}else if(color=='green'){
		a.style.background = 'green';
		a.style.color = 'white';
	}else if (color == 'blue') {
		a.style.background = 'blue';
		a.style.color = 'white';
	}else if (color=='pink') {
		a.style.background = 'pink';
		a.style.color = 'white';
	}
}