import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { OfertasComponent } from './paginas/ofertas/ofertas.component';
import { QuienessomosComponent } from './paginas/quienessomos/quienessomos.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';
import { FavoritosComponent } from './paginas/favoritos/favoritos.component';
import { PreguntasfrecuentesComponent } from './paginas/preguntasfrecuentes/preguntasfrecuentes.component';
import { CompraComponent } from './paginas/compra/compra.component';
import { InicioSesionComponent } from './shared/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './shared/registro/registro.component';
import { HistorialcompraComponent } from './paginas/historialcompra/historialcompra.component';
import { AdminComponent } from './paginas/admin/admin.component';
import { AdminGuard } from './guards/admin.guard';

export const routes: Routes = [

    {path:'', redirectTo:'/inicio', pathMatch:'full'},
    {path:'inicio',component:HomeComponent},
    {path:'productos',component:ProductosComponent},
    {path:'ofertas', component:OfertasComponent},
    {path:'quienessomos',component:QuienessomosComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'carrito',component:CarritoComponent},
    {path:'favoritos',component:FavoritosComponent},
    {path:'preguntasfrecuentes',component:PreguntasfrecuentesComponent},
    {path:'compra',component:CompraComponent},
    {path:'iniciosesion',component:InicioSesionComponent},
    {path:'registro',component:RegistroComponent},
    
  // -----------------------------------------------------------
  // Historial de compras del usuario
  // -----------------------------------------------------------
  { path: 'compras',component:HistorialcompraComponent },

  // -----------------------------------------------------------
  // Página del ticket generado tras comprar
  // Se usa loadComponent() → lazy loading del componente
  // Esto evita cargar el componente hasta que alguien acceda.
  // Se obtiene el :id de la compra (id_compra)
  // -----------------------------------------------------------
  {
    path: 'ticket/:id',
    loadComponent: () =>
      import('./paginas/ticket/ticket.component')
      .then(m => m.TicketComponent)
  },

  // -----------------------------------------------------------
  // Panel de administración
  // Está protegido por AdminGuard → solo usuario con rol "admin"
  // puede acceder.
  // Si no es admin, se redirige a /inicio-sesion (login)
  // -----------------------------------------------------------
  { 
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard]
  },

];
