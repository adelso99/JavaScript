'use strict'

var categorias = ['accion', 'terror', 'comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

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

console.log(peliculas_string);




//console.log(cine[0][1]);
//console.log(cine[1][2]);