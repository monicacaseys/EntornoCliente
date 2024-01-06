"use strict";
//recoger elementos del html
var nombre1 = document.getElementById('Nombre1');
var email1 = document.querySelector('input[type="email"]');
var element1 = document.getElementsByClassName('select')[0];
var nombre2 = document.getElementById('Nombre2');
var email2 = document.querySelectorAll('input[type="email"]')[1];
var element2 = document.getElementsByClassName('select')[1];
var edad = document.querySelector('input[name="playerOption"]:checked');
var guardar = document.getElementById("salvarPartida").checked;

document.addEventListener("DOMContentLoaded", function () {
    //eventos a añadir cuando se cargue la pagina y se cumplan los eventos

    nombre1.focus(); //primero foco en nombre
    //añadir eventos de comprobacion a cada campo
    nombre1.addEventListener("blur", function () { validadNombre(nombre1) });
    nombre2.addEventListener("blur", function () { validadNombre(nombre2) });
    if (email1) {
        email1.addEventListener("blur", function () { validarEmail(email1) });
    }
    if (email2) {
        email2.addEventListener("blur", function () { validarEmail(email2) });
    }
    element1.addEventListener("blur", function () { validarSelect(element1) });
    element2.addEventListener("blur", function () { validarSelect(element2) });

    edad.addEventListener("blur", function () { validarEdad(edad) })
    // evento para el boton enviar
    document.getElementsByClassName('btn')[0].addEventListener("click", validarFormulario);


//mostar la cookie (creo k esta mal contruida, no me acuerdo como har dos)
    const cookie1= localStorage.getItem('ultimaPartida1');
    const cookie2= localStorage.getItem('ultimaPartida2');
})


function validadNombre(campo) {
    let valorCampo = campo.value;
    //coger el error si existe
    let error = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1));
    //como no existe lo creo
    if (!error) {
        error = document.createElement('div');
        error.id = 'error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1);
        error.className = 'error';
        campo.parentNode.appendChild(error);
    }
    let regex = /[a-zA-ZáéíóúñÑ]/;
    if (valorCampo === "") {
        error.innerHTML = "Campo vacio";
        error.style.color = 'red';
        error.style.fontWeight = 'bold';
        campo.focus();
    } else if (!regex.test(valorCampo)) {
        error.innerHTML = "Campo mal escrito";
        error.style.color = 'red';
        error.style.fontWeight = 'bold';
        campo.focus();
    } else {
        error.innerHTML = "";
    }
}
function validarEmail(campo) {
    let valorCampo = campo.value;
    let error = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1));
    if (!error) {
        error = document.createElement('div');
        error.id = 'error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1);
        error.className = 'error';
        campo.parentNode.appendChild(error);
    }
    if (valorCampo === "") {
        error.innerHTML = "Campo vacio";
        error.style.color = 'red';
        error.style.fontWeight = 'bold';
        campo.focus();
    } else if (campo.validity && campo.validity.typeMismatch) {
        error.innerHTML = "Campo mal escrito. Ingrese direccion valida";
        error.style.color = 'red';
        error.style.fontWeight = 'bold';
        campo.focus();
    } else {
        error.innerHTML = "";
    }

}

function validarSelect(campo) {
    let valorCampo = campo.value;
    let error = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1));
    if (!error) {
        error = document.createElement('div');
        error.id = 'error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1);
        error.className = 'error';
        campo.parentNode.appendChild(error);
    }
    let selectedOptions = Array.from(campo.selectedOptions);
    if (selectedOptions.length < 1) {
        error.innerHTML = "Selecciona por lo menos una option";
        error.style.color = 'red';
        error.style.fontWeight = 'bold';
    } else {
        error.innerHTML = "";
    }

}

function validarEdad(campo) {
    let valorCampo = campo.value;
    let error = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1));
    if (!error) {
        error = document.createElement('div');
        error.id = 'error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1);
        error.className = 'error';
        campo.parentNode.appendChild(error);
    }
    if (valorCampo === null || valorCampo === undefined) {
        error.innerHTML = "Selecciona una option";
        error.style.color = 'red';
        error.style.fontWeight = 'bold';
    } else {
        error.innerHTML = "";
    }
}
//FALTA validar guardar partida y ahi si se guarda crear storage
var inputdado1 = document.getElementById('inputdado1');
var inputdado2 = document.getElementById('inputdado2');
function validarFormulario() {
    validadNombre(nombre1);
    validadNombre(nombre2);
    validarEmail(email1);
    validarEmail(email2);
    validarSelect(element1);
    validarSelect(element2);
    validarEdad(edad);
    //SELECIONO LOS ERRORES
    let errores = document.querySelectorAll('.error:not(:empty)');
    //sino hay errores se muestra partida
    if (errores.length === 0) {
        var tablero = document.getElementsByClassName('tablero')[0];
        tablero.style.visibility = 'inherit';
        //addevent a los botones-> la funcion que va a qui tiene que generar un numero random y cargar el nuevo valor 
   inputdado1.addEventListener("click", function(){generarPuntuacion(inputdado1)});
   inputdado2.addEventListener("click", function(){generarPuntuacion(inputdado2)});
   
    } else {
        //añadir mensajes al lado del boton
        errores.forEach(error =>{
            var divErrores = document.createElement("div");
            divErrores.textContent =error.value;

            //agergar div al contenedor
            var boton = document.getElementsByClassName('btn')[0];
            boton.parentNode.appendChild(divErrores);
        })
    }

}

function generarPuntuacion(input) { //sumar al random un 2 si es necesario y añadir ese valor al value del campo dado
    var puntuacion = numeroAleat(); //se recoge la puntuacion que ira en el input
//recoger el valor del option
    var player1 = Array.from(element1.selectedOptions, option => option.value);
    var player2 = Array.from(element2.selectedOptions, option => option.value);
//comparaciones patra la condicion
    if (player1 === 'agua' && player2 === 'fuego') {
        puntuacion += 2;
        alert("el jugador 1 tiene +2");
        input.value = puntuacion;
    }
    if (player1 === 'fuego' && player2 === 'madera') {
        puntuacion += 2;
        alert("el jugador 1 tiene +2");
        input.value = puntuacion;
    }
    if (player1 === 'madera' && player2 === 'agua') {
        puntuacion += 2;
        alert("el jugador 1 tiene +2");
        input.value = puntuacion;
    }

}

function numeroAleat() { //generar numero aleatorio del 1-6
    var numeroAleat = Math.floor(Math.random() * 7);
    return numeroAleat;
}

//construir la cookie
function validarGuardar(){
    if (guardar===true){
      localStorage.setItem('ultimaPartida1', generarPuntuacion(inputdado1));
      localStorage.setItem('ultimaPartida2', generarPuntuacion(inputdado2));
    }

}
