import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Productos } from '../../model/producto.model';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule,NgFor, NgIf],
  standalone:true,
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit{
  ProductosEnCarrito:{producto:Productos;cantidad : number}[]=[]

  constructor (private carritoService : CarritoService){}

    ngOnInit():void{
      this.carritoService.carrito$.subscribe((producto)=>{
        this.ProductosEnCarrito=producto;
      })

    }
    agregarCantidad(index: number){
      this.ProductosEnCarrito[index].cantidad++;
      
    }
  
    quitarCantidad(index: number){
      if(this.ProductosEnCarrito[index].cantidad>1){
        this.ProductosEnCarrito[index].cantidad--;
      }
    }
  
    eliminarProducto(productoId: number){
      this.carritoService.eliminarDelCarrito(productoId);
    }
  
    vaciarCarrito(){
      this.carritoService.vaciarCarrito()
    }
  
    realizarCompra(){
      alert('Compra Realizada')
      this.vaciarCarrito()
    }
    calcularTotal(): number {
      return this.carritoService.calcularTotal();
    }
   
  

}
