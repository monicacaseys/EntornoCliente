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
  var horaIngresada = hora.value;

  if (!patronHora.test(horaIngresada)) {
    errorHora.innerHTML = "Introduzca una hora válida (hh:mm)";
  } else {
    errorHora.innerHTML = "";

    var [horaValor, minutosValor] = horaIngresada.split(':');

    // Convertir los valores a números para comparar
    var horaNumero = parseInt(horaValor);
    var minutosNumero = parseInt(minutosValor);

    // Verificar si está en la franja horaria
    if ((horaNumero >= 10 && horaNumero < 14) || (horaNumero == 18 && minutosNumero >= 30) || (horaNumero == 19 && minutosNumero === 0)) {

      // Crear fecha completa para la cita. 'T' separa la fecha de la hora. getTime() representa esa fecha en milisegundos
      var fechaHoraCita = new Date(fecha.value + "T" + horaIngresada + ":00").getTime();

      // Actualizar el reloj cada segundo
      var intervalo = setInterval(actualizarReloj, 1000);

      function actualizarReloj() {
        var ahora = new Date().getTime();
        var diferencia = fechaHoraCita - ahora;
        var horas = Math.floor(diferencia / (1000 * 60 * 60));
        var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        relojElement.innerHTML = "Tiempo restante: " + horas + "h " + minutos + "m " + segundos + "s ";

        if (diferencia === 600000) {
          alert("Quedan 10 minutos para tu cita!");

        }
        if (diferencia < 0) {
          clearInterval(intervalo);
          relojElement.innerHTML = "¡Es hora de la cita!";
        }
      }
    } else {
      errorHora.innerHTML = "Introduzca un horario válido: de 10 a 14 y de 18:30 a 20:00";
    }
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
}

function validarDuracion() {
  var tiempo = parseInt(duracion.value);
  duracion.parentNode.insertBefore(errorTiempo, duracion.nextSibling); //duracion.parentNode.insertBefore(nuevoNodo, nodoDeReferencia.nextSibling);

  if (isNaN(tiempo) || tiempo < 5 || tiempo > 60) {
    errorTiempo.id = "errorTiempo";
    errorTiempo.style.color = "red";
    errorTiempo.textContent = "La duración debe estar entre 5 y 60 minutos.";
  } else {
    
    if(tiempo % 15 == 0){
      errorTiempo.textContent = "";
    }else{
      errorTiempo.textContent = "El tiempo tiene que ser multiplo de 15";
    }
  }
}

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  if (nombre.value === "" || fecha.value === "" || hora.value === "") {
    alert("Por favor, complete correctamente los campos del formulario de reserva");
  } else {


    Swal.fire({
      title: "Datos de la Cita",
      html: "Reserva realizada correctamente con los siguientes datos:\n" + "<br/>" +
        "Nombre de la reserva: " + nombre.value + "<br/>" +
        "Fecha de la reserva: " + fecha.value + "<br/>" +
        "Hora de la reserva:  " + hora.value + "<br/>" +
        "Duración:  " + duracion.value + "<br/>" +
        "Gracias por realizar la reserva",
      icon: "success"
    });


  }
});
