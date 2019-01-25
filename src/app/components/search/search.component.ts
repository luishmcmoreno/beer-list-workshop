import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public triggerSearch(ev): void {
    this.onSearch.emit(ev.target.value);
  }

  ngOnInit() {
  }

}
