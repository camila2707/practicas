import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule, CommonModule],
  standalone:true,
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  registroForm: FormGroup;
  constructor(private MiFormulario: FormBuilder){
    this.registroForm = MiFormulario.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      numero:['',[Validators.required, Validators.min(9)]],
      mensaje:['',[Validators.required]]
      
    })
  }

  get nombreA(){
    return this.registroForm.get("nombre") as FormControl
  }

  get emailA(){
    return this.registroForm.get("email") as FormControl
  }


  get telA(){
    return this.registroForm.get("numero") as FormControl
  }
  get mensaJ(){
    return this.registroForm.get("mensaje") as FormControl
  }

  onSumit(){
    if(this.registroForm.valid){
      console.log(this.registroForm.value)
      alert("formulario enviado con exito")
    }else{
      alert("formulario no valido")
    }
  }


}
