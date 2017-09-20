import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//import Marvel API Service
import { MarvelService } from './marvel.service';
import { SearchNavigationComponent } from './search-navigation/search-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchNavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    MarvelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
