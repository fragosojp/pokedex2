import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/pokeApi.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  constructor(private pokeApiService: PokeApiService) {}

  private setAllPokemons: any;
  public getAllPokemons: any;
  public apiError: boolean = false;

  ngOnInit(): void {
    this.pokeApiService.apiListAllPolemons.subscribe(
      (res) => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = res.results;
      },
      (error) => {
        this.apiError = true;
      }
    );
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLocaleLowerCase());
    });

    this.getAllPokemons = filter;
  }
}
