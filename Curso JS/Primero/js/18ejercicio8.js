'use strict'
/*
Una Calculadora que pida dos numeros en pantlla
si metemos uno mal que no lo vuelv a pedir
que nos muestre en el body de la pagian en una alerta
y por la consola el resultado de sumar, restar, multiplicar
y dividir esas dos cifras
*/

var numero1 = parseInt(prompt('Introduce el Primer Numer', 0));
var numero2 = parseInt(prompt('Introduce el Segundo Numer', 0));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
numero1 = parseInt(prompt('Introduce el Primer Numer', 0));
numero2 = parseInt(prompt('Introduce el Segundo Numer', 0));
}

var resultado = "La suma es: " +(numero1+numero2)+" <br/>"+
                "la resta es: "+(numero1-numero2)+" <br/>"+
                "la multipliacion es: "+(numero1*numero2)+" <br/>"+
                "la division es: "+(numero1/numero2)+" <br/>";

var resultadoCMD = "La suma es: " +(numero1+numero2)+" \n"+
                "la resta es: "+(numero1-numero2)+" \n"+
                "la multipliacion es: "+(numero1*numero2)+" \n"+
                "la division es: "+(numero1/numero2)+" \n";

document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);