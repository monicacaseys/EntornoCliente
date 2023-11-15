document.addEventListener("DOMContentLoaded", function () {
    const juegoDiv = document.getElementById("juego");
    const puntuacionValorDiv = document.getElementById("puntuacionValue");
    const cartasDiv = document.getElementById("cartas");
    const pedirCartaBtn = document.getElementById("pedirCartaBtn");
    const plantarseBtn = document.getElementById("plantarseBtn");
    const comenzarBtn = document.getElementById("comenzarBtn");
    const nombreInput = document.getElementById("nombre");
    const edadInput = document.getElementById("edad");

    let puntuacion;
    let partidasJugadas = 0;
    let cartas;

    juegoDiv.style.display = "none";

    function cargarJuego() {
        puntuacion = 0;
        cartas = [];
        partidasJugadas++;

        const nombre = nombreInput.value.trim();
        const edad = parseInt(edadInput.value);

        if (nombre && /^[a-zA-Z0-9]+$/.test(nombre) && !isNaN(edad) && edad >= 18) {
            juegoDiv.style.display = "block";
        } else {
            alert("Debes ingresar solo numeros y letras y ser mayor de 18");
            return;
        }
    }

    function obtenerCartaAleatoria() {
        const cartasDisponibles = [1, 2, 2, 4, 5, 6, 7, "sota", "caballo", "rey"];
        const cartaAleatoria = cartasDisponibles[Math.floor(Math.random() * cartasDisponibles.length)];

        switch (cartaAleatoria) {
            case "sota":
            case "caballo":
            case "rey":
                return 0.5;
            default:
                return cartaAleatoria;
        }
    }

    function pedirCarta() {
        const nuevaCarta = obtenerCartaAleatoria();
        cartas.push(nuevaCarta);
        mostrarCarta();
        actualizarPuntuacion();

        if (puntuacion > 7.5) {
            mostrarResultado("Te has pasado pierdes");
        } else if (puntuacion === 7.5) {
            mostrarResultado("Has ganado");
        }
    }
    function plantase() {
        mostrarResultado("te has plantado");
    }

    function mostrarResultado(mensaje) {
        alert(`${mensaje} \n Puntuacion final: ${puntuacion} \n Partidas jugadas ${partidasJugadas}`);
        reiniciarJuego();

    }
    function mostrarCarta(carta) {
        cartasDiv.innerHTML = "";
        const cartaImagen = document.createElement("img");
        cartaImagen.src = `carta_${carta}.png`;
        cartasDiv.appendChild(cartaImagen);
    }


    function actualizarPuntuacion() {
        puntuacion = cartas.reduce((total, carta) => total + carta, 0);
        puntuacionValorDiv.textContent = puntuacion;

    }

    function reiniciarJuego() {
        juegoDiv.style.display = "none";
        cartasDiv.innerHTML = "";
    }

    //añadir eventos.
    comenzarBtn.addEventListener("click", cargarJuego);
    pedirCartaBtn.addEventListener("click", pedirCarta);
    plantarseBtn.addEventListener("click", plantase);

});