export class Tarea{

    nombre: String="";
    descripcion: String="";
    urgente: boolean=true;

    constructor (nombre:String, descripcion:String, urgente:boolean){
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.urgente=urgente;
    }
}

