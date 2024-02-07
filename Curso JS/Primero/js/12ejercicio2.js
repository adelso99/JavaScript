'use strict'
/*
UTILIZANDO UN BUCLE, MOSTRAR LA SUMA Y LA MEDIA DE LOS NUMEROS
INTRODUCIDOS HASTA INTRODUCIR UN NUMERO NEGATIVO Y AHI MOSTRAR EL 
RESULTADO 
*/

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt('Introduce un numero hasta que metas uno negativo', 0));
    if(isNaN(numero)){
        numero = 0;

    }else if(numero >= 0){
        suma = suma + numero;
        //suma += numero;

        contador++;

    }
    console.log(suma);
    console.log(contador);

}while(numero >= 0)

alert("La Suma de Tdoso los nuemros es: "+ suma);
alert("La Media de Tdoso los nuemros es: "+ (suma/contador));


