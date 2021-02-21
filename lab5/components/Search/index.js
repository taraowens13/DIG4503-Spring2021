import React, { useState } from 'react';
import Axios from 'axios';
import Pokemon from '../Pokemon/index';

function Search() {

  const [search, setSearch] = useState("");

  const [pokemon, setPokemon] = useState({});

  const [loading, setLoading] = useState(true);

  function searchPokemon() {

    setLoading(true);

    Axios('https://pokeapi.co/api/v2/pokemon/' + searchpoke)
    .then(function (response) {
        setPokemon(response.data);
        setLoading(false);
    })
    .catch(function (error) {
        return (<div><p>Not found!</p></div>);
    });
  }

  return (
    <div className="App">
      <input type="text" onChange={(event) => {
        setSearch(event.target.value);
      }} />
      <button onClick={() => searchPokemon()}>Search Pokemon</button>
      {
      
        (loading == true) ? (
          <h1>Input a Pokemon</h1>
        ) : (
            poke.passPokemon()
        )
      }
    </div>
  );
}

export default Search;