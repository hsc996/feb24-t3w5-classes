import React from 'react';
import PokemonCard from './pokemonCard';

// const pokemonList = ['pikachu', 'squirtle', 'mewtwo'];

export default class PokemonFetcher extends React.Component {

	constructor(props){
		// super is React.Component 
		super(props);

		this.state = {
			pokemonList: []
		}
	}

    // Runs automatically once when the page first loads
    async componentDidMount(){
        // Generate a random number for random pokemon number
        let randomNumber = Math.floor(Math.random() * 1025) + 1;

        // Pass random Pokemon number into fetch request
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
        let data = await response.json();

        // Set fetch response data into state
        this.setState({pokemonList: [data]});

        console.log("PokemonFetcher first load on the page");

    }

	render(){
		return (
			<div>
				<h1>Pokemon Data</h1>
				{this.state.pokemonList.map(pokemon => {
					return <PokemonCard name={pokemon.name} />
				})}
				
				<button onClick={() => {
					this.setState({pokemonList: []});
				}}>
					Empty the state
				</button>
			</div>
			
		);
	}
}
