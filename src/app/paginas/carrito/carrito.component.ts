import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../servicios/carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {

  carrito: any[] = [];
  envio: number = 1500;
  total: number = 0;

  constructor(
    public carritoService: CarritoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarCarrito();
  }

  cargarCarrito(): void {
    this.carritoService.obtenerCarrito().subscribe({
      next: (items: any[]) => {
        this.carrito = items || [];
        this.calcularTotal();
      },
      error: () => {
        this.carrito = [];
        this.total = 0;
      }
    });
  }

  calcularTotal(): void {
    this.total = this.carrito.reduce(
      (sum, item) => sum + Number(item.subtotal),
      0
    );
  }

  cambiarCantidad(idDetalleCarrito: number, event: any): void {
    const nuevaCantidad = Number(event.target.value);

    this.carritoService.actualizarCantidad(idDetalleCarrito, nuevaCantidad).subscribe({
      next: (res: any) => {
        const items = res.carrito ?? res ?? [];
        this.carrito = items;
        this.calcularTotal();
      }
    });
  }

  eliminar(idDetalleCarrito: number): void {
    this.carritoService.eliminarProducto(idDetalleCarrito).subscribe({
      next: (res: any) => {
        const items = res.carrito ?? res ?? [];
        this.carrito = items;
        this.calcularTotal();
      }
    });
  }

  vaciarCarrito(): void {
    this.carritoService.vaciarCarrito().subscribe({
      next: () => {
        this.carrito = [];
        this.total = 0;
      }
    });
  }

  irACompra(): void {
    this.router.navigate(['/compra']);
  }
}
