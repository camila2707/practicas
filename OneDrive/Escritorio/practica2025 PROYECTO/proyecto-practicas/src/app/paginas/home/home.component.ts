import { CommonModule, NgFor } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OfertasService } from '../../servicios/ofertas.service';
import { Productos } from '../../model/producto.model';



@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private ofertasService: OfertasService) { }
  productosEnOferta: Productos[] = [];
  ngOnInit(): void {
    this.ofertasService.ofertas$.subscribe(productos => {
      this.productosEnOferta = productos;
    });
  }
  lgos=[
    {
      id:1,
      img:"./assets/ofertalogo.webp",
      esc:"¡Aprovecha las diferentes ofertas!",
    },
    {
      id:2,
      img:"./assets/logotarjeta.jpg",
      esc:"Elegi tu metodo de pago favorito",
    },
    {
      id:3,
      img:"./assets/cajalogo.jpg",
      esc:"Recibi los productos en menos de 48hs",
    },
  ]
  





 
}









