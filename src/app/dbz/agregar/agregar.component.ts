import { Component, Input } from '@angular/core';
import { Personaje } from '../interface/interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() personajes: Personaje[] = [];
  @Input() nuevo: Personaje = {nombre: "", poder: 0};


  agregar( ) {
    console.log(this.nuevo);
    this.personajes.push(this.nuevo); //Guarda en personajes el nuevo personaje
    this.nuevo = {nombre: "", poder: 0}; //Inicializa el personaje a nada

  }



}
