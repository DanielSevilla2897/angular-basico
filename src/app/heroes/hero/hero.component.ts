import { Component } from '@angular/core';
@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
})
export class HeroComponent{

    nombre: string = 'Spiderman';
    edad: number = 45;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`; //Este return contiene un template de como se vería en html.
        //Lo de arriba es similar a: return this.nombre + " - " + this.edad.
    }

    cambiarNombre(): void{
        this.nombre = "Venom";
    }

    cambiarEdad(): void{
        this.edad = 20;
    }

}