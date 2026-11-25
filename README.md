# ✈ TravelMate

TravelMate is a travel discovery website built with React and Vite. Search for a city or country, browse popular destinations, and open a magazine-style guide for each place, complete with an interactive map.

## Features

- **Home page**: hero search bar, popular destinations and an About section.
- **Explore page**: live search that filters destinations by city or country.
- **Destination guides** for Paris, Bali and New York, each with:
  - places to visit, with photos and descriptions
  - an **interactive map** (click a place, or "📍 View on map", to zoom to it, or open it in Google Maps)
  - festivals and cultural occasions
  - things to do, shopping spots and local food
- **Sign in / sign up**: the navbar greets you by name on every page, and you stay signed in after a page refresh.

## Getting started

You need [Node.js](https://nodejs.org/) 20 or newer.

```bash
npm install
npm run dev
```

Then open the address Vite prints (usually http://localhost:5173).

Other commands:

| Command           | What it does                               |
| ----------------- | ------------------------------------------ |
| `npm run build`   | Builds the production site into `dist/`    |
| `npm run preview` | Serves the production build locally        |
| `npm run lint`    | Checks the code with ESLint                |

## Project structure

```
src/
├── App.jsx                    # Page switching and signed-in user state
├── data/
│   └── destinations.js        # All destination content (single source of truth)
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── DestinationCard.jsx
│   ├── DestinationMap.jsx     # Interactive map on each guide
│   └── Footer.jsx
└── pages/
    ├── Home.jsx
    ├── Explore.jsx
    ├── DestinationDetails.jsx # Magazine-style destination guide
    └── Login.jsx
```

## Adding a destination

Add a new entry to `destinationGuides` in `src/data/destinations.js`, following the same shape as the existing ones (country, tagline, intro, season, images, places, occasions, experiences, shopping, food). It appears automatically on the Home and Explore pages, and gets its own guide and map. For large areas such as islands or regions, add `mapZoom: 10` so the whole area fits on the map.

## Notes

- **Sign-in is a front-end demo.** There is no server or database. The details you enter are only used to show your name, and are saved in your own browser's local storage. Passwords are not stored or checked.
- **Maps** use Google Maps' free embed, so no API key is needed.
- **Photos** are from [Unsplash](https://unsplash.com/).
