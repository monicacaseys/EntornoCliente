import { Component, Input } from '@angular/core'; //añadir input para qu eo se queje
import { Uusario } from '../usuario.model';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
@Input() usuarioFor: Uusario;
@Input() indice: number;
}
