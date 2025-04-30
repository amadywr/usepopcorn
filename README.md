# usePopcorn 🍿

usePopcorn is a web application designed for movie enthusiasts to browse, discover, and rate movies. It allows users to search for movies, view detailed information, and maintain a personalized watchlist with ratings. The app is built with React and leverages the OMDB API for movie data.

## Features

- **Search Movies**: Quickly search for movies by title using the search bar.
- **Movie Details**: View detailed information about a selected movie, including its plot, cast, director, runtime, and IMDb rating.
- **Rate Movies**: Rate movies using an interactive star rating system.
- **Watchlist Management**: Add movies to your watchlist and track your ratings and viewing history.
- **Statistics**: View average IMDb ratings, user ratings, and runtime for your watched movies.
- **Responsive Design**: Optimized for desktop and laptop devices is NOT available for mobile screens.

## App Demo

You can try the live demo of the app at [usepopcorn.ahmadyawari.com](https://usepopcorn.ahmadyawari.com).

## How It Works

1. **Search for Movies**: Enter a movie title in the search bar to fetch results from the OMDB API.
2. **View Movie Details**: Click on a movie to see its details, including a poster, plot, and cast information.
3. **Add to Watchlist**: Rate the movie and add it to your watchlist for future reference.
4. **Manage Watchlist**: View your watched movies, delete entries, and see aggregated statistics.

## Tech Stack

- **Frontend**: React
- **API**: OMDB API
- **Styling**: CSS (custom styles)
- **State Management**: React hooks (`useState`, `useEffect`, `useRef`)

## Limitations

- The app is optimized for desktop and laptop devices. A message is displayed for mobile users, encouraging them to visit on a larger screen.
- The OMDB API has a free tier with limited requests per day.

## Credits

- Movie data is provided by the [OMDB API](https://www.omdbapi.com/).
- Icons and design inspiration from various online resources.

Enjoy discovering and rating movies with usePopcorn! 🎥✨
