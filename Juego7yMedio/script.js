document.addEventListener("DOMContentLoaded", function () {
    const usuarioInputDiv = document.getElementById("usuarioInput");
    const juegoDiv = document.getElementById("juego");
    const puntuacionDiv = document.getElementById("puntuacion");
    const cartasDiv = document.getElementById("cartas");
    const pedirCartaBtn = document.getElementById("pedirCartaBtn");
    const plantarseBtn = document.getElementById("plantarseBtn");
    const comenzarBtn = document.getElementById("comenzarBtn");
    const nombreInput = document.getElementById("nombre");
    const edadInput = document.getElementById("edad");
  
    let puntuacion;
    let cartas;
  
    function comenzarJuego() {
      puntuacion = 0;
      cartas = [];
  
      const nombre = nombreInput.value.trim();
      const edad = parseInt(edadInput.value);
  
      if (nombre && /^[a-zA-Z]+$/.test(nombre) && !isNaN(edad) && edad >= 18) {
        usuarioInputDiv.style.display = "none";
        juegoDiv.style.display = "block";
      } else {
        alert("Debes ingresar un nombre válido (solo letras) y tener al menos 18 años.");
        return; // Detener la ejecución si la validación no pasa
      }
    }
  
    function pedirCarta() {
        const nuevaCarta = obtenerCartaAleatoria();
        cartas.push(nuevaCarta);
        actualizarPuntuacion();
        mostrarCarta(nuevaCarta);
      
        if (puntuacion > 7.5) {
          mostrarResultado("¡Te has pasado de 7.5! Has perdido.");
        } else if (puntuacion === 7.5) {
          mostrarResultado("¡Felicidades, has llegado a 7.5! ¡Has ganado!");
        }
      }
      
  
    function plantarse() {
      mostrarResultado(`¡Te has plantado! Puntuación final: ${puntuacion}`);
    }
  
    function obtenerCartaAleatoria() {
      const cartasPosibles = [1, 2, 3, 4, 5, 6, 7, 0.5];
      const cartaAleatoria = cartasPosibles[Math.floor(Math.random() * cartasPosibles.length)];
      return cartaAleatoria;
    }
  
    function mostrarCarta(carta) {
      const cartaImagen = document.createElement("img");
      cartaImagen.src = `carta_${carta}.png`; // Asegúrate de tener las imágenes con los nombres correctos
      cartasDiv.appendChild(cartaImagen);
    }
  
    function actualizarPuntuacion() {
      puntuacion = cartas.reduce((total, carta) => total + carta, 0);
      puntuacionDiv.textContent = `Puntuación: ${puntuacion.toFixed(1)}`;
    }
  
    function mostrarResultado(mensaje) {
      alert(mensaje);
      reiniciarJuego();
    }
  
    function reiniciarJuego() {
      usuarioInputDiv.style.display = "block";
      juegoDiv.style.display = "none";
      puntuacionDiv.textContent = "Puntuación: 0";
      cartasDiv.innerHTML = "";
    }
  
    // Asignar eventos a los botones
    pedirCartaBtn.addEventListener("click", pedirCarta);
    plantarseBtn.addEventListener("click", plantarse);
    comenzarBtn.addEventListener("click", comenzarJuego);
  });
  