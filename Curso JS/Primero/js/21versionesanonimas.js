'use strict'
//FUNCIONES ANONIMAS
// Es una funcion que no tiene nombre 

/*var pelicula = function(nombre){
    return "la pelicula es: "+nombre;

}
*/



function sumame(numero1, numero2, sumaymuestra, sumapordos){
    var sumar = numero1 + numero2;

    sumaymuestra(sumar);
    sumapordos(sumar);

    return sumar;

}
sumame(5, 7, function(dato){
    console.log("La suma es: ", dato);
},
function(dato){
    console.log("La suma por dos es: ", (dato*2));
});





/*console.log(
    sumame(4, 5)
);
*/