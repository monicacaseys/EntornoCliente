document.addEventListener("DOMContentLoaded", function () {
    const juegoDiv = document.getElementById("juego");
    const puntuacionDiv = document.getElementById("puntuacion");
    const cartasDiv = document.getElementById("cartas");
    const pedirCartaBtn = document.getElementById("pedirCartaBtn");
    const plantarseBtn = document.getElementById("plantarseBtn");
    const comenzarBtn = document.getElementById("comenzarBtn");
    const nombreInput = document.getElementById("nombre");
    const edadInput = document.getElementById("edad");
  
    let partidasJugadas = 0;
    let puntuacion;
    let cartas;
  
    juegoDiv.style.display = "none";

    function comenzarJuego() {
      puntuacion = 0;
      cartas = [];
      partidasJugadas++;
  
      const nombre = nombreInput.value.trim();
      const edad = parseInt(edadInput.value);
  
      if (nombre && /^[a-zA-Z0-9]+$/.test(nombre) && !isNaN(edad) && edad >= 18) {
        juegoDiv.style.display = "block";
      } else {
        alert("Debes ingresar un nombre válido (solo letras) y tener al menos 18 años.");
        return; // Detener la ejecución si la validación no pasa
      }
    }
  
    function pedirCarta() {
        const nuevaCarta = obtenerCartaAleatoria();
        cartas.push(nuevaCarta);
        mostrarCarta(nuevaCarta);
        actualizarPuntuacion();
      
        if (puntuacion > 7.5) {
          mostrarResultado("¡Te has pasado de 7.5! Has perdido.");
        } else if (puntuacion === 7.5) {
          mostrarResultado("¡Felicidades, has llegado a 7.5! ¡Has ganado!");
        } else {
          
        }
      }
      
  
    function plantarse() {
      mostrarResultado(`¡Te has plantado! Puntuación final: ${puntuacion}`);
    }
  
    function obtenerCartaAleatoria() {
      const cartasPosibles = [1, 2, 3, 4, 5, 6, 7, "Rey", "Caballo", "Sota"];
      const cartaAleatoria = cartasPosibles[Math.floor(Math.random() * cartasPosibles.length)];
      
      // Ajustar el valor de la carta según la nueva lógica
      switch (cartaAleatoria) {
        case "Rey":
        case "Caballo":
        case "Sota":
          return 0.5;
        default:
          return cartaAleatoria;
      }
    }
    
  
    function mostrarCarta(carta) {
      cartasDiv.innerHTML = "";
      const cartaImagen = document.createElement("img");
      cartaImagen.src = `carta_${carta}.png`; // Asegúrate de tener las imágenes con los nombres correctos
      cartasDiv.appendChild(cartaImagen);
    }
  //duda
    function actualizarPuntuacion() {
      puntuacion = cartas.reduce((total, carta) => total + carta, 0);
      puntuacionDiv.textContent = `Puntuación: ${puntuacion}`;
    }
  
    function mostrarResultado(mensaje) {
      alert(`${mensaje}\nPuntuación total en esta partida: ${puntuacion}\nPartidas jugadas: ${partidasJugadas}`);
      reiniciarJuego(); 
    }
  
    function reiniciarJuego() {
      juegoDiv.style.display = "none";
      puntuacionDiv.textContent = "Puntuación: 0";
      cartasDiv.innerHTML = "";
    }
  
    // Asignar eventos a los botones
    pedirCartaBtn.addEventListener("click", pedirCarta);
    plantarseBtn.addEventListener("click", plantarse);
    comenzarBtn.addEventListener("click", comenzarJuego);
  });
  