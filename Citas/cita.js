"use strict";

var nombre = document.getElementById("nombre");
var fecha = document.getElementById("fecha");
var hora = document.getElementById("hora");
var duracion = document.getElementById("duracion");
var formulario = document.getElementById("formulario");
var selectTipoCita = document.createElement("select");
var errorNombre = document.getElementById("errorNombre");
var errorFecha = document.getElementById("errorFecha");
var errorHora = document.getElementById("errorHora");
var errorTiempo = document.createElement("span");
var relojElement = document.createElement("div");
var boton = document.getElementById("confirmar");

//si en vez de crear el es span en el html lo creo aqui los mensajes de error: var errorNombre = document.createElement("span");


document.addEventListener("DOMContentLoaded", function () {
  cargarTipoCita();
  cargarTiempoEstimado();
  nombre.addEventListener("blur", validarNombre);
  fecha.addEventListener("blur", validarFecha);
  hora.addEventListener("blur", validarHora);
  duracion.addEventListener("blur", validarDuracion);
});

function validarNombre() {
  var patron = /^[a-zA-Z]+$/;
  if (!patron.test(nombre.value)) {
    errorNombre.innerHTML = "Introduzca un valor correcto";
  } else {
    errorNombre.innerHTML = "";
  }
}

function validarFecha() {
  var patronFecha = /^\d{4}-\d{2}-\d{2}$/; // Formato yyyy-mm-dd
  if (!patronFecha.test(fecha.value)) {
    errorFecha.innerHTML = "Introduzca una fecha válida (yyyy-mm-dd)";
  } else {
    errorFecha.innerHTML = "";
  }
}

function validarHora() {
  var patronHora = /^\d{2}:\d{2}$/;
  if (!patronHora.test(hora.value)) {
    errorHora.innerHTML = "Introduzca una hora válida (hh:mm)";
  } else {
    errorHora.innerHTML = "";
  }
}

function cargarTipoCita() {
  formulario.appendChild(selectTipoCita);
  selectTipoCita.id = "tipoCita";
  selectTipoCita.className = "form-control";

  var opciones = ["Médica", "Legal", "Reunión"];
  for (var i = 0; i < opciones.length; i++) {
    var option = document.createElement("option");
    option.value = opciones[i].toLowerCase();
    option.text = opciones[i];
    selectTipoCita.appendChild(option);
  }

  var selectContainer = document.getElementById("selectContainer");
  selectContainer.appendChild(selectTipoCita);
}

function cargarTiempoEstimado() {
  relojElement.id = "reloj";
  document.body.appendChild(relojElement);
  duracion.parentNode.insertBefore(errorTiempo, duracion.nextSibling); //duracion.parentNode.insertBefore(nuevoNodo, nodoDeReferencia.nextSibling);
}

function validarDuracion() {
  var tiempo = parseInt(duracion.value);

  if (isNaN(tiempo) || tiempo < 5 || tiempo > 60) {
    errorTiempo.id = "errorTiempo";
    errorTiempo.style.color = "red";
    errorTiempo.textContent = "La duración debe estar entre 5 y 60 minutos.";
  } else {
    errorTiempo.textContent = "";
  }
}

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  if (nombre.value === "" || fecha.value === "" || hora.value === "") {
    alert("Por favor, complete correctamente los campos del formulario de reserva");
  } else {
    // Crea la fecha completa para la cita
    var fechaHoraCita = new Date(fecha.value + "T" + hora.value + ":00").getTime();

    // Actualizar el reloj cada segundo
    var intervalo = setInterval(actualizarReloj, 1000);

    Swal.fire({
      title: "Datos de la Cita",
      html: "Reserva realizada correctamente con los siguientes datos:\n" +
        "Nombre de la reserva: " + nombre.value + "<br/>" +
        "Fecha de la reserva: " + fecha.value + "<br/>" +
        "Hora de la reserva:  " + hora.value + "<br/>" +
        "Duración:  " + duracion.value + "<br/>" +
        "Gracias por realizar la reserva",
      icon: "success"
    });

    function actualizarReloj() {
      var ahora = new Date().getTime();
      var diferencia = fechaHoraCita - ahora;
      var horas = Math.floor(diferencia / (1000 * 60 * 60));
      var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

      relojElement.innerHTML = "Tiempo restante: " + horas + "h " + minutos + "m " + segundos + "s ";

      if (diferencia < 0) {
        clearInterval(intervalo);
        relojElement.innerHTML = "¡Es hora de la cita!";
      }
    }
  }
});
