import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OfertasService } from '../../servicios/ofertas.service';
import { Productos } from '../../model/producto.model';

@Component({
  selector: 'app-home',
  imports: [NgFor, CommonModule, RouterLink],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private ofertasService:OfertasService){}
  productosEnOferta: Productos[] = [];
  ngOnInit(): void {
    this.ofertasService.ofertas$.subscribe(productos => {
    this.productosEnOferta = productos;
  });
  }

  
 
  

imagenActiva = 0;

  

  activarImagen(index: number): void {
    this.imagenActiva = index;
  }
}




 




