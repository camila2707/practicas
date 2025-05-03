import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CarritoService } from '../../servicios/carrito.service';
import { Productos } from '../../model/producto.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone:true,
  imports: [CommonModule,RouterModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {


  Productos : Productos []= [
    {
      id:1,
    nombre:'string',
    descripcion:'',
    precio:1,
    img:'',
    disponibilidad: true,
    categoria:'',
    marca:'',
    stock:20,
    },

    {
      id:2,
    nombre:'s',
    descripcion:'',
    precio:1,
    img:'',
    disponibilidad: true,
    categoria:'',
    marca:'',
    stock:20,
    },


    
  ]


  constructor(private carritoService: CarritoService){}
  agregar(producto: Productos){
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito');
  }

}
