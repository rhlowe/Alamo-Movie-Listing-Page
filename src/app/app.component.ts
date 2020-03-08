import { AlamoService } from './config/alamo.service'
import { Component } from '@angular/core';

@Component({
  providers: [ AlamoService ],
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  data = {};

  constructor(private alamoService: AlamoService) {
    this.alamoService.getFilmData().subscribe(data => {
      this.data = data;
      console.debug('data', data);
    });
  }

  title = 'Alamo-Movie-Listing-Page';
}
