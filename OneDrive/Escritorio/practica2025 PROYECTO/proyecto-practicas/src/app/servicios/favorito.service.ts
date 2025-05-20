import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Productos } from '../model/producto.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {
  private favoritoSubject = new BehaviorSubject <{producto: Productos ; cantidad : number}[]>([]);
  favoritos$=this.favoritoSubject.asObservable()

  agregarFavorito(producto:Productos){
    const productos=this.favoritoSubject.getValue();
    const encontrado=productos.find(p => p.producto.id===producto.id);
    if(encontrado){
      encontrado.cantidad++
    }else{
      this.favoritoSubject.next([...productos,{producto,cantidad:1}])
    }

  }
  eliminarFavorito(productoID:number){
    const productos= this.favoritoSubject.getValue().filter(p=>p.producto.id !== productoID)
    this.favoritoSubject.next(productos);

  }


  constructor() { }
}
