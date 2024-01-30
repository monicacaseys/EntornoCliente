var n1 = 10;
var n2 = 3;
var div;

function cambio(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve (n1 = n1 * 5)
        },2000)
    })
}

cambio().then(()=>{
    console.log(div = n1 / n2)
})

function esperarSegundos(segundos) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('¡Hola!');
      }, segundos * 1000); // Convertir segundos a milisegundos
    });
  }
  
  // Ejemplo de uso:
  const tiempoEspera = 3;
  
  esperarSegundos(tiempoEspera)
    .then((mensaje) => {
      console.log(mensaje); // Debería imprimir "¡Hola!" después de 3 segundos
    })
    .catch((error) => {
      console.error(error);
    });

    function generarNumeroAleatorio() {
        return new Promise((resolve) => {
          const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
          resolve(numeroAleatorio);
        });
      }
      
      function esperarSegundos(segundos) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve('¡Hola!');
          }, segundos * 1000); // Convertir segundos a milisegundos
        });
      }
      
      // Ejemplo de uso:
      generarNumeroAleatorio()
        .then((numeroAleatorio) => {
          console.log(`Número aleatorio: ${numeroAleatorio}`);
          return esperarSegundos(numeroAleatorio);
        })
        .then((mensaje) => {
          console.log(mensaje); // Debería imprimir "¡Hola!" después de un número aleatorio de segundos
        })
        .catch((error) => {
          console.error(error);
        });
      