'use strict'
// $ siempre hace referencia a jQueri en resumen "jQuery = $"
// selector document
// metodo .ready hace refencia a un evento

$(document).ready(function(){
    //console.log("Estamos Listo!!");

    // Selector de ID
    $("#rojo").css("background", "red")
              .css("color", "white");
    //console.log(rojo);

    $("#amarillo").css("background", "yellow")
                 .css("color", "green");

    $("#verde").css("background", "green")
                 .css("color", "white");

    //Selector de Clases
    var mi_clase = $('.zebra').css("padding", "5px");
    //console.log(mi_clase.eq);
    //mi_clase.css("border", "5px dashed black");
    

    $('.sin_borde').click(function(){
        console.log("click dado!!");

        // como ya se tiene la clase de Stylee
        // al darle click o seleccionar actua el metodo addClass
        // y el selector this
        $(this).addClass('zebra');
    });


    // Selectores de Etiqueta
    var parrafos = $('p').css("cursor", "pointer");

    parrafos.click(function(){
        var that = $(this);

            if(!that.hasClass('grande')){
              that.addClass('grande');  
            }else{
                that.removeClass('grande');
            }
   });     

    //Selectores de Atributo
            $('[title="Google"]').css('background', '#ccc'); //ccc es un gris claro
            $('[title="Facebook"]').css('background', 'blue'); // blue es azul

    
});

// SIUU profes
// SIUU si
// SIUU vamos
// SIUU as
// SIUUasd
// SIUUasd
// SIUUasd
// SIUUasd
// SIUUasd
// SsdadasIUUasd
// vamos qporque qis
//equis

