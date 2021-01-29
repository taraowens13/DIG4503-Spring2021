import axios from 'axios';
import chalk from 'chalk';

class Fetch {
    constructor(pokemon, color) {
        this.pokemon = pokemon;
        this.color = color;
    }
    fetch() {
        const pokeColor = this.color;
        axios('https://pokeapi.co/api/v2/pokemon/' + this.pokemon)

        .then(function (response) {
            const pokemon = response.data;

            console.log(chalk.hex(pokeColor)("This is a " + pokemon.name + " and its ID is " + pokemon.id));
        })
        .catch(function (error) {
            console.log(chalk.red("This is an invalid pokemon: " + error));
        });

    }}

export default Fetch;