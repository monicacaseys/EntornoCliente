export default class Disco {
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
