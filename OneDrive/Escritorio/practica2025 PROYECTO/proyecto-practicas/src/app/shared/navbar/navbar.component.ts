import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  standalone:true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  cambiarFondo(){
    let toggle:HTMLInputElement |null= document.getElementById('toggle') as HTMLInputElement
    let label_toggle:HTMLInputElement |null=document.getElementById('label_toggle') as HTMLInputElement
    if(toggle){
      let checked: boolean = toggle.checked;
      document.body.classList.toggle('dark', checked)
      if(checked){
        label_toggle!.innerHTML='<i class="fa-regular fa-sun"></i>';
      }else{
        label_toggle!.innerHTML='<i class="fa-solid fa-moon"></i>';
      }
    }
  }
  
}
