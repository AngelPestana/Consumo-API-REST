import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  pokemons: Pokemon[] | any;
  images: any
  constructor(private ds: DataService) { }
  //constructor() { }

  ngOnInit(): void {
    this.getPokemones();
  }

  getPokemones (): void {
    //this.ds.getPokemones().subscribe(console.log);
    this.ds.getPokemones().subscribe((res: any) => {
      this.pokemons = res.results;
      console.log(this.pokemons);
      /*this.pokemons.forEach(function (valor : any, indice: any, array: any)) {
        console.log('indice  ' + indice + ' valor ' + valor);
      }*/
      let cont = 0;
      this.pokemons.forEach((poke: { url: any; }) => {
        //console.log(poke.url);
        //this.ds.getPokemon(poke.url).subscribe(console.log);
        this.ds.getPokemon(poke.url).subscribe((data: any) => {
          this.images = data.sprites.other.dream_world.front_default;
          this.pokemons[cont].image = this.images;//////
          //console.log(this.images);
          //console.log(cont);
          //console.log(this.pokemons[cont].image);
          cont++;
        });
      });
    });
  }

}
