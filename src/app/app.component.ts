import { Component } from '@angular/core';

@Component({
  providers: [],
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  activeTheaterSlug = "";
  cinemas = [];
  sessions = [];
  activeTheater;
  activeSessions;

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
      this.sessions = json.data.sessions;
    });
  }

  title = 'Alamo-Movie-Listing-Page';

  updateActiveTheater(event) {
    this.activeTheaterSlug = event;
    this.activeTheater = this.filterTheaters(event);
    this.activeSessions = this.filterSessions(event);
  }

  filterTheaters(slug) {
    const filteredTheater = (this.cinemas.filter(cinema => cinema.slug === slug))[0];

    console.debug('filterTheaters', slug, filteredTheater);
    return filteredTheater;
  }

  filterSessions(slug) {
    const filteredTheater = (this.cinemas.filter(cinema => cinema.slug === slug))[0];
    // const filteredSessions = this.sessions.filter(film => (film.cinemaId === filteredTheater.id));
    const filteredSessions = this.sessions.reduce((filmsAccumulator, currentFilm) => {
      console.debug({filmsAccumulator, currentFilm});
      if(filmsAccumulator.filmSlugs.includes(currentFilm.filmSlug)) {
        return filmsAccumulator;
      }

      if (currentFilm.cinemaId === filteredTheater.id) {
        return {
          films: [
            ...filmsAccumulator.films,
            currentFilm,
          ],
          filmSlugs: [
            ...filmsAccumulator.filmSlugs,
            currentFilm.filmSlug,
          ],
        };
      }

      return filmsAccumulator;
    }, { films: [], filmSlugs: []});

    // console.debug('filterSessions', slug, filteredSessions);
    return filteredSessions.films.sort((a, b) => {
      if (a.filmSlug > b.filmSlug) {
        return 1;
      }

      return -1;
    });
  }
}
