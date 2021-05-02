import React, { useState } from 'react';
import Axios from 'axios';
import FindMovie from '../FindMovie';

function Search() {

  const [searchMov, setSearch] = useState("");

  const [movie, setMovie] = useState({});

  const [loading, setLoading] = useState(true);

  const [errorInput, setError] = useState(false);

  function searchMovie() {

    setLoading(true);
    setError(false);

    Axios("http://localhost:45030/movies/title" + searchMov)
    .then(function (response) {
        setMovie(response.data);
        setLoading(false);
    })

    .catch(function() {
        setError(true);
        setLoading(false);
    });
  }

  const newMovie = movie;
  const mov = new FindMovie (newMovie);

  return (
    <div id="mov">
      {
      
        (loading == true) ? (
          <h2>Welcome to FindMovies</h2>
        ) : (
            (errorInput ==  false) ? (
              mov.passMovie()
            ) : (
              <h2>Not Found!</h2>
            )
        )
      }
      <input type="text" onChange={(event) => setSearch(event.target.value)} />
      <button onClick={() => searchMovie()}>Search Movies</button>
    </div>
  );
}

export default Search;