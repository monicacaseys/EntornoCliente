'use strict';
var texto = prompt("Escribe números separados por espacios y los ordeno");
var arrayNumbers = texto.split(" ");

// Utiliza una función de comparación personalizada en sort
var orden = arrayNumbers.sort(function(a, b) {
    return parseFloat(b) - parseFloat(a);
});

var salida = orden.join(" ");
console.log(salida);
