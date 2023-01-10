import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  //We wan to to get our movie list from the server using an API call
  const fetchMoviesHandler = () => {
    // We pass the URL as String. Default method is GET.
    // Fetch returns a Promise
    // Then is a function that will execute once the Promise is resolved.
    fetch('https://swapi.dev/api/films')
      .then((response) => {
        // We can transform the response into an Object with .json()
        // This method will return a Promise.
        return response.json();
      })
      // This data is the result of the response.json() call.
      .then((data) => {
        // We need to transform the data into our own model.
        const transformMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        // We set the data in our state.
        // We know data has results in it because we can see it in the API.
        setMovies(transformMovies);
      });
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
