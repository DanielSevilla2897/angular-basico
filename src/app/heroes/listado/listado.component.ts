import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Wanda', 'Superman', 'Spiderman', 'Batman'];
  eliminado: any = ""; //Pongo tipo any, debido a que shift puede devolver string o undefined.

  borrarHeroe(): void{
    //this.heroes.pop(); Saca del arreglo el último valor.
    this.eliminado = this.heroes.shift() || ""; //Esto hace shift o rellena con "" si no se puede.
    //Cuidado con shift, que cuando retorna el elemento eliminado puede ser de tipo string o undefined.

    console.log("Borrado elemento: " + this.eliminado);
  }

}


