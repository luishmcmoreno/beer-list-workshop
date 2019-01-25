import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from 'src/app/models/beer.model';

@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.scss']
})
export class BeerItemComponent implements OnInit {

  @Input() beer: Beer;
  @Output() onBeerClicked: EventEmitter<Beer> = new EventEmitter<Beer>();

  constructor() { }

  public triggerCardClick(beer: Beer): void {
    this.onBeerClicked.emit(beer);
  }

  public triggerFavorite(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();
  }

  ngOnInit() {
  }

}
