'use strict'

// Eventos 
// Funcion que se Ejecuta cuando sucede algo

// Eventos del Raton



function cambiarColor(){
    console.log("Me has dado Click");

    var bg =boton.style.background;

    if(bg == "green"){
        boton.style.background ="red";     
    }else{
        boton.style.background = "green";
    }
    
    boton.style.padding ="10px"; 
    boton.style.border ="1px solid #ccc";
    
    return true
}

var boton = document.querySelector("#boton");

//Evento Click que captura el doble Ciclk
boton.addEventListener('click', function(){
    cambiarColor();
});

// Mouse Over cambia de color al pasar el mouse
boton.addEventListener('mouseover', function(){
    boton.style.background = "#ccc";
});

// Mouse out cambia de color al salir el mouse
boton.addEventListener('mouseout', function(){
    boton.style.background = "black";
});

