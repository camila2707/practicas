import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule, CommonModule, RouterLink,FormsModule],
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent  {


 /* constructor(private fb: FormBuilder) { }
  formularioREegistro!: FormGroup;
  ngOnInit(): void {
    this.formularioREegistro = this.fb.group({
      nombre:['',Validators.required],
      email:['', Validators.required],
      tel:['',Validators.required],
      contra:['',Validators.required],
      confContra:['',Validators.required],
    })
  }

  crearCuenta():void{
    if(this.formularioREegistro.valid){
      console.log("cuenta creada")
    }else{
      console.log("no se creo la cuenta")
    }
  }*/
 
  // Objeto que contiene los datos del nuevo usuario.
  // Se enlaza al formulario mediante ngModel en la plantilla.
  nuevoUsuario = {
    Nombre: '',
    Email: '',
    Password: ''
  };

  // Texto para mostrar mensajes de error en pantalla.
  error: string = '';

  // Se inyecta el servicio de autenticación para poder registrar usuarios
  // y el Router para redirigir al terminar el registro.
  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {}

  // Método disparado al enviar el formulario.
  registrar(): void {

    // Validación inicial: ningún campo puede estar vacío.
    if (!this.nuevoUsuario.Nombre || !this.nuevoUsuario.Email || !this.nuevoUsuario.Password) {
      this.error = 'Todos los campos son obligatorios.';
      return;
    }

    // Llamada al backend a través del servicio de autenticación.
    this.authService.register(this.nuevoUsuario).subscribe({

      // Si el registro es exitoso:
      next: () => {
        // Alerta rápida; puede reemplazarse por un toast más elegante.
        alert('Registro exitoso. Ahora puede iniciar sesión.');

        // Redirige al usuario a la pantalla de login.
        this.router.navigate(['/iniciosesion']);
      },

      // Si ocurre un error en el backend o en la red:
      error: (err) => {
        console.error('Error en el registro', err);

        // Mensaje para mostrar en la interfaz.
        this.error = 'Error al registrar el usuario.';
      }
    });
  }
 



}
