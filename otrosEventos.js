'use strict';
var nombre= document.getElementById("nombre");
var apellido1= document.getElementById("apellido1");
var apellido2= document.getElementById("apellido2");
var edad= document.getElementById("edad");
var telefono= document.getElementById("telefono");

document.addEventListener("DOMContentLoaded",function(event){
nombre.focus();
nombre.addEventListener("blur",function(){validarNombre(nombre,"errorNombre")});
apellido1.addEventListener("blur",function(){validarNombre(apellido1,"errorApellido1")} );
apellido2.addEventListener("blur",function(){validarNombre(apellido2,"errorApellido2")} );
edad.addEventListener("keydown",function(event){validarNumero(event)});
telefono.addEventListener("blur",function(event){validarLongitud(telefono,"errorTelefono")});

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

function validarNumero(event){
    
    if (event.key < "0"|| event.key > "9"){
        event.preventDefault(); //previene un evento y no deja escirbnir
    } 
    let campo=event.target;
    /* if (campo.value.length>=9){
     event.preventDefault();}  */      
}
 function validarLongitud(campo,errorId){
    let error=document.getElementById(errorId);
    if(campo.value.length>9){
        error.innerHTML="Solo se pueden introducir 9 digitos";
    }
 }
 // DEBERES CONSEGUIR QUE LOS NUMEROS SOLO SEAN NUMEROS Y AEN LE TELEFONO SOLO DEJE 9 DIGITOS CUANDO SE HACE BLUR, ORDENAR FOCUS DE MANERA QUE YO KIERA CON tabIndex.