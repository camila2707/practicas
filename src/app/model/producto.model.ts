export interface Productos{
    Id_productos:number;
    Nombre:string;
    Descripcion:string;
    Precio:number;
    Imagen:string;
    disponibilidad: boolean;
    cantidad?:number;
    categoria:string;
    oferta:number;
    stock:number;
    caracteristicas:string;
    marca:string;

}