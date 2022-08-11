import { Component, OnInit } from '@angular/core';

import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  private setAllPokemons: any;
  public getAllPokemons: any;

  public error: boolean = false;
  public pokemonNotFound: boolean = false;

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApiService.listAllPokemons.subscribe(
      (res) => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      },
      (err) => {
        this.error = true;
      }
    );
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((pokemon: any) => {
      return !pokemon.name.indexOf(value.toLowerCase());
    });

    if (filter == '') {
      this.pokemonNotFound = true;
      this.getAllPokemons = [];
    } else {
      this.pokemonNotFound = false;
      this.getAllPokemons = filter;
    }
  }
}
