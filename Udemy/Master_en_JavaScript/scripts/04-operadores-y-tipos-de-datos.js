'use strict'

//operadores
var num1 = 5;
var num2 = 7;
var result = num1 * num2;
//var result = num1 + num2;
console.log('El resultado es: '+ result);

//tipos de datos
//int
//float
//boolean
//array
//object

var num_entero = 10;
var string = 'Leonel Messi';
var verdad_falso = true;

//funciones para cambiar tipos de datos
var numFalso = '07';
//Number lo convierte en numero
Number();

console.log(Number(numFalso)+10);
console.log(parseInt(numFalso)+20);
console.log(parseFloat(numFalso)+30);

//de numero a string
console.log(String(num_entero)+40);

//saber el tipo de dato
console.log(typeof(num_entero));
console.log(typeof(string));
console.log(typeof(verdad_falso));
console.log(typeof(numFalso));
