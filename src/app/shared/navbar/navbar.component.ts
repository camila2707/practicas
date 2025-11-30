import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { BuscadorService } from '../../servicios/buscador.service';
import { AuthService } from '../../servicios/auth.service';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule, RouterModule],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cantidadProductos = 0;
  modoOscuroActivado = false;
  usuario: any = null;

  constructor(
    private carritoService: CarritoService,
    private buscadorService: BuscadorService,
    public authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    // Usuario actual
    this.usuario = this.authService.getUsuario();

    // Cargar carrito si está logueado
    if (this.authService.isLoggedIn()) {
      this.carritoService.cargarCarrito().subscribe({
        next: () => console.log('Carrito cargado con token'),
        error: err => console.error('Error cargando carrito:', err)
      });
    } else {
      this.carritoService.vaciarCarrito();
    }

    // Suscribirse a cambios del carrito
    this.carritoService.carrito$.subscribe(items => {
      this.cantidadProductos = items.reduce((acc, item) => acc + Number(item.cantidad || 1), 0);
    });

    // Escuchar login para recargar usuario y carrito
    this.authService.loginEvent.subscribe(() => {
      this.usuario = this.authService.getUsuario();
      this.carritoService.cargarCarrito().subscribe();
    });

    // Modo oscuro
    if (isPlatformBrowser(this.platformId)) {
      this.modoOscuroActivado = localStorage.getItem('modoOscuro') === 'true';
      this.aplicarModoOscuro();
    }
  }

  alternarModoOscuro() {
    this.modoOscuroActivado = !this.modoOscuroActivado;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('modoOscuro', String(this.modoOscuroActivado));
      this.aplicarModoOscuro();
    }
  }

  private aplicarModoOscuro() {
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.toggle('dark-mode', this.modoOscuroActivado);
    }
  }

  logout() {
    this.authService.logout();
    this.usuario = null;
    this.cantidadProductos = 0;
    this.carritoService.vaciarCarrito();
  }

  onBuscar(event: any) {
    this.buscadorService.setFiltro(event.target.value);
  }
}
