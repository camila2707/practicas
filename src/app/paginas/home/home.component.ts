import { CommonModule, NgFor } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OfertasService } from '../../servicios/ofertas.service';
import { Productos } from '../../model/producto.model';
import { ProductService } from '../../servicios/product.service';



@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  productosEnOferta: Productos[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  this.cargarOfertas();
}

// Cargar productos desde API
cargarOfertas() {
  this.productService.obtenerProductos().subscribe({
    next: (productos) => {
      this.productosEnOferta = productos.filter(p => p.oferta > 0);
      console.log(this.productosEnOferta);
    },
    error: (err) => {
      console.error('Error al obtener productos:', err);
    }
  });
}

  lgos = [
    {
      id: 1,
      img: "./assets/ofertalogo.png",
      esc: "¡Aprovecha las diferentes ofertas!",
    },
    {
      id: 2,
      img: "./assets/logotarjeta.png",
      esc: "Elegí tu método de pago favorito",
    },
    {
      id: 3,
      img: "./assets/cajalogo.png",
      esc: "Recibí los productos en menos de 48hs",
    },
  ];
}