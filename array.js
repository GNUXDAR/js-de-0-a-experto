/*****
Author: Arturo Cabrera
Redes: @gnuxdar
Tema: Iniciandonos en JS
*****/

document.write('Comencemos con array()');
document.write('<br>');

//array unidimensionales
var semana = new Array('Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes');
var semanal = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
document.write(semana);
//document.write(typeof semanal);
document.write('<br>');
document.write(semana[1]);//los array comienzan desde el indice cero[0]
document.write('<br>');

//array multidimensionales
uno = 
[
	[0, 1, 2, 3, 
		[41, 42, 43,
			[444, 445, 446, 447]
		]
	],
	[5, 6, 7, 8, 9],
	[10, 11, 12, 13]
];
document.write(uno); //imprime todo
document.write('<br>');
document.write(uno[0]); //accediendo a un indice dentro del array principal, que es otro array
document.write('<br>');
document.write(uno[0][4]);//accediendo al array 0 y el indice 4 del array 0
document.write('<br>');
document.write(uno[0][4][3]);
document.write('<br>');
document.write(uno[0][4][3][0]);
document.write('<br>');

//manipulacion de array
/*
	length 	(mide cantidad de elementos)
	push()	(agregar valores a un array)
	pop()	(selecciona el ultimo elemnto de un array)
	join()	(convierte un array en un string)
	split(param)	(convierte un string en un array)
	array.from(map)		(manipula el DOM, y lo convierte en un array)
	sort	(ordena un arra alfabeticamente)
	reverse	(ordena al revez)
	----------------------------------------
	for in
	forEach
	find
	findIndex
	filter
	some

*/
var dos = [444, 445, 446, 447];
document.write(dos.length); //cantidad de elementos del arreglo
document.write('<br>');
dos.push(448); //agregar valores a un array
dos.push(449);
dos.push(450);

document.write(dos);
document.write('<br>');
document.write(dos.length);
document.write('<br>');
document.write(dos.pop()); //selecciona el ultimo elemnto de un array
document.write('<br>');
document.write(dos.join()); //convierte un array en string
console.log(dos.join());
document.write('<br>');
var dos = 'Lunes, martes, miercoles, jueves, viernes, sabado, domingo';
doss = dos.split(',');//convierte un string en aun arrray
console.log(doss); 
document.write('<br>');
//manipulando el dom con array.from
var semana = Array.from(document.querySelectorAll('.dias p'));
var creacion = semana.map(dia => dia.textContent);
console.log(creacion);
var semanaWithSort = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
document.write(semanaWithSort.sort());
//ordena alfabeticamente, primero las mayusculas
document.write('<br>');
document.write(semanaWithSort.reverse());
//ordena alrevez
document.write('<br>');
var semanaWithFor = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
//recorrer 
for(let i in semanaWithFor){
	document.write(semanaWithFor[i]+'<br>');
};
//forEach, muy similar al for in
var miArray = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
miArray.forEach(
	(dos, i) => document.write(i + '-' + dos + "<br>")
	);

//find, busca una palabra y si son mas de una, elige la primera
var miArray2 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo',  'Find']; 
var buscar = miArray2.find(dos => dos=='Find');
document.write('<br>'+buscar);

//findIndex, busca el indice y si son mas de una elige a la primera
var miArray3 = ['Enero', 'Febrero', 'Find', 'Marzo', 'Abril', 'Mayo']; 
var buscar = miArray3.findIndex(dos => dos=='Find');
document.write('<br>'+ buscar);

//filter, busca el indice y si son mas de uno los elige a todos
var miArray3 = ['Enero', 'Filter', 'Febrero', 'Filter', 'Marzo', 'Abril', 'Mayo']; 
var buscar = miArray3.filter(dos => dos=='Filter');
document.write('<br>'+ buscar);

//some, evalua parametros en un rango y devuelve un booleano
//true si se cumple la conidion
var num = [10, 20, 30, 40, 50]; 
var buscar = num.some(dos => dos>10);
document.write('<br>'+ buscar);




//PLUS, perimite editar toeo el contenido de la vista
document.designMode = 'on';


//semana.(alert);
/*document.write('<br>');
var frutas = ['guindas', 'manzanas', 'bananas'];*/
//frutas.sort(); // ['bananas', 'guindas', 'manzanas']  los ordena del valor unicode
// var puntos = [1, 10, 2, 21]; 
// puntos.sort(); // [1, 10, 2, 21]
// var cosas = ['word', 'Word', '1 Word', '2 Words'];
// cosas.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// f = ["Feliz","Carnaval","2015",null].sort(alert)
// document.write(f);
// // En Unicode, los números vienen antes que las letras mayúsculas
// // y estas vienen antes que las letras minúsculas.
// document.write(frutas);
// document.write('<br>');
// document.write(puntos);
// document.write('<br>');
// document.write(cosas);
// document.write('<br>');
// document.write((function(){return String("¡LA NOCHE ES JOVEN, EL CODIGO ESTA FRESCO! ;)")}()))
