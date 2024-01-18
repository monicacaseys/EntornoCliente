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
var apellidoUsu1;
var apellidoUsu2;
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

      // Validar segundo apellido y realizar comprobaciones adicionales
      valor2.addEventListener('blur', function () {
        apellidoUsu2 = validarApellido(valor2);
        apellidoUsu1 = validarApellido(valor1);

        if (apellidoUsu1 !== null && apellidoUsu2 !== null) {
            // Ambos apellidos son válidos, ahora comprobar el campo nombre
            if (nombreUsu !== null) {
                // El nombre está completo, deshabilitar los campos
                deshabilitarCampos();
            }
        }
    });
/* El campo contraseña puede aceptar la contraseña generada o permitir una que cumpla
con el mismo patrón. Cuando pierda el foco deberá cambiar el valor por una fila de
asteriscos de igual longitud, pero si volvemos a tener el foco en el campo contraseña
debe aparecer la contraseña que existía antes de perder el foco. */
    //validar email y sacar contraseña
    correo.addEventListener('blur', function(){
        email = validarEmail(correo);
        if (email !== null) {
            // El correo es válido, generar y mostrar la contraseña
            contrasenaOriginal = generarContraseña();
            contraseña.value = contrasenaOriginal;
        } else {
            correo.focus();
        }
    })
     // Manejar el evento focus y blur del campo contraseña
     contraseña.addEventListener('focus', function () {
        // Cuando se tiene el foco, mostrar la contraseña original si existe
        if (contrasenaOriginal !== undefined) {
            contraseña.value = contrasenaOriginal;
        }
    });

    contraseña.addEventListener('blur', function () {
        // Cuando se pierde el foco, cambiar el valor por una fila de asteriscos si la contraseña existe
        if (contrasenaOriginal !== undefined) {
            let asteriscos = "*".repeat(contrasenaOriginal.length);
            contraseña.value = asteriscos;
        }
    });

    //validar fijo 
    telf1.addEventListener('blur', function () {
        valorTelf1 = validarFijo(telf1);
       
    });
    //validar movil 
    telf2.addEventListener('blur', function () {
        valorTelf2 = validarMovil(telf2);
       
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
    let nombreValor = campo.value.trim(); // quita espacion al principio y al final
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
function deshabilitarCampos() {
    nombre.disabled = true;
    valor1.disabled = true;
    valor2.disabled = true;
    boton.disabled = true;
}
/* El correo electrónico deberá ser corporativo, es decir solo se aceptará si tiene la extensión
@cenec.es. Cuando se valide que el correo es correcto se debe generar una contraseña
aleatoria y mostrarla en el campo de contraseña, además se le debe de dar el foco al
campo contraseña. La contraseña estará formada por la primera letra del nombre en
mayúscula, seguido de las primeras tres letras de su primer apellido y de la primera letra
en mayúscula de su segundo apellido. Para terminar le seguirán cuatro números
aleatorios. Ejemplo de contraseña BguiC3456. Si el correo no se validó se debe de avisar
con un mensaje de span y devolverle el foco */
function validarEmail(campo) {
    let emailValor = campo.value;
    let regex = /^[a-zA-Z0-9._-]+@cenec\.es$/;

    let contenedor = campo.nextSibling; //devuelve el siguiente nodo con respecto al indicado en la lista de nodos 
   
    if (!regex.test(emailValor)) {
        error.style.fontSize = "10px";
        error.style.color = "red";
        campo.style.borderColor = "red"; // Cambiar de nombre a campo
        error.style.fontWeight = "bold";
        error.innerHTML = 'El email tiene que ser corporativo.';
        contenedor.parentNode.insertBefore(error, contenedor); // Aquí lo inserto antes del elemento identificado
        campo.focus();
        return null;
    } else {
        error.textContent = '';
        campo.style.borderColor = ""; // Cambiar de nombre a campo
        return emailValor;
    }
}

function generarContraseña() {
    if (nombreUsu && apellidoUsu1 && apellidoUsu2) {
        let primeraLetraNombre = nombreUsu.charAt(0).toUpperCase();
        let tresPrimerasLetrasApellido1 = apellidoUsu1.substring(0, 3).toLowerCase();
        let primeraLetraApellido2 = apellidoUsu2.charAt(0).toUpperCase();
        let numerosAleatorios = Math.floor(Math.random() * 9000) + 1000;

        return primeraLetraNombre + tresPrimerasLetrasApellido1 + primeraLetraApellido2 + numerosAleatorios;
    } 
}


/* Para los teléfonos necesito que el primer campo sea un fijo de Málaga, con prefijo 952
y para el segundo campo que sea un móvil y por tanto debe comenzar por 6 o por 7. La
edad debe ser superior a 18. Se irá pasando el foco de uno a otro de los tres campos
siempre que se cumplan las condiciones mencionadas y si no es así se avisará con los
correspondientes errores. Es importante que no se permita escribir letras en ninguno de
los campos. */

function validarFijo(campo){
    let fijoValor = campo.value;
    let regex = /^952\d{6}$/;

    let contenedor = campo.nextSibling; //devuelve el siguiente nodo con respecto al indicado en la lista de nodos 
   
    if (!regex.test(fijoValor)) {
        error.style.fontSize = "10px";
        error.style.color = "red";
        campo.style.borderColor = "red"; // Cambiar de nombre a campo
        error.style.fontWeight = "bold";
        error.innerHTML = 'Tiene que ser un numero fijo.';
        contenedor.parentNode.insertBefore(error, contenedor); // Aquí lo inserto antes del elemento identificado
        campo.focus();
        return null;
    } else {
        error.textContent = '';
        campo.style.borderColor = ""; // Cambiar de nombre a campo
        return fijoValor;
    }
}

function validarMovil(campo){
    let movilValor = campo.value;
    let regex = /^[67]\d{8}$/;

    let contenedor = campo.nextSibling; // Devuelve el siguiente nodo con respecto al indicado en la lista de nodos 

   
    campo.addEventListener('keypress', function (event) {
        // Obtener el código ASCII de la tecla presionada
        let charCode = event.which || event.keyCode;

        // Permitir solo dígitos numéricos
        if (charCode < 48 || charCode > 57) {
            event.preventDefault();
        }
    });

    campo.addEventListener('blur', function () {
        // Limpiar el valor de cualquier caracter no numérico
        let numericValue = campo.value.replace(/\D/g, "");


    if (!regex.test(movilValor)) {
        error.style.fontSize = "10px";
        error.style.color = "red";
        campo.style.borderColor = "red"; // Cambiar de nombre a campo
        error.style.fontWeight = "bold";
        error.innerHTML = 'Tiene que ser un numero movil.';
        contenedor.parentNode.insertBefore(error, contenedor); // Aquí lo inserto antes del elemento identificado
        campo.focus();
        return null;
    } else {
        error.textContent = '';
        campo.style.borderColor = ""; // Cambiar de nombre a campo
        return movilValor;
    }
});
}

function validarEdad(){

}
/* Cuando el select de las comunidades autónomas pierda el foco debemos de activar y
rellenar el select de las ciudades. Crearemos un array dentro de nuestro script con las
ciudades de cada comunidad autónoma y cuando la comunidad pierda el foco
cargaremos en el select de ciudades las pertenecientes a dicha comunidad. Si
abandonamos el select de comunidades sin seleccionar ninguna nos avisará como un
error. Si al perder el foco se ha seleccionado alguna se habilita las ciudades, se cargan
los select correspondientes y se le pasa el foco. Al perder el foco el select de ciudades
debe tener una ciudad seleccionada, sino nos avisaría mediante error. */

/* Cuando pulse el botón enviar se debe validar en primer lugar que se han aceptado las
condiciones, sino es el caso se avisará de que el formulario solo se enviará en el caso de
aceptar las condiciones de uso. Si las condiciones están aceptadas se validarán que los
campos nombre, apellido1, apellido2, correo, contraseña y teléfonos están completos.
Además se recogerá en el caso de que se haya seleccionado algún color. Se comprobará
que además el campo comentario esté relleno y se analizará el contenido del text area.
En el text area comprobaremos si aparece la palabra reclamación o sugerencia. Una vez
comprobados todos los campos, si las verificaciones son correctas se deberá de añadir
un div con el fondo del color seleccionado, si no se seleccionó ninguno el fondo será rosa.
En el div aparecerá toda la información recogida en el formulario y en el comentario se
indicará si es una reclamación un comentario o una sugerencia. */