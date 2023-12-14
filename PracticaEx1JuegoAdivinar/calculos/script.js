document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        calcularEstadisticas();
    });

    mostrarEstadisticasGuardadas();
});

function calcularEstadisticas() {
    const inputNumeros = document.getElementById("numeros");
    const resultadosDiv = document.getElementById("resultados");

    const numeros = inputNumeros.value.split(',').map(Number);

    if (numeros.some(isNaN)) {
        resultadosDiv.innerHTML = '<p>Ingrese números válidos.</p>';
        return;
    }

    const media = calcularMedia(numeros);
    const desviacion = calcularDesviacionEstandar(numeros);

    resultadosDiv.innerHTML = `
        <p>Media: ${media.toFixed(2)}</p>
        <p>Desviación Estándar: ${desviacion.toFixed(2)}</p>
    `;

    // Guardar estadísticas en localStorage
    localStorage.setItem('media', media.toFixed(2));
    localStorage.setItem('desviacion', desviacion.toFixed(2));

    // Mostrar estadísticas guardadas
    mostrarEstadisticasGuardadas();
}

function mostrarEstadisticasGuardadas() {
    const mediaGuardada = localStorage.getItem('media');
    const desviacionGuardada = localStorage.getItem('desviacion');

    if (mediaGuardada && desviacionGuardada) {
        const resultadosDiv = document.getElementById("resultados");
        resultadosDiv.innerHTML += `
            <p>Media almacenada: ${mediaGuardada}</p>
            <p>Desviación Estándar almacenada: ${desviacionGuardada}</p>
        `;
    }
}

function calcularMedia(numeros) {
    const suma = numeros.reduce((total, numero) => total + numero, 0);
    return suma / numeros.length;
}

function calcularDesviacionEstandar(numeros) {
    const media = calcularMedia(numeros);
    const sumatoriaCuadrados = numeros.reduce((total, numero) => total + Math.pow(numero - media, 2), 0);
    return Math.sqrt(sumatoriaCuadrados / numeros.length);
}
