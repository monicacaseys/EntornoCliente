'use strict';

const preguntas = [{ pregunta: "¿Entre que planetas esta el cinturón de asteroides? ", respuesta:"marte y jupiter"},{
    pregunta: "¿Cuántos planetas en el sistema solar?", respuesta:"ocho"},
{pregunta:"¿Qué es un agujero negro?", respuesta:"gravedad extrema"},
{ pregunta:"¿Cuál es la estrella más cercana a la Tierra?", respuesta:"sol"},
{pregunta:"¿Distancia promedio Tierra-Luna? ", respuesta:"384"},
{pregunta:"¿Qué es una galaxia?", respuesta:"conjunto de estrellas"},
{pregunta:"¿Fenómeno de la Luna bloqueando el Sol? ", respuesta:"eclipse solar"},
{pregunta:"¿Teoría de la expansión del universo? ", respuesta:"big bang"},
{pregunta:"¿Qué es un cometa?",respuesta:"¿Planeta más grande en el sistema solar?", respuesta:"jupiter"}];

shuffleArray(preguntas);

let preguntaActual = 0;
let respuestasCorrectas = 0;
let interval;

document.getElementById("comenzar").addEventListener("click", () => {
    mostrarPregunta();
    document.getElementById("comenzar").style.display = "none";
    document.getElementById("siguiente").style.display = "block";
});

document.getElementById("siguiente").addEventListener("click", () => {
    verificarRespuesta(preguntas[preguntaActual - 1].respuesta);
    mostrarPregunta();
});

function mostrarPregunta() {
    if (preguntaActual < preguntas.length) {
        const pregunta = preguntas[preguntaActual];
        document.getElementById("pregunta").textContent = pregunta.pregunta;
        document.getElementById("respuesta").value = "";

        clearInterval(interval);
        interval = iniciarTemporizador();

        preguntaActual++;
    } else {
        finalizarConcurso();
    }
}

function iniciarTemporizador() {
    return setTimeout(() => {
        verificarRespuesta(null); //SI EL USUARIO NO ESCRIBE NADA
        mostrarPregunta();
    }, 30000); // 30 segundos
}

function verificarRespuesta(respuestaCorrecta) {
    const respuestaUsuario = document.getElementById("respuesta").value;
    if (!respuestaCorrecta) {
        // Si no se proporciona respuestaCorrecta, significa que el tiempo se ha agotado.
        // En este caso, el usuario no ha respondido a tiempo.
    } else if (respuestaUsuario.toLowerCase() === respuestaCorrecta.toLowerCase()) {
        // Si la respuesta del usuario coincide con la respuesta correcta (sin importar mayúsculas y minúsculas),
        // incrementamos el contador de respuestas correctas.
        respuestasCorrectas++;
    }
}

function finalizarConcurso() {
    const puntaje = (respuestasCorrectas / preguntas.length) * 100;
    if (puntaje >= 50) {
        alert("¡Has superado el concurso!");
    } else {
        alert("No has superado el concurso. Inténtalo de nuevo.");
    }
    preguntaActual = 0;
    respuestasCorrectas = 0;
    document.getElementById("comenzar").style.display = "block";
    document.getElementById("siguiente").style.display = "none";
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}