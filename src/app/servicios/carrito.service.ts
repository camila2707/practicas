import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private apiUrl = 'http://localhost/api_proyecto/public/carrito';

  private carritoSubject = new BehaviorSubject<any[]>([]);
  carrito$ = this.carritoSubject.asObservable();

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  setCarrito(items: any[]) {
    this.carritoSubject.next(items);
  }

  /* ============================================
     HEADERS CON TOKEN
  ============================================ */
  private getHeaders() {
    const token = localStorage.getItem('token') ?? '';

    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
  }


  /* ============================================
     OBTENER CARRITO
  ============================================ */
  obtenerCarrito(): Observable<any[]> {
    // Llama al endpoint GET /carrito
    return this.http.get<any[]>(this.apiUrl, this.getHeaders());
  }
  

  cargarCarrito(): void {
    

    if (!isPlatformBrowser(this.platformId)) return; // SSR safe

    const token = localStorage.getItem('token');
    if (!token) {
      console.warn('No hay token, no se carga carrito');
      return;
    }

    this.obtenerCarrito().subscribe({
      next: items => {
        // Actualiza el observable con los items recibidos.
        this.carritoSubject.next(items);
         console.log("TOKEN ENVIADO:", localStorage.getItem('token'));
      },
      error: () => {
        // Si falla, se vacía para evitar inconsistencias.
        this.carritoSubject.next([]);
      }
    });
  }/*
  cargarCarrito(): void {
    this.obtenerCarrito().subscribe({
      next: items => {
        // Actualiza el observable con los items recibidos.
        this.carritoSubject.next(items);
      },
      error: () => {
        // Si falla, se vacía para evitar inconsistencias.
        this.carritoSubject.next([]);
      }
    });
  }*/



  /* ============================================
     AGREGAR PRODUCTO
     POST /carrito/agregar
  ============================================ */
  agregarAlCarrito(producto: any): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/agregar`,
      {
        product_id: producto.Id_productos,
        cantidad: 1
      },
      this.getHeaders()
    ).pipe(
      tap(() => this.cargarCarrito())
    );
  }


  /* ============================================
     ACTUALIZAR CANTIDAD
     PUT /carrito/{id}
  ============================================ */
  actualizarCantidad(idDetalleCarrito: number, cantidad: number): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/${idDetalleCarrito}`,
      { cantidad },
      this.getHeaders()
    ).pipe(
      tap((r: any) => {
        if (r?.data) this.carritoSubject.next(r.data);
      })
    );
  }


  /* ============================================
     ELIMINAR ITEM
     DELETE /carrito/{id}
  ============================================ */
  eliminarProducto(idDetalleCarrito: number): Observable<any> {
    return this.http.delete<any>(
      `${this.apiUrl}/${idDetalleCarrito}`,
      this.getHeaders()
    ).pipe(
      tap((r: any) => {
        if (r?.data) this.carritoSubject.next(r.data);
      })
    );
  }


  /* ============================================
     VACIAR CARRITO
     DELETE /carrito
  ============================================ */
  vaciarCarrito(): Observable<any> {
    return this.http.delete<any>(
      this.apiUrl,
      this.getHeaders()
    ).pipe(
      tap(() => this.carritoSubject.next([]))
    );
  }
}
