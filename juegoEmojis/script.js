"use strict";

var puntos = 0;

function arrastrar(event) {
    var idEmoji = event.target.textContent;
    event.dataTransfer.setData("text/plain", idEmoji);
}
function soltar(event, categoria) {
    event.preventDefault();

    var idEmoji = event.dataTransfer.getData("text/plain");
    var dropZone = document.getElementById(categoria);

    // Crear un nuevo elemento div para el emoji
    var emojiElement = document.createElement("div");
    emojiElement.className = "draggable-item";
    emojiElement.textContent = idEmoji;

    // Agregar el nuevo emoji al campo
    dropZone.appendChild(emojiElement);

    // Verificar si la categoría es correcta y actualizar la puntuación
    if (esCategoriaCorrecta(idEmoji, categoria)) {
        puntos++;
        actualizarPuntuacion();
    } else {
        puntos--;
        actualizarPuntuacion();
    }
}



function permitirDrop(event) {
    event.preventDefault();
}

function esCategoriaCorrecta(emoji, categoria) {
    // Definir las categorías y los emojis correspondientes
    var categorias = {
        comida: ["🍎", "🍕", "🍦"],
        caras: ["😊", "😎", "😂"],
        objetos: ["🚗", "📱", "🎮"]
    };

    // Verificar si el emoji pertenece a la categoría
    return categorias[categoria].includes(emoji);
}

function actualizarPuntuacion() {
    document.getElementById("puntos").textContent = puntos;
}
