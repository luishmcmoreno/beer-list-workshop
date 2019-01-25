import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from 'src/app/services/beer/beer.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { Beer } from 'src/app/models/beer.model';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.page.html',
  styleUrls: ['./beer-details.page.scss'],
})
export class BeerDetailsPage implements OnInit {

  public beer: Beer;

  constructor(
    private route: ActivatedRoute,
    private beerService: BeerService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
  ) { }

  private async getBeer(beerId: number): Promise<void> {
    const loading = await this.loadingCtrl.create({
      message: 'Carregando cerveja...'
    });
    loading.present();
    try {
      this.beer = await this.beerService.getBeer(beerId);
      console.log(this.beer);
    } catch (e) {
      console.log(e);
      const alert = await this.alertCtrl.create({
        header: 'Erro',
        message: e.error.message,
        buttons: ['Ok']
      });
      alert.present();
    }
    loading.dismiss();  
  }

  private getParams(): void {
    this.route.params.subscribe((params) => {
      this.getBeer(Number(params.id));
    });
  }

  ngOnInit() {
    this.getParams();
  }

}
