import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class MarvelService {

  private baseUrl: string = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=572832eba3e680bdb05f357ee36433ed&hash=0eeeafee078ed5a7059c334bb9685317";
  
    constructor(private http: Http) { }
  
    //make read of endpoint url and return object with data
    getCharacterInfo(): Observable<any> {
  
      return this.http.get(this.baseUrl)
        .map(result => {
          return result.json()
        })
  
    }


    //make new endpoint url method with incoming search string and return object with data
    getNameStartsWith(incomingSearch: string): Observable<any> {
      
          return this.http.get(`${this.baseUrl}&nameStartsWith=${incomingSearch}`)
            .map(result => {
              return result.json()
            })
      
        }

}
