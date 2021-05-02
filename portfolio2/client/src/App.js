import React from 'react';
import Header from './components/Header';
import Movie from './components/Movie';
import SearchMovie from './components/Search';

function App() {
  return (
    <>
      <Header />
        <div className="intro">
          <SearchMovie />
        </div>
      <div>
        <Movie />
      </div>
    </>
  );

}

export default App;


