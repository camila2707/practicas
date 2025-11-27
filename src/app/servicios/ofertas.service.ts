import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Productos } from '../model/producto.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  private ofertaSubject = new BehaviorSubject<Productos[]>([]);


  ofertas$ = this.ofertaSubject.asObservable().pipe(
    map(productos => productos.filter(p => p.oferta>0))
  );

  cargarProductos(productos: Productos[]) {
    this.ofertaSubject.next(productos);
  }
}