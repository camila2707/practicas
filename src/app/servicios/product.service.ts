import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Productos } from '../model/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost/api_proyecto/public/products';

  constructor(private http: HttpClient) { }

  // =============================
  // Helper para obtener token
  // =============================
  private getToken(): string {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('token') ?? '';
    }
    return '';
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`,
      'Content-Type': 'application/json'
    });
  }
  private getFormHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`
    });
  }


  // =============================
  // GET público
  // =============================
  obtenerProductos(): Observable<Productos[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(res => Array.isArray(res) ? res : res.data || [])
    );
  }

  // GET con token
  obtenerProductosConToken(): Observable<Productos[]> {
    return this.http.get<any>(this.apiUrl, { headers: this.getHeaders() }).pipe(
      map(res => Array.isArray(res) ? res : res.data || [])
    );
  }

  // Obtener solo productos en oferta
  obtenerOfertas(): Observable<Productos[]> {
    return this.obtenerProductos().pipe(
      map(productos => productos.filter(p => p.oferta > 0))
    );
  }

  // =============================
  // POST → crear producto (admin)
  // =============================
  crearProducto(data: FormData): Observable<any> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(this.apiUrl, data, { headers });
  }




  // =============================
  // PUT → actualizar producto (admin)
  // =============================
  actualizarProducto(id: number, formData: FormData): Observable<any> {
    formData.set("_method", "PUT");

    return this.http.post(`${this.apiUrl}/${id}`, formData, {
      headers: this.getFormHeaders()
    });
  }





  // =============================
  // DELETE → eliminar producto (admin)
  // =============================
  eliminarProducto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

}
