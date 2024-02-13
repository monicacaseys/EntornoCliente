export class Tarea{

    nombre: String="";
    descripcion: String="";
    importante: boolean=true;

    constructor (nombre:String, descripcion:String, importante:boolean){
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.importante=importante;
    }
}

