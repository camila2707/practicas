import { Component } from '@angular/core';
import { CarritoService } from '../../servicios/carrito.service';
import { CompraService } from '../../servicios/compra.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historialcompra',
  imports: [RouterLink,CommonModule],
  standalone:true,
  templateUrl: './historialcompra.component.html',
  styleUrl: './historialcompra.component.css'
})
export class HistorialcompraComponent {
  // Arreglo donde se almacenan todas las compras realizadas por el usuario.
  compras: any[] = [];

  // Indica si los datos aún se están cargando (para mostrar spinners o textos de carga).
  cargando: boolean = true;

  // Contiene mensajes de error si la carga de compras falla.
  error: string = '';

  constructor(
    // Servicio encargado de obtener compras desde el backend.
    private compraService: CompraService
  ) {}

  // Al inicializar el componente, se dispara la carga de compras.
  ngOnInit(): void {
    this.cargarCompras();
  }

  // Llama al servicio para obtener todas las compras del usuario.
  cargarCompras(): void {

    this.compraService.obtenerCompras().subscribe({

      // Si la petición es exitosa:
      next: (res: any[]) => {
        this.compras = res;      // Carga el historial recibido del backend.
        this.cargando = false;   // Quita el estado de carga.
      },

      // Si ocurre un error al cargar las compras:
      error: (err) => {
        this.error = 'No se pudieron cargar las compras.'; // Mensaje para mostrar en la vista.
        this.cargando = false;
        console.error(err); // Registro en consola para debugging.
      }
    });
  }

}
