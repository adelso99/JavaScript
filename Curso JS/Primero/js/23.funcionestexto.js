'use strict'


// Tranformacion de textos
// con la funcion .toString();  combertimos un numero a un string 

var numero = 444;
var texto1 = "bienvendido al curso de js";
var texto2 = "Execelente curso de js";


var dato = numero.toString();

    // Texto a MAYUSCULA .toUpperCase();
    // Texto a minuscula .toLowerCase();
    dato = texto1.toLowerCase();
    dato = texto2.toUpperCase();


//console.log(dato);

// Calcular longitud que tiene un texto

var nombre = "Adelso Hernandez";
     

// array 
     //nombre =  ["hola", "hola1"];

//console.log(nombre.length);

//concatenar - UNIR TEXTOS

//var textototal = texto1+" "+texto2;
var textototal = texto1.concat(" "+texto2);

console.log(textototal);
