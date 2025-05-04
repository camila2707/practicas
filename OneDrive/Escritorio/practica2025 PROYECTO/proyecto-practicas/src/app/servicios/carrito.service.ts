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

  calcularTotal(): number {
    const productos = this.carritoSubject.getValue(); // obtiene el array actual
    let total = 0;
    for (const item of productos) {
      total += item.cantidad * item.producto.precio;
    }
    console.log('Total calculado:', total);
    return total;
  }
 
 

  constructor() { }
}
