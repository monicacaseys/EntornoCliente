"use strict";

$(document).ready(function(){
    // Selecciona todos los elementos .item que no tienen la clase .special y ocúltalos.
  //  $('.item').not('.special').hide();

    // Selecciona todos los elementos .special y cambia su fondo a verde.
    $('.special').css('background-color', 'green');

    // Selecciona el segundo elemento .item y añade la clase .highlight.
    $('.item:eq(1)').addClass('highlight');

    // Selecciona los elementos .item del índice 2 al 4 y cambia su borde a rojo.
    $('.item:gt(1):lt(4)').css('border','1px solid red');
})