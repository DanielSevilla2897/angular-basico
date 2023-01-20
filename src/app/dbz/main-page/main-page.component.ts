import { Component } from '@angular/core';

import { Personaje } from '../interface/interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: "",
    poder: 0

  }

  personajes: Personaje[] = [
    {
      nombre: "Goku",
      poder: 15000
    },
    {
      nombre: "Vegeta",
      poder: 10000
    }
    
  ]

  agregarNuevoPersonaje( personaje: Personaje){
    this.personajes.push( personaje );
  }

  constructor( private dbzService: DbzService ){

  }

  
}
