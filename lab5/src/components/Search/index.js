import React, { useState } from 'react';
import Axios from 'axios';
import Pokemon from '../Pokemon/index';

function Search() {

  const [searchPoke, setSearch] = useState("");

  const [pokemon, setPokemon] = useState({});

  const [loading, setLoading] = useState(true);

  const [errorInput, setError] = useState(false);

  function searchPokemon() {

    setLoading(true);
    setError(false);

    Axios('https://pokeapi.co/api/v2/pokemon/' + searchPoke)
    .then(function (response) {
        setPokemon(response.data);
        setLoading(false);
    })

    .catch(function() {
        setError(true);
        setLoading(false);
    });
  }

  const newPokemon = pokemon;
  const poke = new Pokemon (newPokemon);

  return (
    <div id="poke">
      {
      
        (loading == true) ? (
          <h2>Enter a Pokemon name</h2>
        ) : (
            (errorInput ==  false) ? (
              poke.passPoke()
            ) : (
              <h2>Not Found!</h2>
            )
        )
      }
      <input type="text" onChange={(event) => setSearch(event.target.value)} />
      <button onClick={() => searchPokemon()}>Search Pokemon</button>
    </div>
  );
}

export default Search;