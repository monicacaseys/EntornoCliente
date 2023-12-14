document.addEventListener("DOMContentLoaded", function() {
    const nombre = document.getElementById('nombre');
    const edad = document.getElementById('edad');
    const poder = document.getElementById('poder');
    const habilidades = document.getElementById('habilidades');
    const registroForm = document.getElementById('registroForm');
    const registroBtn = document.getElementById('registroBtn');
    const mensajeRegistro = document.getElementById('mensajeRegistro');

    const ultimoHeroe = localStorage.getItem('ultimoHeroe');

    if (ultimoHeroe) {
        // Mostrar un mensaje con el último superhéroe registrado
        const mensajeUltimoHeroe = document.createElement('p');
        mensajeUltimoHeroe.textContent = `¡El último superhéroe registrado fue: ${ultimoHeroe}!`;
        mensajeRegistro.appendChild(mensajeUltimoHeroe);
    }

    nombre.focus();

    registroBtn.addEventListener('click', function() {
        validarNombre(nombre);
        validarEdad(edad);
        validarPoder(poder);
        validarHabilidades(habilidades);

        const errores = document.querySelectorAll('.error:not(:empty)');
        if (errores.length === 0) {
            mostrarMensajeRegistro();
        }
    });

    function validarNombre(campo) {
        let valorCampo = campo.value;
        let error = document.getElementById('errorNombre');

        if (!error) {
            error = document.createElement('div');
            error.id = 'errorNombre';
            error.className = 'error';
            campo.parentNode.appendChild(error);
        }

        if (valorCampo === "" || valorCampo.length < 3) {
            error.innerHTML = "Introduce un nombre válido (mínimo 3 caracteres).";
        } else {
            error.innerHTML = "";
        }
    }

    function validarEdad(campo) {
        let valorCampo = campo.value;
        let error = document.getElementById('errorEdad');
        let regex = /^\d+$/;

        if (!error) {
            error = document.createElement('div');
            error.id = 'errorEdad';
            error.className = 'error';
            campo.parentNode.appendChild(error);
        }

        if (valorCampo === "" || valorCampo < 18 || valorCampo > 150 || !regex.test(valorCampo)) {
            campo.value = valorCampo.slice(0, 2);
            error.innerHTML = "Introduce una edad válida (entre 18 y 150).";
        } else {
            error.innerHTML = "";
        }
    }

    function validarPoder(campo) {
        let valorCampo = campo.value;
        let error = document.getElementById('errorPoder');

        if (!error) {
            error = document.createElement('div');
            error.id = 'errorPoder';
            error.className = 'error';
            campo.parentNode.appendChild(error);
        }

        if (valorCampo === "") {
            error.innerHTML = "Introduce el poder principal del superhéroe.";
        } else {
            error.innerHTML = "";
        }
    }

    function validarHabilidades(campo) {
        let error = document.getElementById('errorHabilidades');
        let selectedOptions = Array.from(campo.selectedOptions);

        if (!error) {
            error = document.createElement('div');
            error.id = 'errorHabilidades';
            error.className = 'error';
            campo.parentNode.appendChild(error);
        }

        if (selectedOptions.length < 2) {
            error.innerHTML = "Selecciona al menos dos habilidades adicionales.";
        } else {
            error.innerHTML = "";
        }
    }

    function mostrarMensajeRegistro() {
        const mensaje = generarMensajeRegistro(nombre.value);
        mensajeRegistro.innerHTML = mensaje;
        limpiarFormulario();
        // Almacenar el nombre en localStorage
        localStorage.setItem('ultimoHeroe', nombre.value);
    }

    function generarMensajeRegistro(nombreHeroe) {
        return `¡Registrado con éxito, ${nombreHeroe}! Eres oficialmente un superhéroe.`;
    }

    function limpiarFormulario() {
        nombre.value = "";
        edad.value = "";
        poder.value = "";
        habilidades.selectedIndex = -1;
    }
});
