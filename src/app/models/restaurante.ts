export class Restaurante {
    
    id:number;
    nombre:string;
    direccion:string;
    barrio:string;
    web:string;
    fichaGoogle:string;
    latitud:number;
    longuitud:number;
    precio: number;
    especialidad1: string;
    especialidad2: string;
    especialidad3: string;
    creadoEn:string;

    constructor()
    {
        this.id =0;
        this.nombre='';
        this.direccion='';
        this.barrio='';
        this.web='';
        this.fichaGoogle='';
        this.latitud=0;
        this.longuitud=0;
        this.precio=0;
        this.especialidad1='';
        this.especialidad2='';
        this.especialidad3='';
        this.creadoEn='';
    }
}
