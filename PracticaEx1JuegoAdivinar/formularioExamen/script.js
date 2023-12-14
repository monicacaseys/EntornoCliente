"use strict";
var nombre = document.getElementById('nombre');
var edad = document.getElementsByClassName('edad')[0];
var email = document.querySelector('input[type="email"]');
var intereses = document.getElementsByName('intereses')[0];


document.addEventListener("DOMContentLoaded", function(){
    nombre.focus();
    nombre.addEventListener("blur", function(){validarNombre(nombre)});
    edad.addEventListener("blur", function(){validarEdad(edad)});
    if (email) { // Verificar si el campo de correo electrónico existe
        email.addEventListener("blur", function () { validarEmail(email) });
    }
    const ultimaCategoria = obtenerCookie('ultimaCategoria');
    if (ultimaCategoria) {
      alert(`¡La última categoría seleccionada fue: ${ultimaCategoria}!`);
    }
    document.getElementById("registro").addEventListener("click", validarFormulario);
})

function validarNombre(campo){
    let valorCampo = campo.value;  // Obtén el valor del campo
    let error = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1));

    if (!error) {
      error = document.createElement('div');
      error.id = 'error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1);
      error.className = 'error';
      campo.parentNode.appendChild(error);
    }

    if(valorCampo === "" || valorCampo.length < 2 ){
        error.innerHTML = "Introduce un valor correcto";
        error.style.fontWeight='bold';
        error.style.fontSize='20px';
        error.style.fontStyle='italic';
        error.style.color='red';
    } else {
        error.innerHTML = "";
    }
}

function validarEdad(campo){
    let valorCampo = campo.value;  // Obtén el valor del campo
    let error = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1));

    if (!error) {
      error = document.createElement('div');
      error.id = 'error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1);
      error.className = 'error';
      campo.parentNode.appendChild(error);
    }

    let regex = /^\d+$/;
   
        if ( valorCampo === "" || valorCampo.length > 2 || !regex.test(valorCampo)){
            campo.value = valorCampo.slice(0, 2); // Limitar a 2 dígitos
            error.innerHTML = "Introduce solo 2 dígitos";
            error.style.fontWeight='bold';
            error.style.fontSize='20px';
            error.style.fontStyle='italic';
        } else {
            error.innerHTML = "";
        }
    ;
}

function validarEmail(campo){
    let valorCampo = campo.value;  // Obtén el valor del campo
    let error = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1));

    if (!error) {
      error = document.createElement('div');
      error.id = 'error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1);
      error.className = 'error';
      campo.parentNode.appendChild(error);
    }

    if (valorCampo === "") {
        error.innerText = "Por favor, ingresa tu correo electrónico.";
    } else if (campo.validity && campo.validity.typeMismatch) {
        error.innerText = "Por favor, ingresa una dirección de correo electrónico válida.";
    } else {
        error.innerText = "";  // Limpiar el mensaje de error
    }
}



// Función para generar la categoría de edad
function generarCategoriaEdad(edad) {
    return edad < 18 ? 'joven' : (edad < 65 ? 'adulto' : 'anciano');
  }

  // Función para generar un mensaje creativo
  function generarMensajeCreativo(nombre, edad, intereses) {
    const categoriaEdad = generarCategoriaEdad(edad);
    const interesesStr = intereses.length > 1 ? intereses.slice(0, -1).join(', ') + ' y ' + intereses.slice(-1) : intereses[0];
    return `¡Hola ${nombre}! A tus ${edad} años, eres oficialmente un ${categoriaEdad} apasionado por ${interesesStr}!`;
  }


  // Función para obtener el valor de una cookie
  function obtenerCookie(nombre) {
    const name = `${nombre}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return '';
  }
  function validarFormulario() {
    validarNombre(nombre);
    validarEmail(email);
    validarEdad(edad);
  
    let errores = document.querySelectorAll('.error:not(:empty)');
    if (errores.length === 0) {
        // Mostrar resultados en el DOM
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `
      <p>Nombre: ${nombre.value}</p>
      <p>Edad: ${edad.value}</p>
      <p>Correo: ${correo.value}</p>
      <p>Intereses: ${Array.from(intereses.selectedOptions, option => option.value).join(', ')}</p>
    `;

    // Crear mensaje creativo
    const mensajeCreativo = document.createElement('p');
    mensajeCreativo.textContent = generarMensajeCreativo(nombre.value, parseInt(edad.value), Array.from(intereses.selectedOptions, option => option.value));
    resultadosDiv.appendChild(mensajeCreativo);

    // Crear cookie con document.cookie para recordar la última categoría seleccionada
    document.cookie = `ultimaCategoria=${generarCategoriaEdad(parseInt(edad.value))}; expires=Sun, 31 Dec 2023 12:00:00 UTC; path=/`; 
    } else {
        alert("Por favor, revisa los campos marcados en rojo.");
    }
}
