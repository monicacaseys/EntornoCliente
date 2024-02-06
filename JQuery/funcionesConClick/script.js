
$(document).ready(function () {

    //Cuando pinche en el botón que pone “Haz click aquí” deberemos seleccionar 
    //el checkbox anterior e imprimir por consola el valor de antes de cambiarlo y después del cambio.
    $('.clicame').click(function () {
        console.log($('#checkbox').prop('checked')); //me meustra como esta
        $('#checkbox').prop('checked', false); //le pone la prpiedad como se la declaro
        console.log($('#checkbox').prop('checked'));
    });

    //Elimina el botón que pone eliminame al hacer click en el.
    $('button:nth-child(1)').click(function () {
        $(this).remove();
    });

    //Elimina todo el contenido del div que pone “Este div enetero debe desaparecer.
    //$('div:nth-child(1)').empty();
    $('div:eq(5)').empty();

    //Agrega la clase lista al elemento #anadirClase cuando se haga click sobre el.
    $('#anadirClase').click(function () {
        $(this).addClass('lista');
    })

    //Añade un parrafo debajo de la lista.
    $('ul').after('<p>holaaa</p>');

    // Añade otro texto encima del #container4
    $('#container4').before('<p>k pasa colega</p>');

    //Cambia los colores de letra en los párrafos pares a verde 
    //y en los impares a gris e imprime por consola los valores de ambos.
    $('p:nth-child(even)').css('color', 'green');
    $('p:nth-child(odd)').css('color', 'grey');

    //Inserta un elemento en el contenedor 3 y comprueba en el inspector que se ve antes que el texto
    var nuevoElemento = $('<div>Nuevo</div>');
    $('#container3').prepend(nuevoElemento);

    // Cambia el elemento “Cámbiame de clase” y ponle una clase al pinchar sobre el y si yala tiene quitasela.
    $('#cambiameDeClase').click(function () {
        $(this).toggleClass('miClase');
    });

    //Elimina el Item3 de la lista final.
    $('li:eq(2)').remove(); //empieza en 0

    //Al pulsar el bonton “Cambia el href del ancla anterior”. Cambia el ancla para que dirija awww.ejemplo.com
    $('#cambiaHref').click(function(){
        $('a:first').attr('href','www.ejemplo.com');
    });

    /*    Recorre los elementos de la lista mostrando en consola el contenido y el número deelemento 
       es decir debe de salir en consola
    Item 0: Item 1
    Item 1: Item 2
    El tercer item en principio estaría eliminado sino debe aparecer aquí 
    var numero = $('li').length;
    for (let i=0; i<numero; i++){
        console.log(`item${i} : ${$(`li:nth-of-type(${i+1})`)}`);
    }*/
    //otra forma
    $('li').each(function (index) {
        console.log('Item ' + index + ": " + $(this).text());
    });

   // Al pulsar en el botón Elimina href, elimina el atributo href delelemento ancla anterior
   $('.EliminaHref').click(function(){
    $('a:last').removeAttr('href');
   });

   //Al pulsar el el boton “Cambia el valor del input” se debecambiar el valor del input anterior 
   //y mostrarlo en unconsole.log.
   $('button:eq(1)').click(function(){
    $('#inputField').val('mivalor');
   console.log( $('#inputField').val());
   })

   //Después del div “InsertarDespues” inserta un párrafo con eltexto que quieras.


   //Busca el elemento con la clase highlight y eliminala.
   $('.highlight').removeClass('highlight');

})
