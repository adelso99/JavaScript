'use strict'

// DOM Document Object Model
function cambiacolor(color){
    caja.style.background = color;
}

//.innerHTML refleja en pantalla solo el texto
//var caja = document.getElementById("Mi caja");
var caja = document.querySelector("#Micaja");

caja.innerHTML = "Texto desde la CAJA EN JS"; 
caja.style.background = "blue"; 
caja.style.padding = "20px"; 
caja.style.color = "red"; 
caja.className = "Hola 2";

console.log(caja);