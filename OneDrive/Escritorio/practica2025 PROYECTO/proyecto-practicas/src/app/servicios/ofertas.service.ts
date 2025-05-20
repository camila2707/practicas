import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Productos } from '../model/producto.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  private l = new BehaviorSubject<Productos[]>([]);


  ofertas$ = this.l.asObservable().pipe(
    map(productos => productos.filter(p => p.oferta === true))
  );

  cargarProductos(productos: Productos[]) {
    this.l.next(productos);
  }
}