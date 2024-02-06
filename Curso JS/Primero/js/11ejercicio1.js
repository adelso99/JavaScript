'use strict'

/*
PROGRAMA QUE PIDA DOS NUMEROS Y QUE NOS DIGA CUAL ES EL MAYOR,
EL MENOR Y SI SON IGUALES
*/

var numero1 = parseInt(prompt('Introduce el Primer NUmero', 0));
var numero2 = parseInt(prompt('Introduce el Segundo NUmero', 0));

console.log(numero1, numero2);

if(numero1 == numero2){
    alert("Los nuemros son iguales");

}else if(numero1 > numero2){
    alert("El numero mayor es: " + numero1);
    alert("El numero menor es: " + numero2);

}else if(numero2 > numero1){
    alert("El numero mayor es: " + numero2);
    alert("El numero menor es: " + numero1);
    
}else{
    alert("Introduce el Numero Correcto");
}