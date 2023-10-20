"use strict";
function jugar (eleccionUsuario){

    //eleccion makina
    var opciones=["piedra","papel","tijera"];
     
    var eleccionMakina= opciones[Math.floor(Math.random()*3)];

    //Decir quien gana
    var ganador=kienGana(eleccionUsuario,eleccionMakina);
    document.getElementById('ganador').innerHTML = ganador;

    //mostrar elecciones

}

function kienGana(eleccionUsuario,eleccionMakina){
    if (eleccionUsuario===eleccionMakina){
        return "Es un empate";
    }
    if(eleccionUsuario==='piedra' && eleccionMakina==='tijera' 
    ||eleccionUsuario==='papel' && eleccionMakina==='piedra' 
    || eleccionUsuario==='tijera' && eleccionMakina==='papel'){
        return "Has ganado!"
    }else{
        return "Has perdido :(. Gana la makina"
    }
}
