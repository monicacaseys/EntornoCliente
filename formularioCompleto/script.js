"use strict";

var nombre = document.getElementById('nombre');
var apellido1 = document.getElementsByName('apellido1') [0];
var email = document.getElementById('correo');
var contrasena = document.querySelector('.contrasena');
var edad = document.getElementsByName('edad') [0];
var pais = document.getElementById('pais');
var genero = document.querySelector('input[name="genero"]:checked');
var terminos = document.getElementById("terminos").checked;


document.addEventListener("DOMContentLoaded", function(event){

    console.log(email);
    nombre.focus();
    nombre.addEventListener("blur", function(){validarNombre(nombre , "errorNombre")});
    apellido1.addEventListener("blur", function(){validarNombre(apellido1 , "errorApellido1")});
    document.getElementById('correo').addEventListener("blur", function(){validarEmail(email , "errorCorreo")});
    contrasena.addEventListener("blur", function(){validarContrasena(contrasena , "errorContrasena")});
    edad.addEventListener("input", function(){validarEdad(edad , "errorEdad")});
    pais.addEventListener("blur", function(){validarPais(pais , "errorPais")});
    genero.addEventListener("blur", function(){validarGenero(genero , "errorGenero")});
    terminos.addEventListener("blur", function(){validarTerminos(terminos , "errorTerminos")});

 

})


function validarNombre(campo, errorId){
    let error = document.getElementById(errorId);

   if(campo.value === "" || campo.value.length<2 || campo.value.length<2){
    error.innerHTML = "Introduce valor correcto";
    error.style.fontWeight='bold';
    error.style.fontSize='20px';
    error.style.fontStyle='italic';
    error.style.color='red';
   } else{
    error.innerHTML="";
}}

function validarEmail(campo, errorId) {
    let error = document.getElementById(errorId);
    if (campo.value === "") {
        error.innerText = "Por favor, ingresa tu correo electrónico.";
    } else if (campo.validity.typeMismatch) {
        error.innerText = "Por favor, ingresa una dirección de correo electrónico válida.";
    } else {
        error.innerText = "";
    }
}




function validarContrasena (campo, errorId){

    let error = document.getElementById(errorId);
    //añadir expresion regular para que tenga un nuemmro y un caracter
    if (campo.value === "" || campo.value.length < 8){
        error.innerHTML = "Tiene que tener al menos 8 caracteres";
        error.style.fontWeight='bold';
        error.style.fontSize='20px';
        error.style.fontStyle='italic';

    }else {
       error.innerHTML = "";
    }
}

function validarEdad (campo , errorId){
    let error = document.getElementById(errorId);
//expresion regular solo numeros
    campo.addEventListener ('input', function(){
        if ( campo.value === "" || campo.value.length > 2){
            campo.value = campo.value.slice(0, 2); // Limitar a 2 dígitos
            error.innerHTML = "Introduce solos 2 digitos";
            error.style.fontWeight='bold';
            error.style.fontSize='20px';
            error.style.fontStyle='italic';
        } else{
            error.innerHTML = "";
        }
    })
}

function validarPais(campo, errorId){
    let error = document.getElementById(errorId);

    if (campo.value = ""){
        error.innerHTML = "Selecciona un pais";
        error.style.fontWeight='bold';
            error.style.fontSize='20px';
            error.style.fontStyle='italic';
    } else{
        error.innerHTML = "";
    }

}

function validarGenero(campo, errorId){
    let error = document.getElementById(errorId);

    if (campo === null){
        error.innerHTML = "Selecciona un genero";
        error.style.fontWeight='bold';
        error.style.fontSize='20px';
        error.style.fontStyle='italic';
    } else{
        error.innerHTML = "";
    }
}

function validarTerminos( campo, errorId){
    let error = document.getElementById(errorId);

    if (campo != true){
        error.innerHTML = "Acepta las condiciones";
        error.style.fontWeight='bold';
        error.style.fontSize='20px';
        error.style.fontStyle='italic';
    } else{
        error.innerHTML = "";
    }
}

function validarFormulario() {
    validarNombre(nombre, 'errorNombre');
    validarNombre(apellido1, 'errorApellido1');
    validarEmail(email, 'errorEmail');
    validarContrasena(contrasena, 'errorContrasena');
    validarEdad(edad, 'errorEdad');
    validarPais(pais, 'errorPais');
    validarGenero(genero, 'errorGenero');
    validarTerminos(terminos, 'errorTerminos');

    // Verificar si no hay mensajes de error
    if (document.querySelectorAll('.error:empty').length === 8) {
        mostrarMensajeExito();
    } else {
        alert ("no");
    }
}

function mostrarMensajeExito() {
    alert("¡Registro exitoso!");
}
document.getElementById("registro").addEventListener("click", validarFormulario);