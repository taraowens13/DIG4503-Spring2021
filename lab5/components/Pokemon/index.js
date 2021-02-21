import React from 'react';

function Pokemon() {
  return (
    <div className="App">
      <input type="text" onChange={(event) => {
        setSearch(event.target.value);
      }} />
      <button onClick={() => searchMonsters()}>Search</button>
      {
        <p>Searched: {search}</p>
      }
      {
        (loading == true) ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h2>{pokemon.name}</h2>
            <p>{pokemon.id}</p>
            <img src={pokemon.sprites.front_default} />
          </div>
        )
      }
    </div>
  );
}

export default Pokemon;