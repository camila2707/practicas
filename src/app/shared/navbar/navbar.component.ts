import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { BuscadorService } from '../../servicios/buscador.service';
import { AuthService } from '../../servicios/auth.service';
import { CarritoService } from '../../servicios/carrito.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule, RouterModule],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  cantidadProductos: number = 0;
  modoOscuroActivado = false;
  usuario: any = null;

  constructor(
    private carritoService: CarritoService,
    private buscadorService: BuscadorService,
    public authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object   // <-- agregado
  ) {}

  ngOnInit(): void {

    this.usuario = this.authService.getUsuario();

    if (this.authService.isLoggedIn()) {
      this.carritoService.cargarCarrito();
    }

    this.carritoService.carrito$.subscribe({
      next: productos => {
        this.cantidadProductos = productos.reduce(
          (acc, item) => acc + Number(item.cantidad || 1),
          0
        );
      }
    });

    if (this.authService.loginEvent) {
      this.authService.loginEvent.subscribe(() => {
        this.usuario = this.authService.getUsuario();
        this.carritoService.cargarCarrito();
      });
    }

    // ⬇️ Solo si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      this.modoOscuroActivado =
        localStorage.getItem('modoOscuro') === 'true';

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
  }

  cambiarFondo() {
    if (!isPlatformBrowser(this.platformId)) return;

    let toggle = document.getElementById('toggle') as HTMLInputElement;
    let label_toggle = document.getElementById('label_toggle') as HTMLInputElement;

    if (toggle) {
      let checked = toggle.checked;
      document.body.classList.toggle('dark', checked)

      if (checked) {
        label_toggle.innerHTML = '<i class="fa-regular fa-sun"></i>';
      } else {
        label_toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
      }
    }
  }

  onBuscar(event: any) {
    const valor = event.target.value;
    this.buscadorService.setFiltro(valor);
  }

}
