"use strict;"

function setCookie(color){
    const expireDate=new Date();
    expireDate.setDate(expireDate.getDate()+1); //expira en un dia
    
//creacion de la cookie
    const cookieValue="selectedColor="+color+"; expires="+expireDate.toGMTString();
    document.cookie=cookieValue;
}

function getCookie(){
const name="selectedColor=";
const cookieArray= document.cookie.split(';');

for(let i=0; i<cookieArray.length;i++){
    let cookie=cookieArray[i];
    while(cookie.charAt(0)===' '){ // verificar si el primer caracter de la cadena es un espacio en blnco
        cookie=cookie.substring(1); // elimina el espacio en blanco
    }
    if(cookie.indexOf(name)===0){ // verifica si la var name esta al principio de la cadena y devueve la posicion en la cadena, si es = 0 significa que esta bien
        return cookie.substring(name.length,cookie.length); // extraer la parte de la cadena despues del nombre para coger el valor (color)
    }
}
return null;
}

function cambiarColor(color){
    document.body.style.backgroundColor=color;
    setCookie(color);
}
//eventos para los botones
document.getElementById('btn1').addEventListener("click", function(){ cambiarColor("red");});
document.getElementById('btn2').addEventListener("click", function(){ cambiarColor("rebeccapurple");});
document.getElementById('btn3').addEventListener("click", function(){ cambiarColor("rgb(0, 140, 255)");});

// verificar si hay cokkie y aplicar ese color
const savedColor=getCookie();
if (savedColor){
    cambiarColor(savedColor);
}
