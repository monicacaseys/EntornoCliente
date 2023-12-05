"use strict";

rango (2,20);
rangoo (2,20);
rangoo0 (2,20,2);
function rango (inicio,fin){
    for(let i=inicio;i<fin; i++){
        console.log(i+1);
    }
}

function rangoo (inicio,fin){
    let myArray=[];
    for(let i=inicio;i<fin; i++){
        myArray.push(i+1);
    }
    console.log(myArray);
}

function rangoo0 (inicio,fin,rang){
    let myArray=[];
    let aux=inicio;
    while(aux<=fin){
        myArray.push(aux);
        aux+=rang;
    }
    console.log(myArray);
    console.log(myArray.__proto__);
    console.log(aux.__proto__);
}

var array=[2,6,84,4,8,9,10,24,55];
function suma(array = []){ // por si no se ponen argumentos que sea por defecto un array vacio y el resultado sea 0

    let suma=0;
    for (let i=0;i<array.length;i++){
        suma+=array[i];
    }
    return suma;
}
console.log(suma(array));


let persona={
    nombre:"Juan",
    edad:23
}

console.log(persona.toString());
console.log(persona.hasOwnProperty('nombre'));
console.log(persona.isPrototypeOf(Object));
