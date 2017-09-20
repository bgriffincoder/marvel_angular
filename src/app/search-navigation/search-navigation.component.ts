import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-navigation',
  templateUrl: './search-navigation.component.html',
  styleUrls: ['./search-navigation.component.css']
})
export class SearchNavigationComponent implements OnInit {

  //create a two-way data binding ngModal variable to track the current hero search from the search input field
  myHeroSearch: string = "";

  //instantiate a new buttonClick event object to throw(emit) an output event to parent component;
  @Output() searchInput: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  //emit the hero search back up to the parent comment
  searchThrow() {
      this.searchInput.emit(this.myHeroSearch);
  }

}
