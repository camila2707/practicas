import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, FormsModule],
  standalone: true,
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent implements OnInit {
  constructor(private fb: FormBuilder,
    // Servicio encargado de manejar autenticación y comunicación con el backend.
    private authService: AuthService,

    // Router para redireccionar luego de iniciar sesión.
    private router: Router
  ) { }
  formularioInicio!: FormGroup;
  ngOnInit(): void {
    this.formularioInicio = this.fb.group({

      nombre: ['', Validators.required],
      contra: ['', Validators.required],

    });
  }
  // Objeto que almacena las credenciales que el usuario ingresará en el formulario.
  // Se enlaza con ngModel en la plantilla.
  usuario = {
    Email: '',
    Password: ''
  };

  // Variable para mostrar mensajes de error en la vista.
  error: string = '';



  // Método llamado al enviar el formulario de inicio de sesión.
  iniciarSesion(): void {

    if (!this.usuario.Email || !this.usuario.Password) {
      this.error = 'Por favor ingrese sus credenciales.';
      return;
    }

    this.authService.login(this.usuario).subscribe({

      next: (res) => {
        this.error = '';

        // 👇 GUARDAR TOKEN
        if (res.token) {
          localStorage.setItem('token', res.token);
        } else {
          console.error("El backend no devolvió token");
        }

        alert('Inicio de sesión exitoso');
        this.router.navigate(['/productos']);
      },

      error: (err) => {
        console.error('Error al iniciar sesión', err);
        this.error = 'Credenciales incorrectas o error en el servidor.';
      }
    });
  }


}
