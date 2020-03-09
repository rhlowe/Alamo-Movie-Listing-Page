# Alamao Drafthouse Movie Listings

Basic structure of the app will look something like this.

## API
- https://drafthouse.com/s/mother/v1/page/market/main/austin

## App

App Root
-> Theater-List (component)
-> Film-List (component)

## Data

- App Root
  - selectedTheater: String <id> of the cinema
- Theater-List: `data.market.cinemas`
- Film-list: `data.sessions`

## The tools

Typically, I default to the latest version of a specific framework to build something greenfield like this. I noticed that the Alamo Drafthouse website is built in Angular 1.4. After investigating a couple recommended Angular 1.x starters, (namely `frederikprijck/angularjs-webpack-starter` and `cdoremus/angularjs-webpack-starter`). I wanted to honor the spirit of this project by using one of those or even the latest stable Angular 1.x. `frederikprijck/angularjs-webpack-starter` had at least 1 dependency on a package no longer being maintained and while I couldn't find anything particularly frightening about `cdoremus/angularjs-webpack-starter`, I figured if this is going to be the first Angular app I write in 4 years, it may as well be using modern Angular.

## Stuff I want to do, but probably won't because of time limits

[ ] Code coverage
[ ] PWA for data caching and offline access
[ ] tests for main Application component