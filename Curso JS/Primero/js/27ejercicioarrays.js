'use strict'

/*
1. Pida 6 numeros en pantalla y los meta en un array
2. Mostrar el array entero (todo sus elementos) 
en el cuepo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementor tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo
encuentra y su indice (se valorara el uso de funciones)
*/

// 1. Pida 6 numeros en pantalla y los meta en un array

var numeros = new Array(6);

for (var i = 0; i <= 5; i++){
    numeros[i] = parseInt(prompt("introduce un numero", 0));
}
console.log(numeros);



// 2. Mostrar el array entero (todo sus elementos) 
// en el cuepo de la pagina y en la consola
// otra forma de definir el array seria var lenguajes = ["Node.js", "JS", "REACT", "PHP","HTML", "MySQL", "ORACLE"]; de manera que se usan los "[]"
// en ves de "new array y los ()"
var lenguajes = new Array("Node.js", "JS", "REACT", "PHP","HTML", "MySQL", "ORACLE");

for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}

console.log(lenguajes);
document.write("</ul>");


//3. Ordenarlo y mostrarlo
lenguajes.sort(); //permite ordenar el array de reversa
console.log(lenguajes);


//4. Invertir su orden y mostrarlo
lenguajes.reverse(); //permite ordenar el array de reversa

console.log(lenguajes);



//5. Mostrar cuantos elementor tiene el array
console.log(lenguajes.length);
    
document.write("<h1>"+"Elementos del Array"+"</h1>")
document.write("<li>"+lenguajes.length+"</li>");
    document.write("</ul>");


//6. Busqueda de un valor introducido por el usuario, que nos diga si lo
//encuentra y su indice (se valorara el uso de funciones)

// Función para buscar un valor en el array
function buscarValor(array, valor) {
    // Buscar el valor en el array
    var indice = array.indexOf(valor);
    
    // Verificar si se encontró el valor
    if (indice !== -1) {
        // Si se encontró, mostrar el índice
        document.write("El valor '" + valor + "' se encuentra en el índice " + indice + " del array.");
    } else {
        // Si no se encontró, mostrar un mensaje de que no se encontró
        document.write("El valor '" + valor + "' no se encuentra en el array.");
    }
}

// Solicitar al usuario el valor a buscar
var valorABuscar = prompt("Introduce el valor a buscar:");

// Llamar a la función para buscar el valor introducido por el usuario
buscarValor(lenguajes, valorABuscar);