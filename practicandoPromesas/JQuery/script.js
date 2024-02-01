$(document).ready(function(){
//Selecciona todos los párrafos y cambia su texto a "Nuevo texto de párrafo".
    $('p').text('Nuevo texto'); 
// Selecciona el párrafo con el ID "paragraph1" y agrégale la clase "highlight".
    $('#paragraph1').addClass('highlight'); 
// Selecciona todos los elementos de lista (<li>) dentro del elemento <ul> y cambia su color de texto a verde
    $("ul li").css("color", "green");
//Selecciona el elemento de entrada de texto con el ID "username" y cambia su valor a "NuevoUsuario".
    $('#username').val("Nuevo Usuario");
// Al hacer clic en el botón con el ID "changeTextBtn", 
//cambia el texto de todos los párrafos a "¡Texto cambiado con clic!".
    $('#changeTextBtn').click(function(){
        $('p').text('texto CAMBIA CON CLICK!'); 
    });
// Selecciona todos los elementos de lista (<li>) y ocúltalos.
   $('li').hide();
 // Agrega un evento de clic a los párrafos para resaltarlos con un fondo amarillo cuando se hace clic 
 //y quitar el resaltado cuando se hace doble clic.
   $('p').click(function(){
     $(this).css("background-color", "yellow");
   }).dblclick(function(){
     $(this).css("background-color", "");
   });

// Selecciona todos los elementos de párrafo con la clase "paragraph" y agrega un borde de 2 píxeles de color rojo.
   $(".paragraph").css("border", "2px solid red");
// Selecciona el elemento ancla cuya clase empiece por "seg" y cambia el color del texto a amarillo. 
//EN VEZ DE TITLE TAMBIEN SIRVE CLASS
   $('a[title^=".seg"]').css('color', 'yellow');

// Cuando se pulse verificar, imprime por consola si hay algún checkbox seleccionado.
$("#verificarBtn").click(function () {
    $("input[type='checkbox']").each(function () {
      console.log($(this).prop("checked"));
    });
  });

// Todos los párrafos pares subrayados.
   $('p:even').css('text-decoration', 'underline');

// Los cuatro últimos párrafos con color de fondo verde.
  $('p:gt(-5)').css("background-color", "green");

// Los elementos del DOM que estén vacíos ponerles un texto (“texto para elementos vacíos”) en azul.
  $(':empty').text('texto para elementos vacíos').css('color', 'blue');

// Selecciona el div que contenga una ul y ponle un borde azul.
  $('div:has(ul)').css('border','2px solid blue');

// Oculta las descripciones de las imágenes.
  $("#galeria figcaption").hide();

// Al hacer clic en las imágenes se debe mostrar la descripción si está oculta, 
//si se da clic en otra se debe ocultar la descripción del elemento que no se pulsó.
   $('#galeria img').click(function(){
    var descripcion = $(this).next('figcaption');
    $('#galeria figcaption').not(descripcion).hide();
    descripcion.toggle();
   });
});