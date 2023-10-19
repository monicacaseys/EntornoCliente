"use strict";

var tareaForm=document.getElementById("tareaForm");
var nuevaTarea=document.getElementById("nuevaTarea");
var listaTareas=document.getElementById("listaTareas");

tareaForm.addEventListener("submit",function(event){
event.preventDefault(); 

var tareaTexto =nuevaTarea.value.trim();
if(tareaTexto!==""){
    agregarTarea(tareaTexto);
}


});

function agregarTarea(texto){
    var tareaItem=document.createElement("li");
    tareaItem.innerHTML=`
    <span>${texto}</span>
    <button class="btn btn-danger btn-sm float-right" onclick="eliminarTarea(this)">Eliminar</button>
    <button class="btn btn-sucess btn-sm float-right" onclick="modificarTarea(this)">Modificar</button>`;

    listaTareas.appendChild(tareaItem);
}

function eliminarTarea(boton){

    var tareaItem= boton.parentElement;
    listaTareas.removeChild(tareaItem);

}

function modificarTarea(element) {
    var tareaItem = element.parentElement;
    var tareaSpan = tareaItem.querySelector("span");

    // Crear un campo de entrada para la edición
    var inputEdicion = document.createElement("input");
    inputEdicion.type = "text";
    inputEdicion.value = tareaSpan.textContent;

    // Reemplazar el texto estático con el campo de entrada
    tareaItem.replaceChild(inputEdicion, tareaSpan);

    // Crear un botón "Guardar" para confirmar la edición
    var botonGuardar = document.createElement("button");
    botonGuardar.className = "btn btn-success btn-sm float-right";
    botonGuardar.textContent = "Guardar";

    // Manejar el evento click del botón "Guardar"
    botonGuardar.addEventListener("click", function () {
        // Actualizar el contenido del elemento span con el nuevo valor del campo de entrada
        tareaSpan.textContent = inputEdicion.value;

        // Remover el campo de entrada y el botón "Guardar"
        tareaItem.removeChild(inputEdicion);
        tareaItem.removeChild(botonGuardar);
    });

    tareaItem.appendChild(botonGuardar);
}
