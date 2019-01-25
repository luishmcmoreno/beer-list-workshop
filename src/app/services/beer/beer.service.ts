import { Injectable } from '@angular/core';
import { Beer } from 'src/app/models/beer.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(
    private http: HttpClient,
  ) { }

  public getBeers(page: number, term: string): Promise<Beer[]> {
    console.log(term);
    let url = environment.url + `/beers/?per_page=5&page=${page}`;
    if (term) {
      url += '&beer_name=' + term;
    }
    return this.http.get<Beer[]>(url).toPromise();
  }

  public async getBeer(beerId: number): Promise<Beer> {
    const beers = await this.http.get<Beer[]>(environment.url + `/beers/${beerId}`).toPromise();
    return beers[0];
  }

}
