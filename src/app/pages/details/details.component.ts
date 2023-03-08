import { PokeApiService } from 'src/app/service/pokeApi.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) {}
  ngOnInit(): void {
    this.getPokemon;
  }
  get getPokemon() {
    //Pegar o id da url
    const id = this.activatedRoute.snapshot.params['id'];
    //pegar o pokemon da api
    const pokemon = this.pokeApiService.apiGetPokemon(
      `${this.urlPokemon}/${id}`
    );
    //Pegar a especie do pokemon da api
    const name = this.pokeApiService.apiGetPokemon(`${this.urlName}/${id}`);

    //faz a chamada em duas api ao mesmo tempo
    return forkJoin([pokemon, name]).subscribe((res) => {
      this.pokemon = res;
    });
  }
}
