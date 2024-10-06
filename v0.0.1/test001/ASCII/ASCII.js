
// var code_decimal_ascii = String.fromCharCode(71, 110, 117, 120, 100, 97, 114);
// console.log(code_decimal_ascii); //Gnuxdar

// // concierte la cadena en codigos decimales y hexdecimales
// var cadena = prompt("Ingrese su cadena: ");

// let codigosDecimale = [];
// let codigosHex = [];
// let codigosBin = [];

// for (let i=0; i<cadena.length; i++){
//     let caracter =  cadena[i];
//     let codigoDecimal = caracter.charCodeAt(0);
//     let codigoHex = codigoDecimal.toString(16).toUpperCase();
//     let codigoBin = codigoDecimal.toString(2).toUpperCase();

//     codigosDecimale.push(codigoDecimal);
//     codigosHex.push(codigoHex);
//     codigosBin.push(codigoBin);
// }

// // Muestran resultados
// console.log("Cadena Original: ", cadena);
// console.log("Codigos Decimales: ", codigosDecimale.join(","));
// console.log("Codigo Hexadecimales: ", codigosHex.join(","));
// console.log("Codigo Binario: ", codigosBin.join(","));

// // prompt: solicita la cadena
// // charCodeAt(): convierte un caracter en codigo decimal
// // toString(16): convierte un numero en hexadecimal
// // .toUpperCase(): convierte una cadena en mayusculas

        function convertir() {
          // Obtener el valor del input
          var cadena = document.getElementById("cadenaInput").value;

          // Crear los arrays donde se guardarán los códigos
          let codigosDecimale = [];
          let codigosHex = [];
          let codigosBin = [];

          // Iterar sobre la cadena ingresada
          for (let i = 0; i < cadena.length; i++) {
            let caracter = cadena[i];
            let codigoDecimal = caracter.charCodeAt(0); // Código Decimal
            let codigoHex = codigoDecimal.toString(16).toUpperCase(); // Código Hexadecimal
            let codigoBin = codigoDecimal.toString(2).toUpperCase(); // Código Binario

            codigosDecimale.push(codigoDecimal);
            codigosHex.push(codigoHex);
            codigosBin.push(codigoBin);
          }

          // Mostrar los resultados en los divs correspondientes
          document.getElementById("original").innerText = cadena;
          document.getElementById("decimales").innerText =
            codigosDecimale.join(", ");
          document.getElementById("hexadecimales").innerText =
            codigosHex.join(", ");
          document.getElementById("binarios").innerText = codigosBin.join(", ");
        }