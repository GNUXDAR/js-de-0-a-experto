'use strict'

//Bucle while
/* Bucle es una estructura de control que se repite N veces
el while se repetira mediante la condicion es false
si es true se sale del bucle
*/

 var year = 2020;

 while(year <= 2050){
 	console.log('Estamos en el año: '+ year);
 	year++;
 	/*para que no quede un bucle infinito
 	ya que year siempre seria menor que 2050*/
 }