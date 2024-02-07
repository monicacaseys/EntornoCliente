export class Profesor{
    nombre: String="";
    apellido: String="";
 

    constructor(nombre:String, apellido:String){
        this.nombre=nombre;
        this.apellido=apellido;
    }
    //paraque imprima el string y no salga objeto 
    imprimir(){
        return `Nombre: ${this.nombre} Apelido: ${this.apellido}`;
    }
}