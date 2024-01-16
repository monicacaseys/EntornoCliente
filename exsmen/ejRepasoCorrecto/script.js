"use stric";
//recogemos los elementos del formulario que vamos a necesitar
var nombre = document.getElementById("name"); //como es id es Ãºnico 
var correo = document.querySelector("input[type=email]");//querySelector me devuelve el primer elemento coincidente //ClassName que me devuelve un array elijo la primera posiciÃ³n, el indice 0
var contraseña = document.getElementsByClassName("password")[0]; //como es id es Ãºnico
var telf1 = document.getElementsByName("telefono")[0];
var telf2 = document.getElementsByName("telefono")[1];
var comunidad = document.getElementById("selectCA")
var ciudad = document.getElementById("selectCity"); //ClassName que me devuelve en este caso el segundo elemento
var edad = document.getElementsByName('edad'); //En este caso me interesa que me devuelva la lista con todos los elementos de este nombre
var privacidad = document.getElementById("checkbox");//como es id es Ãºnico
var textarea = document.getElementById("textarea");
var error = document.createElement("span"); //creo mi elemento span que me servirÃ¡ para informar de errore
var boton = document.querySelector("button");//con querySelector me devuelve el primero. 
var apellido1 = document.createElement("label");
var valor1 = document.createElement("input");
var apellido2 = document.createElement("label");
var valor2 = document.createElement("input");

//variables para recoger los valores del formulario. 
var nombreUsu;
var apellidoUsu;
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
var contenedor;
var apellidosCreados = false;


document.addEventListener('DOMContentLoaded', function () {

    // Validar nombres
    nombre.addEventListener('blur', function () {
        nombreUsu = validarNombre(nombre);
    });

    apellido2.addEventListener('blur', function() {
        apellidoUsu = validarApellido(valor1,valor2)
    });
    // Validar formulario
    // boton.addEventListener('click', validar);
});

/* El campo nombre debe aceptar primera letra en mayúscula y el resto en minúsculas,
puede aceptar espacios y en el caso de aparecer el siguiente bloque debe de empezar
por mayúscula y seguir por minúscula. Se debe comprobar cuando pierda el foco y si no
es correcto se añadirá un mensaje de error justo debajo de la casilla, se pondrá el borde
del elemento en rojo y se le devolverá el foco. Si es correcto se añadirá desde el script
los capos apellido 1 y apellido 2 justo debajo. */

function validarNombre(campo) {
    let nombreValor = campo.value;
    let regex = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;

    let contenedor = campo.nextSibling; //devuelve el siguiente nodo con respecto al indicado en la lista de nodos 
   
    if (!regex.test(nombreValor)) {
        error.style.fontSize = "10px";
        error.style.color = "red";
        campo.style.borderColor = "red"; // Cambiar de nombre a campo
        error.style.fontWeight = "bold";
        error.innerHTML = 'El nombre debe tener la primera letra en mayúscula y el resto en minúsculas.';
        contenedor.parentNode.insertBefore(error, contenedor); // Aquí lo inserto antes del elemento identificado
        campo.focus();
        return null;
    } else {
        error.textContent = '';
        campo.style.borderColor = ""; // Cambiar de nombre a campo
       
        if (!apellidosCreados) {
            apellido1.textContent = "Apellido 1";
            contenedor.parentNode.insertBefore(apellido1, contenedor);
            contenedor.parentNode.insertBefore(valor1, contenedor);
            valor1.focus();
            apellido2.textContent = "Apellido 2";
            contenedor.parentNode.insertBefore(apellido2, contenedor);
            contenedor.parentNode.insertBefore(valor2, contenedor);

            apellidosCreados = true;
        }

        return nombreValor;
    }
}

/* Los apellidos seguirán el mismo patrón que el nombre pero en lugar de espacios se podrá
poner guiones. Se validarán los dos apellidos cuando se pierda el foco del segundo
elemento. Si fallan se pondrá el fondo del input en rojo, se lanzará un mensaje de error
justo debajo y se le dará el foco al primer apellido. Una vez validados los dos apellidos se
comprobará que el campo nombre está completo y se deshabilitarán los tres campos. */

function validarApellido(campo) {
    let apellidoValor = campo.value;
    let regex = /^[A-Z][a-z]*(-[A-Z][a-z]*)*$/;

    let contenedor = campo.nextSibling; //devuelve el siguiente nodo con respecto al indicado en la lista de nodos 
   
    if (!regex.test(apellidoValor)) {
        error.style.fontSize = "10px";
        error.style.color = "red";
        campo.style.borderColor = "red"; // Cambiar de nombre a campo
        error.style.fontWeight = "bold";
        error.innerHTML = 'El apellido debe tener la primera letra en mayúscula y el resto en minúsculas.';
        contenedor.parentNode.insertBefore(error, contenedor); // Aquí lo inserto antes del elemento identificado
        campo.focus();
        return null;
    } else {
        error.textContent = '';
        campo.style.borderColor = ""; // Cambiar de nombre a campo
        return apellidoValor;
    }
}