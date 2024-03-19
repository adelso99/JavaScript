'use strict'

// ARRAYS, ARREGLOS Y MATRICES 

// Conexion de tipos de datos, de los valores que se pueden tener

var nombre = "adelso";
var nombres = ["adelso", "adel", "hola", "hey", 52, true];
//               0          1      2     3
// EL CONTADOR EMPIEZA DESDE 0

var lenguajes = new Array("JS", "REACT", "HTML", "MySQL");


document.write("<h1>Lenguajes de Programacion 2024</h1>");
document.write("<ul>");
/*
for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
*/
/*
lenguajes.forEach((elemento, indice)=>{
    document.write("<li>"+indice+"-"+elemento+"</li>");
});
*/


for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}

document.write("</ul>");






/*
var elemento = parseInt(prompt("que elemento del array quieres?", 0));
if(elemento >= nombres.length){
    alert("introduce el numero correcto menor que: " + nombres.length);
}else{
    alert("el ususario a seleccionado es: "+nombres[elemento]);
}
*/
//console.log(nombres.length);

// reaklizacion de arrays