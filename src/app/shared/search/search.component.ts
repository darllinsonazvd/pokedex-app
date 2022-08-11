import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() public emitSearch: EventEmitter<string> = new EventEmitter();

  public search(pokemon: string) {
    this.emitSearch.emit(pokemon);
  }

  constructor() {}

  ngOnInit(): void {}
}
