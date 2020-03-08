import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlamoService {
  constructor(private http: HttpClient) { }

  getFilmData() {
    return this.http.get("https://drafthouse.com/s/mother/v1/page/market/main/austin");
  }
}
