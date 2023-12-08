"use strict";

rango (2,20);
rangoo (2,20);
rangoo0 (2,20,2);

function rango (inicio,fin){
    for(let i=inicio;i<fin; i++){
        console.log(i+1);
    }
}
/* Escribe una función rango que tome dos argumentos inicio y final y que retorne
un array que contenga todos los números desde inicio hasta final (este
incluido) */
function rangoo (inicio,fin){
    let myArray=[];
    for(let i=inicio;i<fin; i++){
        myArray.push(i+1);
    }
    console.log(myArray);
}
/* • Modifica tu función para que agregue un nuevo párametro que será el salto
entre números. */
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
/* Escribe una función suma que tome un array de números y retorne la suma de
estos números (sin usar el método reduce) */
var arrayy=[2,6,84,4,8,9,10,24,55];
function suma(array = []){ // por si no se ponen argumentos que sea por defecto un array vacio y el resultado sea 0

    let suma=0;
    for (let i=0;i<array.length;i++){
        suma+=array[i];
    }
    return suma;
}
console.log(suma(arrayy));

/* • Crea una función que toma como argumento un array y produce uno nuevo que
tiene los mismos elementos pero en orden inverso. (buscar el funcionamiento
del método reverse pero no se puede usar en esta función ni en la siguiente)
 */
function inversa(array=[]){
const nuevoArr=array.slice();

/*  // Invertir el nuevo array OTRA FORMA
 for (let i = 0; i < nuevoArray.length / 2; i++) {
    const temp = nuevoArray[i];
    nuevoArray[i] = nuevoArray[nuevoArray.length - 1 - i];
    nuevoArray[nuevoArray.length - 1 - i] = temp;
  } */

nuevoArr.sort((a,b) => array.indexOf(b)-array.lastIndexOf(a));
return nuevoArr;
    
}
const arrayInvertido=inversa(arrayy);
console.log(inversa(arrayInvertido));


/* • Crea una función como la anterior pero que en lugar de crear un nuevo array
modifique el que se le pasa por parámetro (sin usar el método reverse) */
function inversa2(array=[]){  
    array.slice().sort((a,b) => array.indexOf(b)-array.lastIndexOf(a));
    return array;
        
    }
    const arrayInvertido2=inversa(arrayy);
    console.log(inversa(arrayInvertido2));



let persona={
    nombre:"Juan",
    edad:23
}

console.log(persona.toString());
console.log(persona.hasOwnProperty('nombre'));
console.log(persona.isPrototypeOf(Object));
