import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilmListComponent } from './film-list/film-list.component';
import { TheaterListComponent } from './theater-list/theater-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TheaterListComponent,
    FilmListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
