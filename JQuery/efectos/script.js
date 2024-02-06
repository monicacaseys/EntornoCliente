"use strict";


$(document).ready(function(){


/* Los tres primeros botones deben de ocultar mostrar y alternar el elementode ejemplo,
prueba las funciones con diferentes parámetros para lavelocidad. */
$('button:first').click(function(){
    $('div:first').hide('slow');
})


$('button:eq(1)').click(function(){
    $('div:first').show('fast');
})


$('button:eq(2)').click(function(){
    $('div:first').toggle('slow');
})


/* Prueba a realizar el mismo ejercicio anterior pero ahora cuando mostramos el elemento
en la función que se pasa como parámetro cámbiale el color de fondo a amarillo. */


$('button:eq(1)').click(function(){
    $('div:first').show('fast',function(){
        $('div:first').css('background-color','yellow');
    });
})


/* En el html hay un div con display a none, muestralo con la función slideDow() y
ocultala con slideUp(), prueba la función slideToggle con 5 segundo deretardo y
cambiale el color de fondo al elemento pero dentro de la misma función slideToggle. */


$('#btnSlideDown').click(function(){
    $('#cuadrado').slideDown();
});


$('#btnSlideUp').click(function(){
    $('#cuadrado').slideUp();
});


$('#btnSlideToggle').click(function(){
    $('#cuadrado').slideToggle('5', function(){
        $('#cuadrado').css('background-color','pink');
    })
});
/* Haz uso de los botones Desvanecer para probar las diferentes formas de usar
fadIn, fadeOut, fadeToggle y fadeTo. */
$('#btnFadeIn').click(function(){
    $('div:first').fadeIn();
})


$('#btnFadeOut').click(function(){
    $('div:first').fadeOut();
})


$('#btnFadeToggle').click(function(){
    $('div:first').fadeToggle();
})


$('#btnFadeTo').click(function(){
    $('div:first').fadeTo('12');
})


/* Utiliza el botón de animar para cambiarle el alto y el ancho al div del cuadrado. */
$('#btnAnimate').click(function(){
    $('#cuadrado').animate({
        width: '100px',  
        height: '200px'  
    });
});

});
