"use strict";
var nombre = document.getElementById("name");
var apellidoDiv = document.createElement('div');
var apellido1Label = document.createElement('label');
apellido1Label.textContent = 'Apellido 1';
var apellido1Input = document.createElement('input');
apellido1Input.type = 'text';
apellido1Input.id = 'apellido1';
apellido1Input.name = 'apellido1';
var apellido2Label = document.createElement('label');
apellido2Label.textContent = 'Apellido 2';
var apellido2Input = document.createElement('input');
apellido2Input.type = 'text';
apellido2Input.id = 'apellido2';
apellido2Input.name = 'apellido2'
var apellido1;


var email = document.getElementById("email");
var contrasenaInput = document.getElementsByName("password")[0];

var condiciones = document.getElementById('checkbox');

var colorSelect = document.getElementsByName ('selectedColor'); 

var textArea= document.getElementById('textarea');

var form = document.getElementById('myForm');


var boton = document.querySelector("button[type=button]");

var errorElement = document.createElement('span');
errorElement.className = "error-message";

let asteriscos="";
var selectCA=document.getElementById("selectCA");
var selectCiudad=document.getElementById("selectCity");

document.addEventListener('DOMContentLoaded', function () {
    /*
    EJERCICIO 1:   
    */

    nombre.addEventListener('blur', validarNombre);
    apellido2Input.addEventListener('blur', function () { validarApellidos(apellido1Input.value, apellido2Input.value) });

    email.addEventListener("blur", validarEmail);
    selectCA.addEventListener("blur",function(){validarSelectCA(selectCA.value)});
    selectCiudad.addEventListener("blur",function(){validarCiudad(selectCiudad.value)});
    //contraseña
    contrasenaInput.addEventListener('focus', function(){
        //cuando tiene el foco mostrar contraseña
        if (final !== undefined ){
            contrasenaInput.value = final;
        }
       
    });
    
    contrasenaInput.addEventListener('blur', function () {
        validarContraseña();
    });

    telefonoFijo.addEventListener('keypress', noLetras);
    telefonoMovil.addEventListener('keypress', noLetras);
    edad.addEventListener('keypress', noLetras);

    telefonoFijo.addEventListener('blur',validarTelefonoFijo);
    telefonoMovil.addEventListener('blur',validarTelefonoMovil);
    edad.addEventListener('blur',validarEdad);

    boton.addEventListener('click', validar);

})

function validarNombre() {
    var expresionNombre = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
    var nombreValue = nombre.value.trim();

    if (!expresionNombre.test(nombreValue)) {
        mostrarError(nombre, 'el nombre no me vale, pon otro');
        nombre.style.borderColor = 'red';
        console.log(nombreValue);
        nombre.focus();
    } else {
        limpiarError(nombre);
        meterApellidos();
    }
}

function validarApellidos(valor, valor2) {

    var apellidoPatron = /^[A-Z][a-z]*([-][A-Z][a-z]*)*$/;
    if (!apellidoPatron.test(valor)) {
        mostrarError(apellido2Input, "Apellidos 1 inválido.");
        apellido1Input.style.background = "red";
        apellido1Input.focus();
    } else {
        apellido1Input.style.background = '';
        if (!apellidoPatron.test(valor2)) {
            mostrarError(apellido2Input, "Apellidos 2 inválido.");
            apellido2Input.style.background = "red";
            apellido2Input.focus();
        } else {
            nombre.disabled = true;
            apellido1Input.disabled = true;
            apellido2Input.disabled = true;
            limpiarError(apellido2Input);
            apellido2Input.style.background = '';;
        }


    }
}

function mostrarError(elemento, mensaje) {
    errorElement.textContent = mensaje;
    errorElement.style.color = 'red';
    elemento.parentNode.insertBefore(errorElement, elemento.nextSibling);

}

function limpiarError(elemento) {
    var errorElement = elemento.parentNode.querySelector('.error-message');
    if (errorElement) {
        errorElement.parentNode.removeChild(errorElement);
    }
    elemento.style.borderColor = '';

}

function meterApellidos() {
    apellidoDiv.appendChild(apellido1Label);
    apellidoDiv.appendChild(apellido1Input);
    apellidoDiv.appendChild(apellido2Label);
    apellidoDiv.appendChild(apellido2Input);
    nombre.parentNode.insertBefore(apellidoDiv, nombre.nextSibling);
    apellido1Input.focus();
}

function validarEmail() {
    var emailPatron = /@cenec\.es$/;
    var valido = emailPatron.test(email.value);
    if (!valido) {
        mostrarError(email, "el correo debe ser corporativo(terminar en @cenec.es)");
        email.focus();
    } else {
        limpiarError(email);
        generarContrasena();
        contrasenaInput.focus();
    }
}

var final;
function generarContrasena() {

    var contrasenaNombre = nombre.value;
    var primeraLetraNombre = contrasenaNombre.charAt(0).toUpperCase();
    var contrasenaApellido1 = apellido1Input.value;
    var tresLetrasApellido1 = contrasenaApellido1.substring(0, 3).toLowerCase();
    var contrasenaApellido2 = apellido2Input.value;
    var primeraLetraApellido2 = contrasenaApellido2.charAt(0).toUpperCase();
    var numerosRandom = Math.floor(1000 + Math.random() * 9000);
    final = primeraLetraNombre + tresLetrasApellido1 + primeraLetraApellido2 + numerosRandom;

    contrasenaInput.value = final;

}

function validarContraseña(){
    var contrasenaValue = contrasenaInput.value;
   
    var patronContraseña = /[A-Z][a-z]{3}[A-Z][0-9]{4}$/;
    var valido = patronContraseña.test(contrasenaValue);
    
    if ( !valido) {
        mostrarError(contrasenaInput, "Contraseña no valida, sigue un patron.");
        contrasenaInput.focus();
    } else {
        asteriscos = "*".repeat(final.length);
        contrasenaInput.value = asteriscos;
        limpiarError(contrasenaInput);
       final=contrasenaValue;
    }
}
var array=undefined;

function validarSelectCA(valor){
    if(array!=undefined){
        selectCiudad.innerHTML="";
    }
    switch(true){
        case valor=="":
        mostrarError(selectCA,"Selecciona una opción válida");
        selectCA.focus();
        break;
        case valor=="Andalucia":
        limpiarError(selectCA);
        array=["Selecciona una ciudad","Almería", "Granada", "Málaga", "Jaén", "Córdoba", "Sevilla", "Cádiz", "Huelva"];
        break;
        case valor=="Extremadura":
        limpiarError(selectCA);
        array=["Selecciona una ciudad","Cáceres","Badajoz"];
        break;
        case valor=="CastillaLaMancha":
        limpiarError(selectCA);
        array=["Selecciona una ciudad","Albacete", "Ciudad Real", "Cuenca", "Guadalajara", "Toledo"];
        break;
        case valor=="Valencia":
            limpiarError(selectCA);
            array=["Selecciona una ciudad","Alicante", "Castellón", "Valencia"];
        break;
    }
    if(array!=undefined){
        selectCiudad.removeAttribute("disabled");
        for(let i=0;i<array.length;i++){
            let opcion=document.createElement("option");
            opcion.setAttribute("name",array[i]);
            opcion.innerHTML=array[i];
            selectCiudad.appendChild(opcion);
        }
    }
}

function validarCiudad(valor){
    if(valor=="Selecciona una ciudad"){
        mostrarError(selectCiudad,"Selecciona una ciudad válida");
        selectCiudad.focus();
    }else{
        limpiarError(selectCiudad);
    }
}

var telefono=document.querySelectorAll("input[name='telefono']");
var telefonoFijo=telefono[0];
var telefonoMovil=telefono[1];

var edad=document.querySelector("input[name='edad']");

function validarTelefonoFijo(){
    var expresion=/^952\d{6}$/;
    var valido=expresion.test(telefonoFijo.value);
    if(!valido){
        mostrarError(telefonoFijo,"telefono fijo incorrecto");
        telefonoFijo.focus();
    }else{
        limpiarError(telefonoFijo);
    }
}

function validarTelefonoMovil(){
    var expresion=/^[67]\d{8}$/;
    var valido=expresion.test(telefonoMovil.value);
    if(!valido){
        mostrarError(telefonoMovil,"telefono móvil incorrecto");
        telefonoMovil.focus();
    }else{
        limpiarError(telefonoMovil);
    }
}

function validarEdad(){
    if(edad.value<18){
        mostrarError(edad,"error:menor de edad");
        edad.focus();
    }else{
        limpiarError(edad);
    }
}

function noLetras(){
    var charCode= event.which;
     
    if (charCode > 57){
        event.preventDefault();
    }
}

function validar(){

    if(condiciones.checked) {

        if (nombre.value != "" || apellido1Input.value != "" || apellido2Input.value != "" 
        || email.value != "" || telefonoFijo.value != "" || telefonoMovil.value != ""){
 //color fondo           
var colorFondo = "pink"; // Valor por defecto

for (let i = 0; i < colorSelect.length; i++) {
    if (colorSelect[i].checked) {
        colorFondo = colorSelect[i].value;
        break;
    }
}

// Verificar si se seleccionó un color diferente de "pink"
if (colorFondo === "pink") {
    mostrarError(boton, "Debes seleccionar un color");
}

console.log('Color final:', colorFondo);

//capturar texarea
var textAreaValue = textArea.value.toLowerCase().trim();
var queEs;
if (textAreaValue === 'recomendacion'){
 queEs = "Recomendacion";
} else {
    queEs = "Sugerencia";
}

// Crear div con la información
var divInformacion = document.createElement('div');
 // Contenido del div con saltos de línea
 divInformacion.innerHTML = `Nombre: ${nombre.value}<br>
 Apellido1: ${apellido1Input.value}<br>
 Apellido2: ${apellido2Input.value}<br>
 Email: ${email.value}<br>
 Telefono Fijo: ${telefonoFijo.value}<br>
 Telefono Móvil: ${telefonoMovil.value}<br>
 Color: ${colorFondo}<br>
 Tipo: ${queEs}`;
// Pintar div
divInformacion.style.padding = "10px"; // Añadir espacio alrededor del contenido
divInformacion.style.marginBottom = "10px"; 
divInformacion.style.background = colorFondo;
form.parentNode.insertBefore(divInformacion, form.nextSibling);

        } else {
            mostrarError(boton, "Debes rellenar todos los campos");
        }
 
    } else {
        mostrarError(boton, "Condiciones aceptadas");
    }
}