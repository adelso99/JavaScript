'use strict'

var categorias = ['accion', 'terror', 'comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

//peliculas.sort(); //permite ordenar el array de forma alfabetica

peliculas.reverse(); //permite ordenar el array de reversa

console.log(peliculas);

var cine = [categorias, peliculas];

/*
var elemento = "";

do{
    var elemento = prompt("Introduce tu Pelicula: ");
    peliculas.push(elemento);
}while(elemento != "ACABAR");

peliculas[0] = undefined;
console.log(peliculas);

*/

var indice = peliculas.indexOf('Gran torino');
if(indice > -1){
    peliculas.splice(indice, 1);
}

var peliculas_string = peliculas.join();


var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");


console.log(cadena_array);




//console.log(cine[0][1]);
//console.log(cine[1][2]);