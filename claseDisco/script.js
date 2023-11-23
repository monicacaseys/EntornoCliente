class Disco {
    constructor(nombre, cantante, año, tipo, localizacion, prestado) {
      this.nombre = nombre;
      this.cantante = cantante;
      this.año = año;
      this.tipo = tipo;
      this.localizacion = localizacion;
      this.prestado = prestado;
    }

    validarAño() {
      return this.año >= 1902 && this.año <= 2020;
    }

    cambiarLocalizacion(nuevaLocalizacion) {
      this.localizacion = nuevaLocalizacion;
    }

    comprobarDisponibilidad() {
      return !this.prestado;
    }
  }

  let discos = [];
  let mostrarMenu = true;


  function agregarDisco() {
    let nombre = prompt("Nombre del disco:");
    let cantante = prompt("Cantante:");
    let año = parseInt(prompt("Año de publicación:"));
    let tipo = prompt("Tipo de música (Rock, Pop, Indie, Punk):");
    let localizacion = parseInt(prompt("Número de estantería:"));
    let prestado = false;

    if (año < 1902 || año > 2020) {
      alert("Año no válido. Debe estar entre 1902 y 2020.");
      return;
    }

    let disco = new Disco(nombre, cantante, año, tipo, localizacion, prestado);

    discos.push(disco);
    alert("Disco agregado con éxito.");
  }

  function mostrarNumeroDiscos() {
    alert(`Número de discos registrados: ${discos.length}`);
  }

  function mostrarListadoAscendente() {
    discos.sort((a, b) => a.nombre.localeCompare(b.nombre));

    // Obtener el contenedor HTML
    let listaDiscosContainer = document.getElementById("lista-discos");

    // Limpiar el contenido anterior
    listaDiscosContainer.innerHTML = "";

    // Crear elementos HTML para cada disco
    discos.forEach(disco => {
      let discoElement = document.createElement("div");
      discoElement.classList.add("disco");

      let tituloElement = document.createElement("div");
      tituloElement.classList.add("titulo");
      tituloElement.textContent = disco.nombre;

      let infoElement = document.createElement("div");
      infoElement.innerHTML = `
        <p><strong>Cantante:</strong> ${disco.cantante}</p>
        <p><strong>Año:</strong> ${disco.año}</p>
        <p><strong>Tipo:</strong> ${disco.tipo}</p>
        <p><strong>Estantería:</strong> ${disco.localizacion}</p>
        <p><strong>Prestado:</strong> ${disco.prestado ? 'Sí' : 'No'}</p>
      `;

      // Agregar elementos al contenedor
      discoElement.appendChild(tituloElement);
      discoElement.appendChild(infoElement);
      listaDiscosContainer.appendChild(discoElement);
    });

    // Desactivar la opción de mostrar el menú después de mostrar el listado
    mostrarMenu = false;
  }

  function mostrarListadoDescendente() {
    discos.sort((a, b) => b.año - a.año);
    let mensaje = "Listado de discos (Descendente por Año de Publicación):\n";
    discos.forEach(disco => mensaje += `${disco.nombre} - ${disco.año}\n`);
    alert(mensaje);
  }

  function mostrarIntervaloConcreto() {
    let añoInicio = parseInt(prompt("Año de inicio del intervalo:"));
    let añoFin = parseInt(prompt("Año de fin del intervalo:"));

    let discosIntervalo = discos.filter(disco => disco.año >= añoInicio && disco.año <= añoFin);

    let mensaje = `Listado de discos en el intervalo ${añoInicio}-${añoFin}:\n`;
    discosIntervalo.forEach(disco => mensaje += `${disco.nombre} - ${disco.año}\n`);
    alert(mensaje);
  }

  function mostrarTipoMusicaConcreta() {
    let tipoMusica = prompt("Tipo de música a filtrar (Rock, Pop, Indie, Punk):");

    let discosTipoMusica = discos.filter(disco => disco.tipo.toLowerCase() === tipoMusica.toLowerCase());

    let mensaje = `Listado de discos de ${tipoMusica}:\n`;
    discosTipoMusica.forEach(disco => mensaje += `${disco.nombre} - ${disco.año}\n`);
    alert(mensaje);
  }

  function borrarDisco() {
    let nombreDisco = prompt("Nombre del disco a borrar:");
    discos = discos.filter(disco => disco.nombre !== nombreDisco);
    alert("Disco borrado con éxito.");
  }

  function cambiarLocalizacionDisco() {
    let nombreDisco = prompt("Nombre del disco:");
    let nuevaLocalizacion = parseInt(prompt("Nueva estantería:"));

    let disco = discos.find(disco => disco.nombre === nombreDisco);

    if (disco) {
      disco.cambiarLocalizacion(nuevaLocalizacion);
      alert("Localización cambiada con éxito.");
    } else {
      alert("Disco no encontrado.");
    }
  }

  let opcion;

  do {
    if (mostrarMenu) {
      // Mostrar el menú en alert
      alert("Menú:\n1. Añadir un disco\n2. Mostrar el número de discos registrados\n3. Mostrar el listado de discos (Ascendente por Título)\n4. Mostrar el listado de discos (Descendente por Año de Publicación)\n5. Mostrar los discos de un intervalo concreto\n6. Mostrar los discos de un tipo de música concreta\n7. Borrar un disco\n8. Cambiar disco de estantería\n9. Terminar");
      opcion = parseInt(prompt("Ingrese el número de la opción deseada:"));
    } else {
      // Si no se debe mostrar el menú, asumimos que el usuario eligió "Terminar"
      opcion = 9;
    }

    switch (opcion) {
      case 1:
        agregarDisco();
        break;
      case 2:
        mostrarNumeroDiscos();
        break;
      case 3:
        mostrarListadoAscendente();
        break;
      case 4:
        mostrarListadoDescendente();
        break;
      case 5:
        mostrarIntervaloConcreto();
        break;
      case 6:
        mostrarTipoMusicaConcreta();
        break;
      case 7:
        borrarDisco();
        break;
      case 8:
        cambiarLocalizacionDisco();
        break;
      case 9:
        alert("¡Hasta luego!");
        break;
      default:
        alert("Opción no válida. Intente nuevamente.");
    }
  } while (opcion !== 9);
