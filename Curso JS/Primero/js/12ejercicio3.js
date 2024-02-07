'use strict'
/*
HACER UN PROGRAMA QUE MUESTRE TODOS LOS NUMEROS ENTRE DOS NUMEROS
INTRODUCIDOS POR EL USUARIO
*/

var numero1 = parseInt(prompt('Introduce el Primer Numer', 0));
var numero2 = parseInt(prompt('Introduce el Segundo Numer', 0));

document.write("<h1>DE"+numero1+" a "+numero2+" Estan estos Numeros:</h1>")
for(var i = numero1; i <= numero2; i++){
    document.write(i+"<br/>");
}
/*
// VERFICACION DE LOS NUMEROS

if(isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt('Introduce el Primer Numer', 0));
    numero2 = parseInt(prompt('Introduce el Segundo Numer', 0));

}else{
    //Muestra todos los numeros entre los dos nuemros ingresados por el usuario
    var resultado = "Los Numeros entre: " + numero1 + " y " + numero2 + " son:\n";

// Determinacion de numero mas pequeño y el mas grande
    var inicio = numero1 < numero2 ? numero1 : numero2;
    var fin = numero1 < numero2 ? numero1 : numero2;


    //Numero mas pequeñi hasta el Numero mas grande
    for (var i = inicio; i <= fin; i++){
        resultado += i + "\n";
    }

    //Muestra los Numeros
    alert(resultado);

}
*/