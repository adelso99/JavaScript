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
// Al colocar => en vez de function
// al usar las funciones de flecha =>, al usar un parametro se quita los parentisis
// y si son dos parametros si se pone parentesis 
sumame(5, 7, dato =>{
    console.log("La suma es: ", dato);
},
dato =>{
    console.log("La suma por dos es: ", (dato*2));
});





/*console.log(
    sumame(4, 5)
);
*/