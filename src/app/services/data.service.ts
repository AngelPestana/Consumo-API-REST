import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //private url: string = 'https://pokeapi.co/api/v2/pokemon/';
  //'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20'

  constructor(private http: HttpClient) { }

  getPokemones (url: string) {
    return this.http.get(url);
  }

  getPokemon (url2: string) {
    return this.http.get(url2);
  }
}
