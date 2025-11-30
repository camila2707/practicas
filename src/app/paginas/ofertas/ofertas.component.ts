import { Component, OnInit } from '@angular/core';
import { Productos } from '../../model/producto.model';
import { OfertasService } from '../../servicios/ofertas.service';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../servicios/carrito.service';
import { FavoritoService } from '../../servicios/favorito.service';
import { ProductService } from '../../servicios/product.service';

@Component({
  selector: 'app-ofertas',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent implements OnInit {
    productosEnOferta: Productos[] = [];

  productoSeleccionado: Productos | null = null;
  productoSeleccionadoC: Productos | null = null;

  constructor(
    private productService: ProductService,
    private carritoService: CarritoService,
    private favoritoService: FavoritoService
  ) { }

 ngOnInit(): void {
  this.cargarOfertas();
}

// Cargar productos en oferta
cargarOfertas() {
  this.productService.obtenerOfertas().subscribe({
    next: (productos) => {
      this.productosEnOferta = productos;
    },
    error: (err) => {
      console.error('Error al obtener productos en oferta:', err);
    }
  });
}


  agregar(producto: Productos) {
    this.carritoService.agregarProducto(producto);
    alert('Producto agregado al carrito');
  }

  agregarfavorito(producto: Productos) {
    this.favoritoService.agregarFavorito(producto);
    alert('Producto agregado a favoritos');
  }

  mostrardescripcion(producto: Productos) {
    this.productoSeleccionado =
      this.productoSeleccionado === producto ? null : producto;
  }

  mostrarcaracteristicas(producto: Productos) {
    this.productoSeleccionadoC =
      this.productoSeleccionadoC === producto ? null : producto;
  }
}