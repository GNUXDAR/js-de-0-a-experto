/*****
Author: Arturo Cabrera
Redes: @gnuxdar
Tema: Iniciandonos en JS
*****/
/*
objetos{ 
	propiedades (variables)
		cabeza
		patas
		cola
	metodos (funciones)
		maullar
		caminar
		saltar
	____________
		perro
}
*/
document.write('Objetos en Java Script->POO <br><br>');

//old
function Dog(name, age, weight){
	this.name	= name;
	this.age	= age;
	this.weight	= weight;
	this.run = function(){
		document.write('El perro ', name, ' corre <br>');
	}
};
var perro = new Dog('Kody', 3, 4);
document.write(perro.age +' '+ perro.name);
document.write('<br>');
perro.run();

//*************************************************
//new

class Cat{
	constructor(name, age, weight){
		this.name = name;
		this.age = age;
		this.weight = weight;
	}

	run(){
		document.write('The cat run in the street')
	}
};
var perro = new Cat('Kody Mars', 4, 20);
perro.run();
document.write('<br>');

//herencias
class Animal{
	constructor(tipo, raza){
		this.cero = tipo;
		this.raza = raza;
	};
};

class Domesticos extends Animal{
	constructor(cero, nombre, edad, peso){
		super(cero)
		this.uno = nombre;
		this.dos = edad;
		this.tres = peso;
	};
};


var animal1 = new Domesticos('Hogar', 'Skype', 3, 8);
var animal2 = new Domesticos('Hogar', 'Perry', 4, 9);
var unico 	= new Animal('Salvaje', 'Desconocida');
document.write(animal1.cero);
document.write('<br>');
document.write(unico.cero);
document.write('<br>');

//BOM
