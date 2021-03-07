class Pokemon {
  constructor(pokemon) {
    this.pokemon = pokemon;
  }

passPoke(){
  return (
    <div>
        <img src={this.pokemon.sprites.front_default} />
        <p>Pokemon name: <b>{this.pokemon.name}</b></p>
        <p>Pokemon ID: <b>{this.pokemon.id}</b></p>
    </div>
  )
}

}

export default Pokemon
