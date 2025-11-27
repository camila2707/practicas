import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost/api_proyecto/public/products';

  constructor(private http: HttpClient) { }

  // ============================================================
  // GET /products  → público
  // ============================================================
 obtenerProductos(): Observable<any[]> {
  return this.http.get<any>(this.apiUrl).pipe(
    map(r => r.data)
  );
}


  // ============================================================
  // POST /products  → requiere rol admin
  // ============================================================
  crearProducto(data: any) {
    const token = localStorage.getItem('token') ?? '';

    return this.http.post(
      this.apiUrl,
      data,
      {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${token}`
        })
      }
    );
  }


  // ============================================================
  // PUT /products/:id  → requiere rol admin
  // (se usa POST con _method=PUT por FormData)
  // ============================================================
  actualizarProducto(id: number, formData: FormData): Observable<any> {
    const token = localStorage.getItem('token') ?? '';

    return this.http.post(
      `${this.apiUrl}/${id}?_method=PUT`,
      formData,
      {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${token}`
        })
      }
    );
  }



  // ============================================================
  // DELETE /products/:id  → requiere rol admin
  // ============================================================
  eliminarProducto(id: number): Observable<any> {
  const token = localStorage.getItem('token') ?? '';

  return this.http.delete(
    `${this.apiUrl}/${id}`,
    {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }
  );
}

}
