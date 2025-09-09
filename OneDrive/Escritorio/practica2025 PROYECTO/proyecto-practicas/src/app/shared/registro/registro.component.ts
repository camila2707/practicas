import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit {


  constructor(private fb: FormBuilder) { }
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
  }

}
