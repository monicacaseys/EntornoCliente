"use strict";

$(document).ready(function(){
    // 1. Muestra en un alert la cantidad de cursos por los que está compuesto el ciclo.
    var cantidadCursos = $('p').length;
        alert('El ciclo está compuesto por ' + cantidadCursos + ' cursos.');

    // 2. Muestra las listas al pasar por encima el ratón de Primero o Segundo y ocultar al retirarlo. Utiliza el método hover. Tardará en aparecer y desparecer la información 2 segundos.
    $('p').hover(function() {
        $(this).next('ul').delay(2000).slideDown('slow');
      }, function() {
        $(this).next('ul').delay(2000).slideUp('slow');
      });
    // 3. Despliega el contenido de las listas al pulsar la tecla y volver a plegar al pulsar Utilizar el método on. Se realizará de forma rápida.
     $(document).on('keydown', function(event) {
        if (event.which === 38) { // Flecha hacia arriba
          $('ul').slideDown('fast');
        } else if (event.which === 40) { // Flecha hacia abajo
          $('ul').slideUp('fast');
        }
      }); 
    // 4. Modifica el comportamiento anterior para poderlo hacer con una sola tecla.
     var teclaPresionada = false;
  $(document).on('keydown', function(event) {
    if (event.which === 38 && !teclaPresionada) { // Flecha hacia arriba
      $('ul').slideDown('fast');
      teclaPresionada = true;
    }
  }).on('keyup', function(event) {
    if (event.which === 38) { // Flecha hacia arriba
      $('ul').slideUp('fast');
      teclaPresionada = false;
    }
  });

    // 5. Elimina el efecto del punto 3.
  $(document).off('keyup');


    // 6. Vuelve a repetir el comportamiento del punto 4 pero ahora solo se producirá la primera vez que se pulse la tecla.
    $(document).one('keydown', function(event) {
        if (event.which === 38) { // Flecha hacia arriba
          $('ul').slideDown('fast');
        }
      });
    // 7. Al pasar el ratón por cada uno de los títulos de los módulos de segundo se mostrará la cantidad de horas semanales. Esta información emergente se mostrará a continuación de donde ubiquemos el ratón. Utiliza hover.
 /*    $('ul ul li').hover(function() {
        var horas = $(this).parent().data('hours');
        $('<span style="position:absolute;color:red;background-color:white;"> - ' + horas + ' horas semanales</span>').insertAfter($(this));
      }, function() {
        $(this).next('span').remove();
      }); */
    // 8. Ahora aparecerá el número de horas cuando el usuario haga clic sobre el nombre del módulo. Realiza una delegación de eventos utilizando on.
  /*   $('ul > li').on('click', function() {
        var horas = $(this).children('ul').data('hours');
        if (horas) {
          $(this).append('<span style="color:red;"> - ' + horas + ' horas semanales</span>');
        }
      }); */
    
    // 9. Modifica el ejercicio 8 para que al hacer click sobre el nombre aparezca el tipo de modalidad (presencial). Esta información será pasada a la función que trata el evento a través del método on.
    $('ul > li').on('click', function() {//LA PRIMERA ME LO IMPRIME BIEN Y EL RESTO ME LO IMPRIME VARIAS VECES
        var modalidad = 'presencial'; 
        $(this).append('<span style="color:blue;"> - ' + modalidad + '</span>');
      });
    
})