"use strict";

var tareaForm = document.getElementById("tareaForm");
var nuevaTarea = document.getElementById("nuevaTarea");
var listaTareas = document.getElementById("listaTareas");

tareaForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var tareaTexto = nuevaTarea.value.trim();
    if (tareaTexto !== "") {
        agregarTarea(tareaTexto);
    }


});

function agregarTarea(texto) {
    var tareaItem = document.createElement("li");
    tareaItem.innerHTML = `
    <span>${texto}</span>
    <button class="btn btn-danger btn-sm float-right" onclick="eliminarTarea(this)">Eliminar</button>
    <button class="btn btn-sucess btn-sm float-right" onclick="modificarTarea(this)">Modificar</button>`;

    listaTareas.appendChild(tareaItem);
}

function eliminarTarea(boton) {

    var tareaItem = boton.parentElement;
    listaTareas.removeChild(tareaItem);

}

function modificarTarea(boton) {
    var tareaItem = boton.parentElement; //cogemos el elemento padre
    var tareaTexto = tareaItem.querySelector("span").textContent; //te coge el elemento a cambiar
    var nuevoTexto = prompt("Modificar tarea: ", tareaTexto);
    if (nuevoTexto !== null && nuevoTexto!=="") { //pongo as dos por si acaso
        tareaItem.querySelector("span").textContent = nuevoTexto;
    }

}
