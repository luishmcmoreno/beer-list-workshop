import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer.model';
import { BeerService } from 'src/app/services/beer/beer.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public beers: Beer[] = [];
  public page: number = 1;
  public term: string;

  constructor(
    public beerService: BeerService,
    public router: Router,
    public loadingCtrl: LoadingController,
  ) { }

  public onBeerClicked(beer: Beer): void {
    this.router.navigate([`/beer/${beer.id}`]);
  }

  public async search(term: string): Promise<void> {
    console.log(term);
    this.page = 1;
    this.term = term;
    this.beers = [];
    const loading = await this.loadingCtrl.create({});
    loading.present();
    await this.getBeers(this.page, term);
    loading.dismiss();
  }

  public async loadData(ev): Promise<void> {
    console.log(ev);
    this.page += 1;
    const hasMore = await this.getBeers(this.page, this.term);
    if (hasMore) {
      ev.target.complete();
    } else {
      ev.target.disabled = true;
    }
  } 

  private async getBeers(page: number, term: string): Promise<boolean> {
    const beers = await this.beerService.getBeers(page, term);
    this.beers = [...this.beers, ...beers];
    return beers.length !== 0;
  }

  ngOnInit() {
    this.getBeers(this.page, '');
  }

}
