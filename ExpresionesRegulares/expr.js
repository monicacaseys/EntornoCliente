'use strict';

var nombre = document.getElementById("nombre");
var apellido1 = document.getElementById("apellido1");
var apellido2 = document.getElementById("apellido2");
var edad = document.getElementById("edad");
var telefono = document.getElementById("telefono");
var expresion = document.getElementById("expresion");
var fecha = document.getElementById("fecha");
var user = document.getElementById("user");

expresion.tabIndex = 1;
nombre.tabIndex = 6;
apellido1.tabIndex = 3;
apellido2.tabIndex = 2;
edad.tabIndex = 5;
telefono.tabIndex = 4;

document.addEventListener("DOMContentLoaded", function (event) {
    
    nombre.addEventListener("blur", function () {
        validarNombre(nombre, "errorNombre");
    });
    apellido1.addEventListener("blur", function () {
        validarNombre(apellido1, "errorApellido1");
    });
    apellido2.addEventListener("blur", function () {
        validarNombre(apellido2, "errorApellido2");
    });

    correo.addEventListener("blur", function () {
        validarEmail(correo, "errorCorreo");
    });

    edad.addEventListener("input", function () {
        validarEdad(edad, "errorEdad");
    });

    telefono.addEventListener("input", function () {
        validarLongitud(telefono, "errorTelefono");
    });

    // Agregar evento de cambio para el campo "expresion"
    expresion.addEventListener("input", function () {
        validarExpresion(expresion, "errorExpresion");
    });

    fecha.addEventListener("blur", function () {
        validarFecha(fecha, "errorFecha");
    });

    user.addEventListener("blur", function () {
        validarUser(fecha, "errorUser");
    });

    // Agregar evento de clic para el botón "Registrar"
    var registroButton = document.getElementById("registro");
    registroButton.addEventListener("click", function (event) {
        event.preventDefault(); // Evitar el envío del formulario si la validación no es exitosa

        // Realizar cualquier otra lógica que desees al hacer clic en el botón "Registrar"
    });
});

function validarNombre(campo, errorId) {
    let error = document.getElementById(errorId);

    if (campo.value.length < 2 || campo.value.length > 20) {
        error.innerHTML = "Introduce un valor correcto";
        error.style.color = 'red';
        error.style.fontWeight = 'bold';
        error.style.fontSize = '20px';
        error.style.fontStyle = 'italic';
        campo.focus();
    } else {
        error.innerHTML = "";
    }
}

function validarEdad(campo, errorId) {
    let error = document.getElementById(errorId);

    campo.addEventListener('input', function () {
        campo.value = campo.value.replace(/\D/g, ''); // Eliminar caracteres no numéricos
        if (campo.value.length > 2) {
            campo.value = campo.value.slice(0, 2); // Limitar a 2 dígitos
        }
        if (campo.value.length > 2) {
            error.innerHTML = "Solo se pueden introducir 2 dígitos numéricos";
        } else {
            error.innerHTML = "";
        }
    });
}

function validarLongitud(campo, errorId) {
    let error = document.getElementById(errorId);

    campo.addEventListener('input', function () {
        campo.value = campo.value.replace(/\D/g, ''); // Eliminar caracteres no numéricos
        if (campo.value.length > 9) {
            campo.value = campo.value.slice(0, 9); // Limitar a 9 dígitos
        }
        if (campo.value.length > 9) {
            error.innerHTML = "Solo se pueden introducir 9 dígitos numéricos";
        } else {
            error.innerHTML = "";
        }
    });
}

function validarEmail(campo, errorId) {
    let error = document.getElementById(errorId);
    let patron = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2-3}$/; //la repeticion se hace con los + o con los {}

    if (!patron.test(campo.value)) {
        error.innerHTML = "Introduce una dirección de correo electrónico válida";
        error.style.color = 'red';
        error.style.fontWeight = 'bold';
        error.style.fontSize = '20px';
        error.style.fontStyle = 'italic';
    } else {
        error.innerHTML = "";
    }
}
function validarFecha(campo, errorId) {
    let error = document.getElementById(errorId);
    let patron = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-20(20|21|22|23|24|25|26|27|28|29)$/; //la repeticion se hace con los + o con los {}

    if (!patron.test(campo.value)) {
        error.innerHTML = "Introduce una fecha válida dd-mm-yyyy";
        error.style.color = 'red';
        error.style.fontWeight = 'bold';
        error.style.fontSize = '20px';
        error.style.fontStyle = 'italic';
    } else {
        error.innerHTML = "";
    }
}

function validarUser(campo, errorId) {
    let error = document.getElementById(errorId);
    let patron = /^(DAM|DAW)(20\d{2})([a-z]+)$/; //la repeticion se hace con los + o con los {}

    if (!patron.test(campo.value)) {
        error.innerHTML = "Introduce un username valido";
        error.style.color = 'red';
        error.style.fontWeight = 'bold';
        error.style.fontSize = '20px';
        error.style.fontStyle = 'italic';
    } else {
        error.innerHTML = "";
    }
}



/* function validarUsuario(campo, errorId) {
    let error = document.getElementById(errorId);
    let patron = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2-3}$/; //la repeticion se hace con los + o con los {}

    if (!patron.test(campo.value)) {
        error.innerHTML = "Introduce un usuario válido";
        error.style.color = 'red';
        error.style.fontWeight = 'bold';
        error.style.fontSize = '20px';
        error.style.fontStyle = 'italic';
    } else {
        error.innerHTML = "";
    }
} */


//expresiones logicas
/* let error = document.getElementById("errorExpresion");
let patron = /azul|rojo/;
if(!patron.test(expresion.value)){
    error.innerHTML= "debe introducir valor correscto";
} else {
    error.innerHTML = "Es correcta";
} 
let error = document.getElementById("errorExpresion");
let patron = /^[a-z]{3}$/;
if(!patron.test(expresion.value)){
    error.innerHTML= "debe introducir valor correscto";
} else {
    error.innerHTML = "Es correcta";
}*/

