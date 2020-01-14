'use strict'
/* Master de Javascript */
/* use strict, es una manera de que javaScript sea mas exigente, 
como por ejemplo exigir que las variables sean declaradas */

//* maneras de mostrar datos
alert('Hola al Master');
document.write('Imprimiendo desde el js');
console.log(5+5);

//* declarando variables
var pais = 'Venezuela';
var continente = 'America';
var edad = 30;
var paisContinente = pais +' '+continente;

//* asignando valor, reasignando
pais = 'Ecuador';
paisContinente = pais +' '+continente;

console.log(paisContinente, edad)