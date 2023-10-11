"use strict";
/* //ejercicio 1
var numeroDNI=prompt("Dime tu numero del DNI sin letra");
var letras = "TRWAGMYFPDXBNJZSQVHLCKET";

var letraCorrespondiente=letras.charAt(numeroDNI % 23);

console.log("La letra de tu DNI ES "+letraCorrespondiente); */

/* //ejercicio 2
var randomMakina=Math.floor(Math.random()*10)+1;

var randomUsuario=prompt("Dime un numero del 1 al 10");
if(randomMakina===randomUsuario){
  console.log("los numeros coinciden"+randomMakina+"="+randomUsuario)
}else{
  console.log("los numeros NO coinciden"+randomMakina+"!="+randomUsuario)
} */

/* var frase =  "Hola_Mundo";

for ( var i = 1 ; i < frase.length+1 ; i++){
    document.write(frase.substring (0,i)+ "</br>");
} */


/* //ejercicio 3
document.addEventListener("DOMContentLoaded",function(){
  var numFilas=6;
  for(var i=1;i<=numFilas;i++){
    var fila="";
    for(var j=1;j<=i;j++){
      fila+=i;
    }
    document.write("<p>"+fila+"</p>");
  }
}); */

/* //ejercicio 4
const participantes = ['Ana', 'Jose', 'Juan'];
const probabilidades = [0.6, 0.3, 0.1];
const totalSimulaciones = 50;
const ganadores = [];

const resultados = {};

for (let i = 0; i < totalSimulaciones; i++) {
    const randomNumber = Math.random(); // Genera un número aleatorio entre 0 y 1

    // Comprueba en qué rango cae el número aleatorio
    let acumulado = 0;
    for (let j = 0; j < probabilidades.length; j++) {
        acumulado += probabilidades[j];
        if (randomNumber <= acumulado) {
            const ganador = participantes[j];
            
            ganadores.push(ganador); // Agrega el ganador a la lista de ganadores

            // Registra el ganador en los resultados
            if (resultados[ganador]) {
                resultados[ganador]++;
            } else {
                resultados[ganador] = 1;
            }

            break;
        }
    }
}

// Muestra los resultados en la consola de forma numérica
console.log('Resultados numéricos:');
console.log(resultados);

// Muestra los ganadores en el HTML sin contar la cantidad de veces
document.write('<h1>Ganadores del Sorteo</h1>');
document.write('<ul>');
for (const ganador of ganadores) {
    document.write('<li>' + ganador + '</li>');
}
document.write('</ul>');

 */

//ejercicio 5
// Inicializamos una variable para contar los resultados mostrados
let resultadosMostrados = 0;

// Iteramos desde 1 hasta 500 para encontrar los múltiplos de 4 y 5
for (let numero = 1; numero <= 500; numero++) {
    if (numero % 4 === 0 || numero % 5 === 0) {
        // Si el número es múltiplo de 4 o 5, lo mostramos
        console.log(numero);
        resultadosMostrados++;

        // Comprobamos si se han mostrado 5 resultados, luego imprimimos la línea de puntos
        if (resultadosMostrados === 5) {
            console.log('*************');
            resultadosMostrados = 0; // Reiniciamos el contador
        }
    }
}











