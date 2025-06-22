import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Productos } from '../../model/producto.model';
import { CarritoService } from '../../servicios/carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule,NgFor, NgIf],
  standalone:true,
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit{
  ProductosEnCarrito:{producto:Productos;cantidad : number}[]=[]

  constructor (private carritoService : CarritoService,/*se llaman los servicios */
    private router:Router
  ){}

    ngOnInit():void{
      this.carritoService.carrito$.subscribe((producto)=>{
        this.ProductosEnCarrito=producto;
      })

    }
    agregarCantidad(index: number){/*funcion para agregar cantidad */
      this.ProductosEnCarrito[index].cantidad++;
      
    }
  
    quitarCantidad(index: number){/*funcion para restar cantidad */
      if(this.ProductosEnCarrito[index].cantidad>1){
        this.ProductosEnCarrito[index].cantidad--;
      }
    }
  
    eliminarProducto(productoId: number){/*funcion para eliminar productos del carrito */
      this.carritoService.eliminarDelCarrito(productoId);
    }
  
    vaciarCarrito(){/*funcion para vaciar el carrito */
      this.carritoService.vaciarCarrito()
    }
  
    /*realizarCompra(){
      alert('Compra Realizada')
      this.vaciarCarrito()
    }*/
   
    irAFormulario(){
      //redirige al usuariio a la ruta '/compra', donde se me encuentra el formulario 
     this.router.navigate(['/compra'])
    }

    //calcular el total del carrito de compras
    calcularTotal():number{
      //recorre el arreglo de productos en el carrito y suma el resultado de (precio*cantidad) de cada item
      return this.ProductosEnCarrito.reduce((total,item)=>{
        return total + item.producto.precio*item.cantidad
      },0); // el acumulador total comienza en 0
    }
   
  

}
