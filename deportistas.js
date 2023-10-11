"use strict";
//declarar un array con los valores ana,oscar,raul,carmen,maria,antonio. son deportistas y esa es su clasificacion. imrprimir lista por consola pero despues carmen adelanta a raul. antonio es descalificado.detras de ana y antes de oscar se clasifican 2 nuevos ramos y alicia; y marta pasa a encabezar la lista
// Declarar un array con los nombres de los deportistas y su clasificación inicial
const deportistas = ['Ana', 'Oscar', 'Raul', 'Carmen', 'Maria', 'Antonio'];

// Imprimir la lista inicial por consola
console.log('Lista inicial:');
console.log(deportistas);

// Carmen adelanta a Raul
deportistas[2]="Carmen";
deportistas[3]="Raul";
console.log(deportistas);

// Antonio es descalificado
deportistas.pop('Antonio');
console.log(deportistas);



// Detrás de Ana y antes de Oscar se clasifican 2 nuevos deportistas y Alicia
deportistas.splice(1, 0,"Ramon","Alicia"); // los tres puntos ... se utilizan para insertar todos los elementos de nuevosDeportistas en la posición especificada en deportistas, uno por uno, sin crear un array anidado. 
console.log(deportistas);
// Marta pasa a encabezar la lista
deportistas.unshift('Marta');
console.log(deportistas);
