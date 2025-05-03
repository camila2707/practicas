import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [NgFor],
  standalone:true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  array=[
    {
      id:1,
      nombre:'',
      categoria:'',
      marca:'',
      descripcion:'',
      precio:2,
      stock:0,
      detalle:'',
      img:'',

    },
    {
      id:1,
      nombre:'',
      categoria:'',
      marca:'',
      descripcion:'',
      precio:2,
      stock:0,
      detalle:'',
      img:'',

    },
    {
      id:1,
      nombre:'',
      categoria:'',
      marca:'',
      descripcion:'',
      precio:2,
      stock:0,
      detalle:'',
      img:'',

    },
    {
      id:1,
      nombre:'',
      categoria:'',
      marca:'',
      descripcion:'',
      precio:2,
      stock:0,
      detalle:'',
      img:'',

    },
    
  ];

  Marcas=[
    {
      id:'',
      nombre:'',
      img:'',
    }
  ]

}
