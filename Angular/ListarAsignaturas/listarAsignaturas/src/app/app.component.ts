import { Component } from '@angular/core';
import { Profesor } from './profesor.model';
import { Asignatura } from './asignatura.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'listarAsignaturas';

  profesor: Profesor[] = [
    new Profesor ("Antonio","Martinez"),
    new Profesor ("Paca","Lapiraña")
  ]

  asignaturas: Asignatura[] = [
    new Asignatura ("Base de datos",6, this.profesor[1]),
    new Asignatura ("Despliegues",8, this.profesor[2])

  ]
  anadirProfesor(){
    let prof = new Profesor(this.datoNombre, this.datoApellido)
    this.profesor.push(prof);
  }
  datoNombre: String= "";
  datoApellido: String= "";

  /* anadirAsigatura(){
    let asig = new Asignatura(this.datoTematica, this.datoHoras)
    this.asignaturas.push(asig);
  } */
  datoTematica: String= "";
  datoHoras: number= 0;


}
