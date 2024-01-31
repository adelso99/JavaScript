'use strict'

//Prueba con Let y Var
// PRUEBA CON VAR
var numero = 40;
console.log(numero); //valor 40

if(true){
    var numero = 50;
    console.log(numero); //valor 50
}

console.log(numero); //valor 50

// PRUEBA CON LET
var texto = "Curso JS";
console.log(texto); // Valor ""

if(true){
    let texto = "Curso HTML";
    console.log(texto); //valor curso HTML
}

console.log(texto); // Valor es JS