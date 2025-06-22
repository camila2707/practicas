import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Productos } from '../model/producto.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carritoSubject = new BehaviorSubject <{producto: Productos ; cantidad : number}[]>([]);

  carrito$=this.carritoSubject.asObservable()

  agregarAlCarrito(producto:Productos){/*funcion para agregar al carrito */
    const productos=this.carritoSubject.getValue();
    const encontrado=productos.find(p => p.producto.id===producto.id);/*busca el producto por su ID */


    if(encontrado){
      encontrado.cantidad++/*cuando encuentre la cantidad o producto le va a ir sumando la cantidad */
       
    }else{
      this.carritoSubject.next([...productos,{producto,cantidad:1}])
    }

  }

  eliminarDelCarrito(productoId:number){/**funcion para eliminar del carrito */
    const productos=this.carritoSubject.getValue().filter(p=>p.producto.id !== productoId)/**utiliza un filtro para filtrar los productos por su ID */
    this.carritoSubject.next(productos)

  }

  vaciarCarrito(){/**funcion para vaciar el carrito */
    this.carritoSubject.next([])
  }

  //motodo para actualizar la cantidad de un producto en el carrito
  agregarCantidad(productoID:number, nuevaCantidad:number){
    //recorremos el carrito y actualizamos la cantidad del producto con el ID dado
    const productos= this.carritoSubject.getValue().map(item=>{
      if(item.producto.id===productoID){
        //retornamos una copia del producto con la nueva cantidad
        return{... item,cantidad:nuevaCantidad}
      }
      return item
    })
    //emitimos el nuevo estado del carrito
    this.carritoSubject.next(productos);
  }

  //metodo para obtener los productos del carrito como un arreglo
  obtenerProductos():{producto:Productos}[]{
    return this.carritoSubject.getValue();
  }
  //metodo para calcular el total a pagar (precio*cantidad de cada producto)
  obtenerTotal():number{
    const productos=this.carritoSubject.getValue();
    //usamos reduce para sumar los subtotales de cada producto
    return productos.reduce((total,item)=>total + item.producto.precio*item.cantidad,0);
  }


  constructor() { }
}
