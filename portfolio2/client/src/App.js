import React, { useEffect, useState } from 'react';

import Movie from './components/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const API_IMG = "https://image.tmdb.org/t/p/w1280";
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query="

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
          setMovies(data.results);
        });
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <header>
        <h3 className="site-name">FilmFinder</h3>
        <form onSubmit={handleOnSubmit}>
            <input
              className="search"
              type="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleOnChange}
            />
        </form>
      </header>
      <div className="movie-container">
        <Movie />
      </div>
    </>
  );

}

export default App;

