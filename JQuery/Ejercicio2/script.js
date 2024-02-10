"use strict";

$(document).ready(function(){
    // Al pulsar sobre “mostrar todas las fotos deben aparecer todas las fotos
    $('.show-photos').on('click',function(){
        $('.photos').css('display','flex');
    });
    // Al pulsar sobre “Ver fotos” se deberán mostrar las del bloque correspondiente.
    $('.see-photos').click(function(e) {
        e.preventDefault(); //el comportamiento predeterminado sería seguir el enlace
        //pero queremos evitar que eso suceda porque queremos mostrar u ocultar las fotos en su lugar.´
        //pero en vdd no hace falta solo por saber errores
        $(this).siblings('.photos').toggle();
        //los elementos hermanos del enlace clicado que tienen la clase .photos
      });
    
    // Al pulsar sobre ocultar tour se debe eliminar el bloque entero 
    $('.hide-tour').click(function() {
        $(this).closest('.tour').remove(); //closest seleciona el elemento mas cercano sin ser hermano solo el mas cercamo por eso siblings nos irve porque seleciona los hermanos mas cecanos
    });
    //Añade un botón debajo de cada Ver fotos para ocultar las fotos de cada sección.
     
    $('.see-photos').after('<a href="#" class="hide-photos">Ocultar fotos</a>'); //after añade despues
    $('.hide-photos').click(function() {
        $(this).siblings('.photos').css('display','none');
      });
    
})