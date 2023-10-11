//
'use strict;'
/* 
function mostrarDimension(){
var ancho=window.innerWidth;
var alto=window.innerHeight;
alert("Ancho de ventana: "+ancho+". Alto ventana: "+alto);
} */
/* 
function suscribirte(){
    alert("te has suscrito");
} 
function nosuscribirte(){
    alert("no te has suscrito");
} 
 */

/* window.onresize= function cambiaColor(){
    var ancho=window.innerWidth;
    var alto=window.innerHeight;
console.log("Ancho de ventana: "+ancho+". Alto ventana: "+alto);
if(ancho<800){
    document.body.style.backgroundColor="blue";
}else{
    document.body.style.backgroundColor="red";
}
} */

function abrir(){
ventanaEmergente=window.open("auto:blank","mi ventana","width=400","height=400")
}
function cerrar(){
    setTimeout(function(){ventanaEmergente.close();},5000);
    
}