
var code_decimal_ascii = String.fromCharCode(71, 110, 117, 120, 100, 97, 114);
console.log(code_decimal_ascii); //Gnuxdar

// concierte la cadena en codigos decimales y hexdecimales
var cadena = prompt("Ingrese su cadena: ");

let codigosDecimale = [];
let codigosHex = [];
let codigosBin = [];

for (let i=0; i<cadena.length; i++){
    let caracter =  cadena[i];
    let codigoDecimal = caracter.charCodeAt(0);
    let codigoHex = codigoDecimal.toString(16).toUpperCase();
    let codigoBin = codigoDecimal.toString(2).toUpperCase();

    codigosDecimale.push(codigoDecimal);
    codigosHex.push(codigoHex);
    codigosBin.push(codigoBin);
}

// Muestran resultados
console.log("Cadena Original: ", cadena);
console.log("Codigos Decimales: ", codigosDecimale.join(","));
console.log("Codigo Hexadecimales: ", codigosHex.join(","));
console.log("Codigo Binario: ", codigosBin.join(","));

// prompt: solicita la cadena
// charCodeAt(): convierte un caracter en codigo decimal
// toString(16): convierte un numero en hexadecimal
// .toUpperCase(): convierte una cadena en mayusculas