import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, tap, map } from 'rxjs';

interface PokemonProps {
  name: string;
  url: string;
  props: {};
}
@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';

  constructor(private http: HttpClient) {}

  get listAllPokemons(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap((res) => res),
      tap((res) =>
        res.results.map((pokemons: PokemonProps) => {
          this.getPokemonDetails(pokemons.url).subscribe(
            (res) => (pokemons.props = res)
          );
        })
      )
    );
  }

  public getPokemonDetails(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(map((res) => res));
  }
}
