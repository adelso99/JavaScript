'use strict'

/*
MOSTRAR TODOS LOS NUMEROS IMPARES QUE HAY ENTRE DOS NUMEROS INTRODUCCIDOS 
POR EL USUARIO
*/

var numero1 = parseInt(prompt('Introduce el Primer Numer', 0));
var numero2 = parseInt(prompt('Introduce el Segundo Numer', 0));

while(numero1 < numero2){
    numero1++;

    if(numero1%2 != 0){
        console.log("El "+numero1+" es impar")
    }
}


/* document.write("<h1>De "+numero1+" a "+numero2+" Estan estos Numeros Impares:</h1>")
for(var i = numero1; i <= numero2; i++){
    if (i % 2 !== 0){
    document.write(i+"<br/>");
}
}
*/