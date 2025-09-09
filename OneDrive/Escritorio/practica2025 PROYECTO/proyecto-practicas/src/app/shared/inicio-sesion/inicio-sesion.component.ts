import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  standalone:true,
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent implements OnInit {
  constructor( private fb: FormBuilder,){}
  formularioInicio!: FormGroup;
  ngOnInit(): void {
    this.formularioInicio = this.fb.group({
      
      nombre: ['', Validators.required],
      contra:['', Validators.required],
     
    });
  }

}
