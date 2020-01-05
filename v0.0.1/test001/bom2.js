/* con length nos muestar la acantidad de iframe*/
alert(window.length+' iframe');

//comentado los iframe y seguir con la practica
//ver el historial
var historial = window.history;
console.log(historial);
//document.write(historial);

//localizar o hubicar el fichero
var localizacion = window.location;
document.write(localizacion+'<br>');

//ver el tipo de navegador
browser = window.navigator.hardwareConcurrency;
browserV = window.navigator.vendor;
agent = window.navigator.userAgent;
console.log(browser);
document.write('Navegador: '+browser+'<br>');
document.write('Agent: '+agent+'<br>');
document.write('Vendor: '+browserV); //si es firefos, imprime cadena vacia

//screen o info sobre nuestra pantalla
var pantalla = window.screen;
console.log(pantalla);