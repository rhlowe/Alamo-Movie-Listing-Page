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