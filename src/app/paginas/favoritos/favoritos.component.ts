import { Component, OnInit } from '@angular/core';
import { Productos } from '../../model/producto.model';
import { FavoritoService } from '../../servicios/favorito.service';
import { CommonModule, NgFor } from '@angular/common';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-favoritos',
  imports: [CommonModule,NgFor],
  standalone:true,
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent implements OnInit {
  productosEnFavoritos:{producto:Productos;cantidad : number}[]=[]

  constructor(private favoritoService:FavoritoService,
    private carritoService: CarritoService

  ){}
  ngOnInit(): void {
    this.favoritoService.favoritos$.subscribe((producto)=>{
      this.productosEnFavoritos=producto;
    })
    
  }
  agregarFavoritos(index:number){
    this.productosEnFavoritos[index].cantidad++

  }
  eliminarF(productoID:number){
    this.favoritoService.eliminarFavorito(productoID)

  }
  productoSeleccionado: Productos | null = null;

  productoSeleccionadoC: Productos | null = null;
  mostrardescripcion(producto: Productos) {
    if (this.productoSeleccionado === producto) {
      this.productoSeleccionado = null; // Oculta si ya estaba seleccionado
    } else {
      this.productoSeleccionado = producto; // Muestra el nuevo
    }
  }
  mostrarcaracteristicas(producto: Productos) {
    if (this.productoSeleccionadoC === producto) {
      this.productoSeleccionadoC = null; // Oculta si ya estaba seleccionado
    } else {
      this.productoSeleccionadoC = producto; // Muestra el nuevo
    }
  }
  agregar(producto: Productos) {
    this.carritoService.agregarProducto(producto);
    alert('Producto agregado al carrito');

  }

}
