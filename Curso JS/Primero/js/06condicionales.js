'use strict'

// CONDICIONAL IF
// ESTRUCTURA DE CONTROL O INSTRUCCIONES PARA COMPARAR ALGO
// SI "A" ES IGUAL "B" ENTONCES HAZ ALGO

/*var edad1 = 10;
var edad2 = 12;
//SI PASA ESTO 
if(edad1 > edad2){
    // EJECUTA ESTO
    console.log("Edad uno es mayor que edad2");
}else{
    console.log("La edad uno es inferior");    
}
*/

var edad = 16;
var nombre = "Adelso Hernandez";

/*OPERADORS RELACIONALES 
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=
*/

if(edad >= 18){
    // Es mayor de edad
    console.log(nombre+" Tiene "+edad+ " Años, Es mayor de edad")
    if(edad <=33){
        console.log("Todavia eres milenia");
    }else if(edad >= 70){
        console.log("Eres Anciano")
    }else{
        console.log("Ya no eres Milenial");
    }

}else{
    // Es Menor de edad
    console.log(nombre+" Tiene "+edad+ " Años, Es menor de edad")
}