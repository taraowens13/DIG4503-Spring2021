import React from 'react';
import Search from '../src/components/Search';
import Team from '../src/components/Search';
import "./App.css"

function App() {
  let data = [
    {
      menuName: "Your Team",
      menuItems: [
        {
          pokemonName: "ditto",
        },
      ],
    },
  ]

  return (
    
    <div className="App">
       <ul>
        <li><a href="#home">Pokemon</a></li>
        <li><a href="#contact">My Team</a></li>
        <li><a class="active" href="#search">Search</a></li>
      </ul>
      <Search />
      {data.map((menu) => (
        <Team {...menu}></Team>
      ))}
    </div>
  )
}
  
export default App