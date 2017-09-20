import { Component, OnInit } from '@angular/core';
import { MarvelService } from './marvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  //object which stores all character data received from the marvel api
  characterInfo;

  constructor(private marvelService: MarvelService){}
  
  //pull in the characters from api for the initial reload and make available in a object
  getDataFromService(){
    this.marvelService.getCharacterInfo()
      .subscribe(
        characterInfo => {
          this.characterInfo = characterInfo.data.results;
        }
      )
  }

  //stores returned search marvel api data in characterInfo
  getSearchDataFromService(searchString){
    if(searchString=="") {
      this.getDataFromService()
    } else {
      this.marvelService.getNameStartsWith(searchString)
      .subscribe(
        characterSearchInfo => {
          this.characterInfo = characterSearchInfo.data.results;
        }
      )
    }
  } 

  //initializes the page with marvel data when it loads
  ngOnInit(){
    this.getDataFromService()
  } 

}
