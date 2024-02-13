'use strict'
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

// tabla de multiplicar de un numero introducido en pantalla

var numero = parseInt(prompt('De que numero quiere la tabla', 1));

document.write("<h1>Tabla del "+numero+"</h1>");
for(var i = 1; i <= 10; i++){
    document.write(i+" x "+numero+" = "+(i*numero)+"<br/>");
    }

//todas las tablas de mutiplicar
for(var c = 1; c <= 10; c++){
    document.write("<h1>Tabla del "+numero+"</h1>");
    for(var i = 1; i <= 10; i++){
    document.write(i+" x "+c+" = "+(i*c)+"<br/>");
    }
}