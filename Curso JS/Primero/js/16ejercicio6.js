'use strict'

/*
Que nos diga si un numero es par o impar.
1. ventana promt
2. si no es valido que nos pida de nuevo el numero
*/

/*OPERADORS RELACIONALES 
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=
*/

/*OPERADORS LOGICOS 
    AND(Y): && 
    OR(O): ||
    NEGACION: !
    */

var number = parseInt(prompt("Dame un numero", 0));

while(isNaN(number)){
    number = parseInt(prompt('Dame un numero', 0));
    }
   
   if(number % 2 == 0){
            alert("Es numero par");    
}else{
    alert("Es impar");
}

    