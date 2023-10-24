document.addEventListener("DOMContentLoaded", function(){
    var miBoton= document.getElementById("miBoton");
    miBoton.addEventListener("click",function(){
        alert("has hecho clik en el botn!!");
    });
});


var info=document.getElementById("info");
// evento KeyDown
document.addEventListener("keydown",function(event) {
    info.innerHTML=`Evento keydown : Tecla Presionada - ${event.key}`;
    info.innerHTML=`Evento keydown : Tecla Presionada - ${event.code}`;
    info.innerHTML=`Evento keydown : Tecla Presionada - ${event.keyCode}`;
    info.innerHTML=`Evento keydown : Tecla Presionada - ${event.which}`;
    info.innerHTML=`Evento keydown : Tecla Presionada - ${event.location}`;
    info.innerHTML=`Evento keydown : Tecla Presionada - ${event.repeat}`;
    info.innerHTML=`Evento keydown : Tecla Presionada - ${event.repeat}`;
    info.innerHTML=`Evento keydown : Tecla Presionada - ${event.target}`;
});
// evento keypress
document.addEventListener("keypress",function(event) {
    info.innerHTML+=`<br>Evento keypress : Tecla Presionada - ${event.key}`;
});
// evento keyup
document.addEventListener("keyup",function(event) {
    info.innerHTML+=`<br>Evento keyup : Tecla Liberada - ${event.key}`;
});




document.addEventListener("DOMContentLoaded", function(){
    var miBoton= document.getElementById("miBoton");
    miBoton.addEventListener("click",function(){
        alert("has hecho clik en el boton!!");
    });
});


// ejercicio evento teclado
/*
Realiza una funcion que detecte que tecla presionamos y en funcion de cual
sea me ponga por consola:
- letra mayuscula
- letra minuscula
    - numero
    - simbolo
*/

//coregir que si pulsso teclas como shift o flechas me sale como mayuscula y no como simbolo
document.addEventListener('keydown', function(event) {
    var teclaPresionada = event.key;
    var codigoASCII = teclaPresionada.charCodeAt(0);
  
    if (codigoASCII >= 65 && codigoASCII <= 90) {
      console.log('Letra mayúscula: ' + teclaPresionada);
    } else if (codigoASCII >= 97 && codigoASCII <= 122) {
      console.log('Letra minúscula: ' + teclaPresionada);
    } else if (codigoASCII >= 48 && codigoASCII <= 57) {
      console.log('Número: ' + teclaPresionada);
    } else {
      console.log('Símbolo: ' + teclaPresionada);
    }
  });
  
  
 






