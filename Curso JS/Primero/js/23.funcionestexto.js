'use strict'


// Tranformacion de textos
// con la funcion .toString();  combertimos un numero a un string 

var numero = 444;
var texto1 = "bienvenido al curso de javascript";
var texto2 = "Execelente curso de javascript";



// busquedas se usa .indexOf posicion esta la palabra y si exite o no
// busquedas se usa .lassIndexOf permite sacar la ultima considecia si esxiste
// busquedas se usa .search busqueda de la palabra
// busquedas se usa .match da un array que devuele coleccion de resultados
// busquedas se usa .charAT saca letra en concreto
// busquedas se usa .startsWith busca al inicio del string texto y dice true o false


var busqueda = texto1.includes("javascript");
console.log(busqueda);


/*
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
*/