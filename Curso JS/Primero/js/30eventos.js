'use strict'

// Eventos 
// Funcion que se Ejecuta cuando sucede algo

// Eventos del Raton

window.addEventListener('load', () => {
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
        
        // Focus
        var input = document.querySelector("#campo_nombre");
        
        input.addEventListener('focus', function(){
        console.log("[focus] Estas haciendo foco dentro del Input");
        });
        
        // Blur
        input.addEventListener('blur', function(){
            console.log("[blur]Estas Fuera del Input");
        });
        
        // Keydown //String.fromCharCode(event) me dice que tecla estoy usando
        input.addEventListener('keydown', function(event){
            console.log("[keydown] Pulsando esta tecla ", String.fromCharCode(event.keyCode));
        });
        
        // Keypress
        input.addEventListener('keypress', function(event){
            console.log("[keypress] Tecla precionada", String.fromCharCode(event.keyCode));
        });
        
        // Keyup permite capturar el evento cuando se levanta el dedo de la tecla
        input.addEventListener('keyup', function(event){
            console.log("[keyup] Tecla soltada", String.fromCharCode(event.keyCode));
        });


}); // Final del Load

