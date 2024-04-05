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


// Conseguir elementos por su etiqueta
var todoslosdivs= document.getElementsByTagName('div');

//todoslosdivs.forEach((valor, indice) => {
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

var valor;
for(valor in todoslosdivs){
 if(typeof todoslosdivs[valor].textContent == 'string'){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todoslosdivs[valor].textContent);
    parrafo.append(texto);
    seccion.append(parrafo);
    }
}
seccion.append(hr);

//var contenidoentexto = todoslosdivs[2].textContent;
//contenidoentexto.innerHTML = "Nuevo texto";

//console.log(contenidoentexto);



// Conseguir elementos por su clase css
console.log(caja);