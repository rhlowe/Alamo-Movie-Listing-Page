import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TheaterListComponent } from './theater-list/theater-list.component';
import { FilmListComponent } from './film-list/film-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TheaterListComponent,
    FilmListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
