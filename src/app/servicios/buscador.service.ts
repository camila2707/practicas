import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {
  private filtroSubject = new BehaviorSubject<string>(''); 
  filtro$ = this.filtroSubject.asObservable();

  setFiltro(valor: string) {
    this.filtroSubject.next(valor);
  }
}
