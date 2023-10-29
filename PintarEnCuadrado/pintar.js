"use strict";

var tabla = document.getElementById("cuadricula");
var colorSelect = 'white'; //color inicial

function pintar() {
    for (let i = 0; i < 20; i++) {
        let cuadricula = document.createElement("tr"); //crea la fila
        tabla.appendChild(cuadricula);
        for (let j = 0; j < 20; j++) {
            let cuadricula2 = document.createElement("td");  //crea la celda
            cuadricula.appendChild(cuadricula2);
            cuadricula2.style = "width:100px;height:20px;border-style:solid;border-width:2px;border-color:black;";
            cuadricula2.addEventListener("mouseover", function () {
                cuadricula2.style.backgroundColor = colorSelect;
            });
        }


    }
}
pintar();

function cambiarColor(color) {
    colorSelect = color;
}
var botonera = document.getElementById("botonera");
var colores = ['red', 'green', 'blue', 'pink', 'yellow', 'white'];

colores.forEach(color => {
    let boton = document.createElement("button");
    boton.textContent = color;
    boton.addEventListener('click', () => cambiarColor(color));
    botonera.appendChild(boton);
    boton.style = "width:100px;text-align:center";
    boton.style.backgroundColor = color;

})