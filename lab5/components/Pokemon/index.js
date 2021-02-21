class Pokemon {
  constructor(pokemon) {
    this.pokemon = pokemon;
  }

passPoke(){
  return (
    <div>
      <h1>(this.pokemon.name)</h1>
        <p>Pokemon ID <b>{this.pokemon.id}</b></p>
        <img src={this.pokemon.sprites.front_default} />
    </div>
  )
}

}

export default Pokemon
