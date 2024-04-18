'use strict'

window.addEventListener('load', function(){
 //Timers    // setInterval se ejcuta constante y setTimeout cada cierto tiempo
       //var tiempo = this.setTimeout(function(){

    function intervalo(){
        var tiempo = setInterval(function(){
            //var tiempo = this.setTimeout(function(){
        
                console.log("Set del Intervalo");
        
                var encabezado = document.querySelector("h1");    
                if(encabezado.style.fontSize == "50px"){
                    encabezado.style.fontSize = "30px";
                }else{
                    encabezado.style.fontSize = "50px";
                }
        
               
            }, 1000);

            return tiempo;
    }
    
    var tiempo = intervalo();

   
    var stop = document.querySelector("#stop");

    stop.addEventListener("click", function(){
        alert("Has parado el Intervalo en Bucle");
        clearInterval(tiempo);
    });


    var start = document.querySelector("#start");
    start.addEventListener("click", function(){
        alert("Has inciado el Intervalo en Bucle");
        intervalo();
    });
});