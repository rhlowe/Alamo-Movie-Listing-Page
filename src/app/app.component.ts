import { Component } from '@angular/core';

@Component({
  providers: [],
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  activeTheater = "";
  cinemas = [];

  constructor() {
    fetch("https://drafthouse.com/s/mother/v1/page/market/main/austin")
    .then(response => {
      return response.json();
    })
    .then(json => {
      this.cinemas = json.data.market.cinemas.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }

        return -1;
      });
    });
  }

  title = 'Alamo-Movie-Listing-Page';

  updateActiveTheater(event) {
    this.activeTheater = event;
  }
}
