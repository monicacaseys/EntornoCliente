import { Component } from '@angular/core';
import { Tarea } from './tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'tareas';
  tareas: Tarea[] = [];
  nuevaTarea: Tarea = new Tarea('', '', false);

  agregarTarea() {
    this.tareas.push(new Tarea(this.nuevaTarea.nombre, this.nuevaTarea.descripcion, this.nuevaTarea.urgente));
    this.nuevaTarea.nombre = '';
    this.nuevaTarea.descripcion = '';
    this.nuevaTarea.urgente = false;
  }
}
