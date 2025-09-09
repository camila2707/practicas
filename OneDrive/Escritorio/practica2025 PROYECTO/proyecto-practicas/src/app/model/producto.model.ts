export interface Productos{
    id:number;
    nombre:string;
    descripcion:string;
    precio:number;
    img:string;
    disponibilidad: boolean;
    cantidad?:number;
    categoria:string;
    oferta:number;
    stock:number;
    caracteristicas:string;
    marca:string;

}