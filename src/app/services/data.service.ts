import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getPokemones () {
    return this.http.get(this.url);
  }

  getPokemon (url2: string) {
    return this.http.get(url2);
  }
}
