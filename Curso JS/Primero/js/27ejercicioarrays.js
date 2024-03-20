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