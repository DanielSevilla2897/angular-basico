import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interface/interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  
  @Input() nuevo: Personaje = {nombre: "", poder: 0};
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter;


  agregar( ) {
    console.log(this.nuevo);
    this.onNuevoPersonaje.emit(this.nuevo);
    this.nuevo = {nombre: "", poder: 0}; //Inicializa el personaje a nada

  }



}
