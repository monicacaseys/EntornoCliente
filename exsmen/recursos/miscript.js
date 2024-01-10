"use stric";
//recogemos los elementos del formulario que vamos a necesitar
var nombre1 = document.getElementById("Nombre1"); //como es id es Ãºnico 
var correo1 = document.querySelector("input[type=email]");//querySelector me devuelve el primer elemento coincidente
var elemento1 = document.getElementsByClassName("select")[0]; //ClassName que me devuelve un array elijo la primera posiciÃ³n, el indice 0
var nombre2 = document.getElementById("Nombre2"); //como es id es Ãºnico
var correo2 = document.querySelectorAll("input[type=email]")[1];//querySelectorAll me devuelve todos los elementos de tipo email y elegimos el segundo, el indice 1
var elemento2 = document.getElementsByClassName("select")[1]; //ClassName que me devuelve en este caso el segundo elemento
var opcionEdad = document.getElementsByName('playerOption'); //En este caso me interesa que me devuelva la lista con todos los elementos de este nombre
var salvarPartida = document.getElementById("salvarPartida");//como es id es Ãºnico
var error = document.createElement("span"); //creo mi elemento span que me servirÃ¡ para informar de errore
var boton = document.querySelector("button");//con querySelector me devuelve el primero. 



//variables para recoger los valores del formulario. 
var play1Nombre;
var play2Nombre;
var play1Correo;
var play2Correo;
var play1Elemento = "default";
var play2Elemento = "default";
var playSalvadas;
var playEdad;
var valor1;
var valor2;

//cuando carge el dom comenzamos
document.addEventListener('DOMContentLoaded', function () {
    //Este paso es realmente el Ãºltimo, la parte de guardar las partidas. 
    //lo que aquÃ­ hacemos comprobar si hay resultados guardados 
    //si el localStorage de jugador 1 es nulo entendemos que no se ha jugado y por tanto no lo mostramos.
    //si hay datos guardados lo mostramos por consola.
    
    if (localStorage.getItem('jugador1') !=null) {
        console.log('En la partida anterior, el jugador1 obtubo' + localStorage.getItem('jugador1') + ' puntos')
        console.log('En la partida anterior, el jugador2 obtubo' + localStorage.getItem('jugador2') + ' puntos')
    }


    //validar nombres
    nombre1.addEventListener('blur', function () {
        //funciÃ³n para validarNombre, para poder reutilizar la misma funciÃ³n en los dos campos
        //he creado una funcion a la que le pasamos un parametro, en este caso el elemento. 
        //podrÃ­a haberse realizado una por nombre
        play1Nombre = validarNombre(nombre1)
    });
    nombre2.addEventListener('blur', function () {
        play2Nombre = validarNombre(nombre2)
    });
    //validar correos
    correo1.addEventListener('blur', function () {
        //funciÃ³n para validarCorreo en las mismas condiciones que nombre
        play1Correo = validarCorreo(correo1);
    });
    correo2.addEventListener('blur', function () {
        play2Correo = validarCorreo(correo2);
    });
    //capturar el valor de los elementos
    elemento1.addEventListener('change', function () {
        //con esto obtenemos el valor del select
        play1Elemento = elemento1.value
    });
    elemento2.addEventListener('change', function () {
        play2Elemento = elemento2.value
    })
    //validar formulario
    boton.addEventListener('click', validar);
});

function validarNombre(nombre1) {
    let nombre = nombre1.value;
    //expresiÃ³n regular que acepta solo letras y vocales acentuadas y espacios
    let expresion = /^[a-zA-ZáéíóúñÑ]+$/;
    let contenedor = nombre1.parentElement;//extraigo el contenedor con la idea de insertar el span en el sitio correspondiente. 
    if (!expresion.test(nombre)) {
        //si el valor de nombre no pasa la validaciÃ³n 
        //le damos estio al elemento span
        error.style.fontSize = "10px";
        error.style.color = "red";
        error.style.fontWeight = "bold"
        //le damos un texto
        error.innerHTML = 'El nombre solo puede contener letras, espacios y vocales acentuadas.';
        //insertarmos con appendChild el error como ultimo hijo del contenedor padre de esta forma se inserta justo deba de el campo nombre
        contenedor.appendChild(error);
        //le devolvemos el foco
        nombre1.focus();

        //como cuando llamamos a la funciÃ³n la igualamos a la variable, necesitamos que el resultado de la funciÃ³n
        //devuelva algo, pues si es falso devolvera null, si es correcto devolvera el valor 
        //y se guardarÃ¡ automÃ¡ticamente en la variable
        return null;
    } else {
        error.textContent = '';
        return nombre;
    }
}
//la funciÃ³n validar correo e igual que la de nombre salvo que presenta una expresiÃ³n regular diferente. 
function validarCorreo(correo1) {
    let correo = correo1.value;
    //expresiÃ³n regular que verifica que se pasa un correo electronico
    let expresion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let contenedor = correo1.parentElement;
    if (!expresion.test(correo)) {
        error.style.fontSize = "10px";
        error.style.color = "red";
        error.style.fontWeight = "bold"
        error.innerHTML = 'Debe introducir una direccion correcta';
        contenedor.appendChild(error);
        correo1.focus();
        return null;
    } else {
        error.textContent = '';
        return correo;
    }
}
function validar() {
    //esta variable nos va ha hacer de testigo de que todo es correcto, si en las siguientes comprobaciones 
    //algo falla la pondremos a false. 
    var completo = true;
    // este array nos sirve para ir agregando los diferentes fallos que vayamos detectando.
    var arrayErrores = [];

    //comprobamos que los nombres y los correos estan completos, sino se agrega un error al array Errores previamente declarado. 
    //y la variable completo pasarÃ­a a estar a false. 
    if (!play1Nombre || !play2Nombre || !play1Correo || !play2Correo) {
        completo = false;
        arrayErrores.push(" El nombre y Correo de los dos Jugadores es Obligatorio ");
    }
    //se valida que los elementos no sean default 
    //al comenzar le dimos el valor default a las variables, el motivo es que solo se guarda el valor cuando pierde el foco, 
    //si nunca lo ha tendio no se almacenarÃ­a ningun valor. 
    //por lo tanto si no selecciona nada la variable valdrÃ­a default y si selecciona el valor por defecto valdrÃ­a tambiÃ©n default. 
    if (play1Elemento == "default" || play2Elemento == "default") {
        completo = false;
        arrayErrores.push(" Debe de seleccionar algun elemento ")
    }
    //se comprueba que el usuario es mayor de edad. 
    //como dijimos arriba en este caso nos interesaba todos los elementos, y mediante un for comprobamos 
    //cual es el que esta checkeado. 
    for (var i = 0; i < opcionEdad.length; i++) {
        if (opcionEdad[i].checked) {
            playEdad = opcionEdad[i].value;//el value del checked estÃ¡ definido en el html
            break;
        }
    }
    if (playEdad == "menor") {
        completo = false;
        arrayErrores.push(" Lo sentimos eres menor de edad y no puedes jugar ")
    }
    //se comprueba si queremos o no guardar las puntuaciones. 
    if (salvarPartida.checked) {
        playSalvadas = true;
    } else {
        playSalvadas = false;
    }
    //si algo de lo anterior falla avisamos y no continuamos
    if (!completo) {
        contenedor = boton.parentElement;
        error.style.fontSize = "12px";
        error.style.color = "red";
        error.style.fontWeight = "bold"
        error.innerHTML = arrayErrores;//convierto el array de errores en un inerHTML
        contenedor.appendChild(error);
    } else {
        //si se corrigen los errores se borran si hubieran y se juega
        error.innerHTML = ""
        jugar();
    }
}

function jugar() {
    //mostramos tablero
    var tablero = document.getElementsByClassName("tablero")[0];//el primer elemento por className
    tablero.style.visibility = "visible";
    //damos funcion a los botones dado1 y dado2
    //empezamos con el dado 1 extraemos el elemento y activamos el evento al hacer click. 
    document.getElementById("dado1").addEventListener("click", function () {
        //comprobamos que elemento es y que elemento es su adversario por si conlleva una bonificaciÃ³n la tirada
        //esto es lo mismo que en el piedra papel tijera pero en este caso si "gana"
        //se le va a sumar dos a su dado. 
        if ((play1Elemento == "agua" && play2Elemento == "fuego") || (play1Elemento == "fuego" && play2Elemento == "madera") || (play1Elemento == "madera" && play2Elemento == "agua")) {
            //si tiene bonificaciÃ³n se le suma aqui y se avisa de que su tirada tiene un +2
            //recordemos que el random devuelve un numero entre 0 y el numero que ponemos en este caso 6 sin incluir el ultimo,
            //por lo tanto de normal al Math.random le sumamos 1 y queda un valor entre 1 y 6 ambos incluidos. 
            //pues si tiene bonificador le sumamos tres 
            //puesto que la tirada minima que tendrÃ¡ serÃ¡ un tres uno del valor mÃ­nimo del dado + dos del bonificador. y e
            //la tirada mÃ¡xima serÃ­a de seis como valor mÃ¡ximo y dos como bonificador. 
            valor1 = Math.floor(Math.random() * 6) + 3;
            console.log("Tienes una bonificacion +2")
        } else {
            //si no "gana" solo se suma uno para establecer que el rango serÃ¡ entre 1 y 6
            valor1 = Math.floor(Math.random() * 6) + 1;
        }
        document.getElementById("inputdado1").value = valor1;
        //comprobamos si se quiere guardar la partida y si es asi se guarda en un loscalStorage
        if (playSalvadas) {
            localStorage.setItem('jugador1', valor1)
        }
        //una vez jugado desabilitamos boton. 
        document.getElementById("dado1").disabled = true;
    });
    //repetiriamos para el dado 2
    document.getElementById("dado2").addEventListener("click", function () {
        if ((play2Elemento == "agua" && play1Elemento == "fuego") || (play2Elemento == "fuego" && play1Elemento == "madera") || (play2Elemento == "madera" && play1Elemento == "agua")) {
            valor2 = Math.floor(Math.random() * 6) + 3;
            console.log("Tienes una bonificacion +2")
        } else {
            valor2 = Math.floor(Math.random() * 6) + 1;
        }
        document.getElementById("inputdado2").value = valor2;
        if (playSalvadas) {
            localStorage.setItem('jugador2', valor2)
        }
        document.getElementById("dado2").disabled = true;
    });
}


//Recordar siempre ir comprobano con que elemento estamos trabajando y utilizar la consola para guiaros. 






/* MI VERSION PERO HAY UN FALLO EN EL MANEJO DE ERRORES Y NO SE VALIDA EL FORMULARIO"use strict";
//recoger elementos del html
var nombre1 = document.getElementById('Nombre1');
var email1 = document.querySelector("input[type=email]");
var element1 = document.getElementsByClassName('select')[0];
var nombre2 = document.getElementById('Nombre2');
var email2 = document.querySelectorAll('input[type="email"]')[1];
var element2 = document.getElementsByClassName('select')[1];
var edad = document.getElementsByName('playerOption');
var guardar = document.getElementById("salvarPartida").checked;
//var errores = document.createElement("span");
var guardar = document.getElementById("salvarPartida").checked;
var arrayErrores = []; // Agregado: para almacenar mensajes de error

var boton = document.querySelector("button"); //me devuelve el primero

//recoger valores del formulario.
var play1Nombre;
var play2Nombre;
var play1Correo;
var play2Correo;
var play1Elemento = "default";
var play2Elemento = "default";
var playSalvadas;
var valor1;
var valor2;

document.addEventListener("DOMContentLoaded", function () {
    //eventos a añadir cuando se cargue la pagina y se cumplan los eventos
    //si el localStorage de jugador 1 es nulo entendemos que no se ha jugado y por tanto no lo mostramos.
    //si hay datos guardados lo mostramos por consola.
    
    if (localStorage.getItem('jugador1') !=null) {
        console.log('En la partida anterior, el jugador1 obtubo' + localStorage.getItem('jugador1') + ' puntos')
        console.log('En la partida anterior, el jugador2 obtubo' + localStorage.getItem('jugador2') + ' puntos')
    }

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
    // Añadido: Crear elemento para mensajes de error
    var mensajeError = document.createElement("div");
    mensajeError.id = "mensajeError";
    mensajeError.className = "error";
    boton.parentNode.appendChild(mensajeError);

   boton.addEventListener('click', validarFormulario);
});


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
        return null;
    } else if (!regex.test(valorCampo)) {
        error.innerHTML = "Campo mal escrito";
        error.style.color = 'red';
        error.style.fontWeight = 'bold';
        campo.focus();
        return null;
    } else {
        error.innerHTML = "";
        return valorCampo;
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
        return null;
    } else if (campo.validity && campo.validity.typeMismatch) {
        error.innerHTML = "Campo mal escrito. Ingrese direccion valida";
        error.style.color = 'red';
        error.style.fontWeight = 'bold';
        campo.focus();
        return null;
    } else {
        error.innerHTML = "";
        return valorCampo;
    }

}


function validarFormulario() {
    validadNombre(nombre1);
    validadNombre(nombre2);
    validarEmail(email1);
    validarEmail(email2);
    var completo = true;
    var playEdad;

    for (var i = 0; i < edad.length; i++) {
        if (edad[i].checked) {
            playEdad = edad[i].value;
            break;
        }
    }

    if (playEdad == "menor") {
        completo = false;
        arrayErrores.push("Lo sentimos, eres menor de edad y no puedes jugar.");
    }

    if (guardar) {
        playSalvadas = true;
    } else {
        playSalvadas = false;
    }

    var mensajeError = document.getElementById("mensajeError");

    let errores = document.querySelectorAll('.error:not(:empty)');
    if (errores.length !== 0 || !completo) {
        errores.forEach(error => {
            if (error) {
                var divErrores = document.createElement("div");
                divErrores.textContent = error.textContent;
                mensajeError.appendChild(divErrores);
            }
        });
    
        mensajeError.textContent = "¡Hay errores en el formulario! Corrígelos para continuar.";
    } else {
        jugar();
        mensajeError.textContent = "";
    }
    
}

function jugar() {
    //mostramos tablero
    var tablero = document.getElementsByClassName("tablero")[0];//el primer elemento por className
    tablero.style.visibility = "visible";
    //damos funcion a los botones dado1 y dado2
    //empezamos con el dado 1 extraemos el elemento y activamos el evento al hacer click. 
    document.getElementById("dado1").addEventListener("click", function () {
        //comprobamos que elemento es y que elemento es su adversario por si conlleva una bonificaciÃ³n la tirada
        //esto es lo mismo que en el piedra papel tijera pero en este caso si "gana"
        //se le va a sumar dos a su dado. 
        if ((play1Elemento == "agua" && play2Elemento == "fuego") || (play1Elemento == "fuego" && play2Elemento == "madera") || (play1Elemento == "madera" && play2Elemento == "agua")) {
            //si tiene bonificaciÃ³n se le suma aqui y se avisa de que su tirada tiene un +2
            //recordemos que el random devuelve un numero entre 0 y el numero que ponemos en este caso 6 sin incluir el ultimo,
            //por lo tanto de normal al Math.random le sumamos 1 y queda un valor entre 1 y 6 ambos incluidos. 
            //pues si tiene bonificador le sumamos tres 
            //puesto que la tirada minima que tendrÃ¡ serÃ¡ un tres uno del valor mÃ­nimo del dado + dos del bonificador. y e
            //la tirada mÃ¡xima serÃ­a de seis como valor mÃ¡ximo y dos como bonificador. 
            valor1 = Math.floor(Math.random() * 6) + 3;
            console.log("Tienes una bonificaciÃ³n +2")
        } else {
            //si no "gana" solo se suma uno para establecer que el rango serÃ¡ entre 1 y 6
            valor1 = Math.floor(Math.random() * 6) + 1;
        }
        document.getElementById("inputdado1").value = valor1;
        //comprobamos si se quiere guardar la partida y si es asi se guarda en un loscalStorage
        if (playSalvadas) {
            localStorage.setItem('jugador1', valor1)
        }
        //una vez jugado desabilitamos boton. 
        document.getElementById("dado1").disabled = true;
    });
    //repetiriamos para el dado 2
    document.getElementById("dado2").addEventListener("click", function () {
        if ((play2Elemento == "agua" && play1Elemento == "fuego") || (play2Elemento == "fuego" && play1Elemento == "madera") || (play2Elemento == "madera" && play1Elemento == "agua")) {
            valor2 = Math.floor(Math.random() * 6) + 3;
            console.log("Tienes una bonificaciÃ³n +2")
        } else {
            valor2 = Math.floor(Math.random() * 6) + 1;
        }
        document.getElementById("inputdado2").value = valor2;
        if (playSalvadas) {
            localStorage.setItem('jugador2', valor2)
        }
        document.getElementById("dado2").disabled = true;
    });
}

 */
