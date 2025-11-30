import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, tap, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Productos } from '../model/producto.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private apiUrl = 'http://localhost/api_proyecto/public/carrito';
  private carritoSubject = new BehaviorSubject<any[]>([]);
  carrito$ = this.carritoSubject.asObservable();

  constructor(private http: HttpClient, private authService: AuthService) { }

  // ----------------------------------------
  // Headers con token
  // ----------------------------------------
  private getHeaders(): HttpHeaders | null {
    const token = this.authService.getToken();
    console.log('Token actual:', token); // depuración
    if (!token) return null;
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  // ----------------------------------------
  // Cargar carrito del usuario logueado
  // ----------------------------------------
  cargarCarrito(): Observable<any[]> {
    const headers = this.getHeaders();
    
    if (!headers) return throwError(() => new Error('No hay token disponible'));

    return this.http.get<any[]>(this.apiUrl, { headers }).pipe(
      tap(items => this.carritoSubject.next(Array.isArray(items) ? items : [])),
      catchError(err => {
        console.error('Error cargando carrito:', err);
        if (err.status === 403) console.warn('403 Forbidden: revisa token y permisos en el backend');
        return throwError(() => err);
      })
    );
  }

  // ----------------------------------------
  // Obtener carrito como observable
  // ----------------------------------------
  obtenerCarrito(): Observable<any[]> {
    const headers = this.getHeaders();
    if (!headers) return of([]);
    return this.http.get<any[]>(this.apiUrl, { headers });

  }

  // ----------------------------------------
  // Agregar producto al carrito
  // ----------------------------------------
  agregarProducto(producto: Productos): Observable<any> {
    
    const headers = this.getHeaders();
    if (!headers) return of({ error: 'No autorizado' });

    const body = {
      Id_productos: producto.Id_productos,
      cantidad: 1,
      precio_unitario: producto.Precio
    };
    console.log("Enviando al carrito:", body);


    return this.http.post(`${this.apiUrl}/agregar`, body, { headers }).pipe(
      switchMap(() => this.cargarCarrito()),
      catchError(err => {
        console.error('Error agregando al carrito:', err);
        return of({ error: err });
      })
    );
  }


  // ----------------------------------------
  // Actualizar cantidad de un producto
  // ----------------------------------------
  actualizarProducto(detalleId: number, cantidad: number): Observable<any> {
    const headers = this.getHeaders();
    if (!headers) return of({ error: 'No autorizado' });

    return this.http.put(`${this.apiUrl}/actualizar/${detalleId}`, { cantidad }, { headers }).pipe(
      switchMap(() => this.cargarCarrito()),
      catchError(err => {
        console.error('Error actualizando carrito:', err);
        return of({ error: err });
      })
    );
  }

  // ----------------------------------------
  // Eliminar producto del carrito
  // ----------------------------------------
  eliminarProducto(detalleId: number): Observable<any> {
    const headers = this.getHeaders();
    if (!headers) return of({ error: 'No autorizado' });

    return this.http.delete(`${this.apiUrl}/eliminar/${detalleId}`, { headers }).pipe(
      switchMap(() => this.cargarCarrito()),
      catchError(err => {
        console.error('Error eliminando producto:', err);
        return of({ error: err });
      })
    );
  }

  // ----------------------------------------
  // Vaciar carrito
  // ----------------------------------------
  vaciarCarrito(): Observable<any> {
    const headers = this.getHeaders();
    if (!headers) return of({ error: 'No autorizado' });

    return this.http.delete(`${this.apiUrl}/vaciar`, { headers }).pipe(
      tap(() => this.carritoSubject.next([])),
      catchError(err => {
        console.error('Error vaciando carrito:', err);
        return of({ error: err });
      })
    );
  }
}
