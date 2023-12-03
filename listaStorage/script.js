"use strict";

document.getElementById('listStyle').value = localStorage.getItem('listStyle') || 'none';

function applyPreferences (){
    //cpger valor
   var style = document.getElementById('listStyle').value;
//almacenar preferencia para que se guarden en cookies
   localStorage.setItem('listStyle',style);

   //aplicar cambios
   document.getElementById('custom-list').style.listStyleType=style;

}

function addItemToList(){
    
    //campturara valor del input
var listItem = document.getElementById('listItem').value;

//si no esta vacio
if ( listItem.trim()!==""){
// creo un elemento para meter ese valor input en el
    var elemento = document.createElement('li');
    elemento.textContent=listItem;

    //añadrlo al ul 
    document.getElementById('custom-list').appendChild(elemento);
    //limpiar el campo input despues de agregar un elemento
    document.getElementById('listItem').value="";

}

applyPreferences(); //aplicar preferencias al cargar la pagina


}