import { Profesor } from "./profesor.model";
export class Asignatura{
    tematica: String="";
    horas: number=0;
    profesor: Profesor = new Profesor("","");
 

    constructor(tematica:String, horas:number, profesor:Profesor){
        this.tematica=tematica;
        this.horas=horas;
        this.profesor= profesor;

    }
   
}