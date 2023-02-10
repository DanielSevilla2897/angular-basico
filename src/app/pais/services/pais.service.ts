import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { CountryCode } from '../interfaces/verPais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  // https://restcountries.com/v3.1/name/{name}

  private apiUrlPorCapital: string = "https://restcountries.com/v3.1";


  constructor( private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{

    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url);
    
  }

  buscarCapital(termino: string): Observable<Country[]>{

    const url = `${this.apiUrlPorCapital}/capital/${termino}`
    return this.http.get<Country[]>(url);
    
  }


  getPaisPorId(termino: any): Observable<CountryCode[]>{

    const url = `${this.apiUrlPorCapital}/alpha/${termino}`
    return this.http.get<CountryCode[]>(url);
    
  }
  

}
