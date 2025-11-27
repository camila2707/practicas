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

  // Cargar productos desde API
  cargarOfertas() {
    this.productService.obtenerProductos().subscribe({
      next: (productos) => {
        // Si tu API marca las ofertas con un campo, ej: "oferta == 1"
        this.productosEnOferta = productos.filter(p => p.oferta>0);
      },
      error: (err) => {
        console.error('Error al obtener productos:', err);
      }
    });
  }

  agregar(producto: Productos) {
    this.carritoService.agregarAlCarrito(producto);
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