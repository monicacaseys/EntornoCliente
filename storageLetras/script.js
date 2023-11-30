"use strict;"

const fondoColor=document.getElementById('bgColor').value;
const fontSize=document.getElementById('fontSize').value;

function applyPreferences(){

localStorage.setItem('bgColor',fondoColor);
var fondo= localStorage.getItem('bgColor');
localStorage.setItem('fontSize',fontSize);
var tamaño= localStorage.getItem('fontSize');


document.body.style.backgroundColor = fondo;
document.body.style.fontSize=tamaño+"px";


}