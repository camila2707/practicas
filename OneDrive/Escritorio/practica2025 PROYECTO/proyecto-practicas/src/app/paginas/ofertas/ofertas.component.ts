import { Component, OnInit } from '@angular/core';
import { Productos } from '../../model/producto.model';
import { OfertasService } from '../../servicios/ofertas.service';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../servicios/carrito.service';
import { FavoritoService } from '../../servicios/favorito.service';

@Component({
  selector: 'app-ofertas',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent implements OnInit {
productosEnOferta: Productos[] = [];

  constructor(
    private ofertasService: OfertasService,
    private carritoService: CarritoService,
    private favoritoService: FavoritoService
  ) { }

 ngOnInit(): void {
  this.ofertasService.ofertas$.subscribe(productos => {
    this.productosEnOferta = productos;
  });
}



  agregar(producto: Productos) {
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito');

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
  agregarF(producto: Productos) {
    this.favoritoService.agregarFavorito(producto);
    alert('Producto agregado a favoritos')

  }
}
