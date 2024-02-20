'use strict'

// FUNCIONES
// una funcion es una agrupacion reutilizable de un conjunto de instrucciones 


//defino la funcion
function calculadora(numero1, numero2, mostrar = false){
    // conjunto de instrucciones a ejecutar 
    console.log("suma: "+(numero1+numero2));
    console.log("resta: "+(numero1-numero2));
    console.log("multiplicacion: "+(numero1*numero2));
    console.log("division: "+(numero1/numero2));
    console.log("**************************");
    

   // return "hola soy la calculadora!!";

}
calculadora(1, 4);





//console.log(calculadora(), calculadora(), calculadora());

//invocar o llamar la funcion
//var resultado = calculadora();
//console.log(resultado);
//calculadora(12, 8);
//calculadora(98, 2);

/*for(var i = 1; i <= 10; i++){
    console.log(i);
    calculadora(i, 8);
}
*/


