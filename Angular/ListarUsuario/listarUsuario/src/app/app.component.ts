import { Component } from '@angular/core';
import { Uusario } from './usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'listarUsuario';
 
  usuarios: Uusario[] =[
    new Uusario ("Ana","Aranda", 20),
    new Uusario ("Ana","Bocheiras", 60),
    new Uusario ("Patri","Aranda", 20)
  ];

  anadirUsuario(){
    let miUsuario = new Uusario(this.datoNombre, this.datoApellido, this.datoEdad)
    this.usuarios.push(miUsuario);
  }
  datoNombre: String= "";
  datoApellido: String= "";
  datoEdad: number= 0;

  }

