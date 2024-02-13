import { Component } from '@angular/core';
import { Tarea } from './tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tareas';

  tareas: Tarea[]=[
    new Tarea("Morir","rapido",true)

  ]; 
  //aqui va agrgarTarea
  agergarTarea(){
    let miTarea= new Tarea(this.nombre,this.descripcion,this.urgent);
    this.tareas.push(miTarea); // me falta añadirlo al array que tengo declarado en otro archivo
  }

  nombre:String="";
  descripcion:String="";
  urgent:boolean=true;
}
