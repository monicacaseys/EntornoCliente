"use strict";
var zona = document.getElementById("drop-zone");

function arrastrar(event) {
    //extraigo la id del elemento que estamos arrastrando
    var idImagen = event.target.id;
    //con este método estamos configurando los datos que vamos a conservar del objeto que estamos arrastrando
    event.dataTransfer.setData("text/plain", idImagen);
}
//cuando movemos el raton por la zona de drop 
//prevenimos el evento por defecto para que el navegador no entre en conflicto
//cambiamos el fondo a celeste.
function mover(event) {
    event.preventDefault();
    zona.style.background = "#89CFF0";
}

//cuando soltamos, prevenimos el evento
function soltar(event) {
    event.preventDefault();

    //recuperamos la id que hemos pasado desde el método arrastrar
    //y buscamos el elemento por su id
    var idelemento = event.dataTransfer.getData("text/plain");
    var elemento = document.getElementById(idelemento);


    // Verificar si hay tres elementos en el cuadro
    var elementosEnCuadro = zona.getElementsByClassName("draggable-item");
    if (elementosEnCuadro.length === 3) {
        // No permitir mover más elementos si ya hay tres en el cuadro
        return;
    }
     // Verificar si la imagen de Tristeza está dentro de la zona
     if (idelemento === "tristeza") {
        var iraEleemnt= document.getElementById("ira");
         iraEleemnt.draggable=true;
     }

    // Crear una nueva imagen con la misma ruta, el la misma clase, en este caso no será draggable
    //devolvemos el fondo al estado inicial
    var nuevaImagen = new Image();
    nuevaImagen.src = elemento.src;
    nuevaImagen.className = "draggable-item";
    nuevaImagen.draggable = false;
    zona.style.background = "initial";
    //para que las imagenes no se dupliquen extraemos el padre para poder usar la funcion removeChild
    var padre = elemento.parentNode;
    padre.removeChild(elemento);
    //eliminada la foto antigua le damos el mismo id a la nuva imagen y la insertamos. 
    nuevaImagen.id = idelemento;
    document.getElementById("drop-zone").appendChild(nuevaImagen);
}

function fondo(event) {
    event.preventDefault();
    zona.style.background = "initial";
}

