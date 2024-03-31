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

function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1>Contenido de array "+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
    document.write("<li>"+elemento+"</li>");
});
    document.write("</ul>");
}

// 1. Pida 6 numeros en pantalla y los meta en un array

//definiedo array
//var numeros = [];
var numeros = new Array(6);
//var lenguajes = new Array("Node.js", "JS", "REACT", "PHP","HTML", "MySQL", "ORACLE");


//pidiedo el numero de arrays
for (var i = 0; i <= 5; i++){
    numeros[i] = parseInt(prompt("introduce un numero", 0));
    //numeros.push(parseInt(prompt("introduce un numero", 0)));
}




// 2. Mostrar el array entero (todo sus elementos) 
// en el cuepo de la pagina y en la consola

//definiedo para que muestre en la pagina
mostrarArray(numeros);

// definiedo que muestre en consola
console.log(numeros);

//for(let lenguaje in lenguajes){}
//console.log(lenguajes);



//3. Ordenarlo y mostrarlo
//(function (a, b){return a-b} ordena de forma asendente
numeros.sort(function (a, b){return a-b}); //permite ordenar el array de reversa
mostrarArray(numeros, 'ordenado');


//4. Invertir su orden y mostrarlo
numeros.reverse(); //permite ordenar el array de reversa

mostrarArray(numeros, 'revertido');
//console.log(numeros);




//5. Mostrar cuantos elementor tiene el array
document.write("<h1>Elementos del Array: "+numeros.length+" elementos"+"</h1>");

//document.write("<h1>"+"Elementos del Array"+"</h1>")
//document.write("<li>"+lenguajes.length+"</li>");
//   document.write("</ul>");


//6. Busqueda de un valor introducido por el usuario, que nos diga si lo
//encuentra y su indice (se valorara el uso de funciones)
var busqueda = parseInt(prompt("Busca un numero", 0));

var posicion = numeros.findIndex( numero => numero == busqueda);

if(posicion && posicion != -1){
        document.write("<hr/><h1>Encontrado</h1>");
        document.write("<h1>Posicion de la busqueda: "+posicion+"</h1><hr/>");
}else{
        document.write("<hr><h1> No Encontrado</h1><hr/>");
}


/*
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

*/