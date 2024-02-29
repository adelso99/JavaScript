'use strict'

// Plantillas de texto

var nombre = prompt("METE TU NOMBRE");
var apellidos = prompt("METE TU APELLIDOS");

//var texto = "Mi nombre es: "+ nombre+ " Mis Apellidos son: "+ apellidos;
var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mis apellidos es: ${apellidos}</h3>



`;

document.write(texto);