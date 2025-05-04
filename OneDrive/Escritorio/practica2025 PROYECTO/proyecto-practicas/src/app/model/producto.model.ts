export interface Productos{
    id:number;
    nombre:string;
    descripcion:string;
    precio:number;
    img:string;
    disponibilidad: boolean;
    cantidad?:number;
    categoria:string;
    marca:string;
    stock:number;
    caracteristicas:string;

}