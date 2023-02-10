import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { CountryCode } from '../../interfaces/verPais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit{

  pais!: CountryCode;
  

  constructor ( private activatedRouter: ActivatedRoute, private paisService: PaisService ) {
  
  }

  

  ngOnInit(): void {
    
    this.activatedRouter.params
    .subscribe( ({id}) => {


      console.log(id); //Imprime el paremetro


      this.paisService.getPaisPorId(id) 
        .subscribe(pais => {
         
          
          this.pais = pais[0];
          
          
        })
   
    })

}

}
