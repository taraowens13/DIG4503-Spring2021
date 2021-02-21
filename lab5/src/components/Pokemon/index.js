class Pokemon {
  constructor(pokemon) {
    this.pokemon = pokemon;
  }

passPoke(){
  return (
    <div>
      <p>Pokemon name: <b>{this.pokemon.name}</b></p>
        <p>Pokemon ID: <b>{this.pokemon.id}</b></p>
        <img src={this.pokemon.sprites.front_default} />
    </div>
  )
}

}

export default Pokemon
