'use strict'

/*
	funciones flecha es solo sustituir la palapra
	function por una =>
	Las funciones flecha siempre son anónimas. 
*/

function sumando(num1, num2, muestraSuma, multiplica){
	var sumar = num1 + num2;

	muestraSuma(sumar);
	multiplica(sumar);

	return sumar;
}

//callbacks
sumando(5, 7, 
	(data) => {
		document.write('El resultado de la suma es: '+data+'<br>');
	},
	(data)=>{
		document.write('El resultado de la multiplicacion es: '+(data*data));
	}
);