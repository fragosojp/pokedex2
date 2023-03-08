import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=100';

  constructor(private http: HttpClient) {}

  get apiListAllPolemons(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap((res) => res),
      tap((res) => {
        res.results.map((resPoke: any) => {
          this.apiGetPokemon(resPoke.url).subscribe(
            (res) => (resPoke.status = res)
          );
        });
      })
    );
  }

  public apiGetPokemon(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(tap((res) => res));
  }
}
