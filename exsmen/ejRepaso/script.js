"use stric";
//recogemos los elementos del formulario que vamos a necesitar
var nombre = document.getElementById("nombre"); //como es id es Ãºnico 
var correo = document.querySelector("input[type=email]");//querySelector me devuelve el primer elemento coincidente //ClassName que me devuelve un array elijo la primera posiciÃ³n, el indice 0
var contraseña = document.getElementById("contrasena"); //como es id es Ãºnico
var telf1 = document.getElementById("telefono1");
var telf2 = document.getElementById("telefono2");
var comunidad = document.getElementsByClassName("select")[0];
var ciudad = document.getElementsByClassName("select")[1]; //ClassName que me devuelve en este caso el segundo elemento
var edad = document.getElementsByName('edad'); //En este caso me interesa que me devuelva la lista con todos los elementos de este nombre
var privacidad = document.getElementById("privacidad");//como es id es Ãºnico
var sugerencia = document.getElementById("sugerencia");
var error = document.createElement("span"); //creo mi elemento span que me servirÃ¡ para informar de errore
var boton = document.querySelector("button");//con querySelector me devuelve el primero. 

//variables para recoger los valores del formulario. 
var nombreUsu;
var email;
var contraseñaUsu;
var valorTelf1;
var valorTelf2;
var comunidadValor = "default";
var ciudadValor = "default";
var privacidadCheck;
var edadUsu;
var colorElegido;
var esSugerencia;
var contenedor; // Declarar la variable contenedor

document.addEventListener('DOMContentLoaded', function () {

    // Cookies que guardan el color de fondo seleccionado por el usuario
    if (localStorage.getItem('colorFondo') !== null) {
        console.log('El usuario eligió el color de fondo: ' + localStorage.getItem('colorFondo'));
    }

    // Validar nombres
    nombre.addEventListener('blur', function () {
        nombreUsu = validarNombre(nombre);
    });

    correo.addEventListener('blur', function () {
        email = validarCorreo(correo);
    });
    contraseña.addEventListener('blur', function () {
        contraseñaUsu = validarContraseña(contraseña);
    });

    // Validar teléfonos
    telf1.addEventListener('blur', function () {
        valorTelf1 = validarTelefono(telf1);
    });

    telf2.addEventListener('blur', function () {
        valorTelf2 = validarTelefono(telf2);
    });
     // Capturar el valor de los elementos
     comunidad.addEventListener('change', function () {
        comunidadValor = comunidad.value;
    });

    ciudad.addEventListener('change', function () {
        ciudadValor = ciudad.value;
    });
    var radios = document.querySelectorAll('input[name="colorFondo"]');
    radios.forEach(function (radio) {
        radio.addEventListener('change', function () {
            colorElegido = radio.value;
        });
    });
    // Validar formulario
    boton.addEventListener('click', validar);
});

function validarNombre(nombre1) {
    let nombre = nombre1.value;
    let expresion = /^[a-zA-ZáéíóúñÑ]+$/;
    let contenedor = nombre1.parentElement;

    if (!expresion.test(nombre)) {
        error.style.fontSize = "10px";
        error.style.color = "red";
        error.style.fontWeight = "bold";
        error.innerHTML = 'El nombre solo puede contener letras, espacios y vocales acentuadas.';
        contenedor.appendChild(error);
        nombre1.focus();
        return null;
    } else {
        error.textContent = '';
        return nombre;
    }
}

// Función para validar correo electrónico
function validarCorreo(correo1) {
    let correo = correo1.value;
    let expresion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let contenedor = correo1.parentElement;

    if (!expresion.test(correo)) {
        error.style.fontSize = "10px";
        error.style.color = "red";
        error.style.fontWeight = "bold";
        error.innerHTML = 'Debe introducir una dirección correcta';
        contenedor.appendChild(error);
        correo1.focus();
        return null;
    } else {
        error.textContent = '';
        return correo;
    }
}
// Función para validar contraseñas
function validarContraseña(contraseña1) {
    let pass = contraseña1.value;
    // Expresión regular que valida al menos 5 caracteres
    let expresion = /^.{5,}$/;
    let contenedor = contraseña1.parentElement;

    if (!expresion.test(pass)) {
        error.style.fontSize = "10px";
        error.style.color = "red";
        error.style.fontWeight = "bold";
        error.innerHTML = 'La contraseña debe tener al menos 5 caracteres.';
        contenedor.appendChild(error);
        contraseña1.focus();
        return null;
    } else {
        error.textContent = '';
        return pass;
    }
}

// Función para validar teléfonos
function validarTelefono(telefono) {
    let valorTelefono = telefono.value;
    // Expresión regular que valida solo números
    let expresion = /^\d+$/;
    let contenedor = telefono.parentElement;

    if (!expresion.test(valorTelefono)) {
        error.style.fontSize = "10px";
        error.style.color = "red";
        error.style.fontWeight = "bold";
        error.innerHTML = 'El teléfono solo puede contener números.';
        contenedor.appendChild(error);
        telefono.focus();
        return null;
    } else {
        error.textContent = '';
        return valorTelefono;
    }
}
function validar() {
    console.log('Validando...');
    var completo = true;
    var arrayErrores = [];
    var contenedor;
    if (!nombreUsu || !email ) {
        completo = false;
        arrayErrores.push(" El nombre y Correo es Obligatorio ");
    }
    if (!contraseñaUsu ) {
        completo = false;
        arrayErrores.push("contraseña ");
    }
    if ( !valorTelf1 || !valorTelf2 ) {
        completo = false;
        arrayErrores.push(" telefonos ");
    }
    if (!comunidadValor || !ciudadValor) {
        completo = false;
        arrayErrores.push(" cuidad y comunidad ");
    }


    if (!colorElegido || colorElegido === "default") {
        completo = false;
        arrayErrores.push(" Debe seleccionar un color de fondo ");
    } else {
        // Guardar el color de fondo elegido
        localStorage.setItem('colorFondo', colorElegido);
    }

    if (completo) {
        // Si está completo, enviar formulario
        alert('¡Todo correcto! Formulario enviado.');
    
    } else {
        contenedor = boton.parentElement;
        error.style.fontSize = "12px";
        error.style.color = "red";
        error.style.fontWeight = "bold";
        error.innerHTML = arrayErrores;
        contenedor.appendChild(error);
    }
}