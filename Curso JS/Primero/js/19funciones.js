'use strict'

// FUNCIONES
// una funcion es una agrupacion reutilizable de un conjunto de instrucciones 

// Conjunto de instrucciones a ejecutar

function porConsola(numero1, numero2){
    console.log("suma: "+(numero1+numero2));
    console.log("resta: "+(numero1-numero2));
    console.log("multiplicacion: "+(numero1*numero2));
    console.log("division: "+(numero1/numero2));
    console.log("**************************");
}

function porPantalla(numero1, numero2){
    document.write("suma: "+(numero1+numero2)+"<br/>");
    document.write("resta: "+(numero1-numero2)+"<br/>");
    document.write("multiplicacion: "+(numero1*numero2)+"<br/>");
    document.write("division: "+(numero1/numero2)+"<br/>");
    document.write("**************************")+"<br/>";
}

function calculadora(numero1, numero2, mostrar = false){
    if(mostrar == false){
        porConsola(numero1, numero2);
    }else{ 
       porPantalla(numero1, numero2);
    }
   return true;

}
calculadora(1, 4);
calculadora(2, 5, true);
calculadora(4, 5, true);
calculadora(4, 8, true);



/*
function calculadora(numero1, numero2, mostrar = false){

    // Conjunto de instrucciones a ejecutar
    if(mostrar == false){
        console.log("suma: "+(numero1+numero2));
        console.log("resta: "+(numero1-numero2));
        console.log("multiplicacion: "+(numero1*numero2));
        console.log("division: "+(numero1/numero2));
        console.log("**************************");
    }else{ 
    document.write("suma: "+(numero1+numero2)+"<br/>");
    document.write("resta: "+(numero1-numero2)+"<br/>");
    document.write("multiplicacion: "+(numero1*numero2)+"<br/>");
    document.write("division: "+(numero1/numero2)+"<br/>");
    document.write("**************************")+"<br/>";
    
    }
   // return "hola soy la calculadora!!";

}
calculadora(1, 4);
calculadora(2, 5, true);
calculadora(4, 5, true);


*/

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


