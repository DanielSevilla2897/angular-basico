import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  termino: string = "";
  hayError: boolean = false;
  private apiUrl: string = 'https://restcountries.com/v2';
  paises : Country[] = [];

  constructor( private paisService: PaisService){}

  buscar( termino: string) {

    this.termino = termino;
  
    this.paisService.buscarPais(this.termino)
      .subscribe( (resp) => {
        this.hayError = false;
        this.paises = resp;
        console.log(resp);
      }, (err) => {
        this.paises = [];
        this.hayError = true;
        console.log("Hola hay error");
      } )
    

  }

  sugerencias(termino: string){
    this.hayError = false;
    
  }


}
