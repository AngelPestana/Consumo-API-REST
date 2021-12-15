import { Component, OnInit } from '@angular/core';
import { Datos_Pokemon } from 'src/app/models/Datos_Pokemon';
import { Pokemon } from 'src/app/models/Pokemon';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  urlActual: string = 'https://pokeapi.co/api/v2/pokemon/';
  next: string = '';
  prev: string = '';
  pokemons: Pokemon[];
  images: string;
  constructor(private ds: DataService) { }
  //constructor() { }

  ngOnInit(): void {
    this.getPokemones();
  }

  getPokemones (): void {
    //this.ds.getPokemones().subscribe(console.log);
    this.ds.getPokemones(this.urlActual).subscribe((res: any) => {
      this.next = res.next;
      this.prev = res.previous;
      this.pokemons = res.results;
      let cont = 0;
      console.log(this.pokemons);
      this.pokemons.map((poke) => {
        cont++;
        this.ds.getPokemon(poke.url).subscribe((res: any) => {
          this.images = res.sprites.other.dream_world.front_default;
          poke.image = this.images;
        });
      })
    });
    //console.log(this.next);
    
  }

  anterior(prev): void {
    this.urlActual = this.prev;
    this.getPokemones();
  }

  siguiente(next): void {
    this.urlActual = this.next;
    this.getPokemones();
  }

}
