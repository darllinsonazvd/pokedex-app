import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { forkJoin } from 'rxjs';

import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;
  public loaded: boolean = false;
  public error: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void {
    this.getPokemon;
  }

  get getPokemon() {
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.getPokemonDetails(
      `${this.urlPokemon}/${id}`
    );
    const name = this.pokeApiService.getPokemonDetails(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe(
      (res) => {
        this.pokemon = res;
        this.loaded = true;
      },
      (err) => {
        this.error = true;
      }
    );
  }
}
