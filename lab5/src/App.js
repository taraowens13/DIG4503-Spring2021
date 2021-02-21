import React from 'react';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: "",
      loaded: false
    };

  }

  componentDidMount() {
    Axios('https://pokeapi.co/api/v2/pokemon/1')
    .then((response) => {
      this.setState(
        {
          pokemon: response.data,
          loaded: true
        });
    });
  }

  render() {
    return (
      <div>
        {
          this.state.loaded ? 
          ( 
            <div>
              <img src={this.state.pokemon.sprites.front_default} />
              <p>{this.state.pokemon.name}</p>
              <p>{this.state.pokemon.id}</p>
            </div>
          ) :
          (
            <p>Loading...</p>
          )  
        }
      </div>
    );
  }

}

export default App;