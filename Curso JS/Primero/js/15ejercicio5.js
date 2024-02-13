'use strict'

/*
MUESTRE TODOS LOS NUMEROS DIVISORES DE UN NUMERO QUE INTRODUCE RN PROMT
*/ 

var numero = parseInt(prompt("mete un numero", 1));
for(var i = 1; i <= numero; i++){

    if(numero%i == 0){
    console.log("Divisor: "+ i);    
    }
}