'use strict';
var nombre= document.getElementById("nombre");
var apellido1= document.getElementById("apellido1");
var apellido2= document.getElementById("apellido2");
var edad= document.getElementById("edad");
var telefono= document.getElementById("telefono");

nombre.tabIndex = 1;
apellido1.tabIndex = 3;
apellido2.tabIndex = 2;
edad.tabIndex = 5;
telefono.tabIndex = 4;

document.addEventListener("DOMContentLoaded",function(event){
nombre.focus();
nombre.addEventListener("blur",function(){validarNombre(nombre,"errorNombre")});
apellido1.addEventListener("blur",function(){validarNombre(apellido1,"errorApellido1")} );
apellido2.addEventListener("blur",function(){validarNombre(apellido2,"errorApellido2")} );

edad.addEventListener("input", function () {
    validarEdad(edad, "errorEdad");
});

telefono.addEventListener("input", function () {
    validarLongitud(telefono, "errorTelefono");
});


})



function validarNombre(campo , errorId){
let error=document.getElementById(errorId);

    if(campo.value.length<2 || campo.value.length>20 ){
     error.innerHTML="Introduce un valor correcto";
     error.style.color='red';
     error.style.fontWeight='bold';
     error.style.fontSize='20px';
     error.style.fontStyle='italic';
     campo.focus();
    } else{
        error.innerHTML="";
    }
}
//funcion obsoleta con preventDefault pero este no deja cambiar con la tabulacion
function validarNumero(event){
    
    if (event.key < "0"|| event.key > "9"){
        event.preventDefault(); //previene un evento y no deja escirbnir
    } 
    /*let campo=event.target;
     if (campo.value.length>=9){
     event.preventDefault();}  */      
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




