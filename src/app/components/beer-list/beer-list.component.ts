import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from 'src/app/models/beer.model';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  @Input() public beerList: Beer[] = [];
  @Output() public onBeerClicked: EventEmitter<Beer> = new EventEmitter<Beer>(); 

  constructor() { }

  public triggerBeerClicked(beer: Beer): void {
    this.onBeerClicked.emit(beer);
  }

  ngOnInit() {
  }

}
