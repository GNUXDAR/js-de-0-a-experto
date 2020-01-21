'use strict'

/*
	funciones anonimas y callbacks
	las funciones anonimas son las que no tienen nombres
*/

function sumando(num1, num2, muestraSuma, multiplica){
	var sumar = num1 + num2;

	muestraSuma(sumar);
	multiplica(sumar);

	return sumar;
}

//callbacks
sumando(5, 7, 
	function(data){
		document.write('El resultado de la suma es: '+data+'<br>');
	},
	function(data){
		document.write('El resultado de la multiplicacion es: '+(data*data));
	}
);