'use strict'

// Localstorage -- guarda informacion en nuestro navegador web
// que se quede guardado a modo que se vaya usando

//Probar si el localstore esta disponible en nuestro navegador web
if(typeof(Storage) !== 'undefined'){
    console.log("Localstorage disponible");
   
}else{ 
    console.log("Incompatible con Localstorage");
}

// Guardar datos en el navegador del  localstorage
localStorage.setItem("Titulo", "Vamos en el curso");

// recuperar elemento
document.querySelector("#peliculas").innerHTML= localStorage.getItem("Titulo");

// guardar objetos con JSON
var usuario = {
    nombre: "Adelso Hernandez",
    email: "adelso99@gmail.com",
    web:   "http//www.adelso99.com"
}

localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#datos").append(userjs.web+" - "+userjs.nombre);

//localStorage.removeItem("usuario");
localStorage.clear();