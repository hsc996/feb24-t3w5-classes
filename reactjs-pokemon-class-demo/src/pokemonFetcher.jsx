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

        for (let index = 0; index < 6; index++){

            // Generate a random number for random pokemon number
            let randomNumber = Math.floor(Math.random() * 1025) + 1;

            // Pass random Pokemon number into fetch request
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
            let data = await response.json();

            // Set fetch response data into state
            // this.setState({pokemonList: [data]});
            // this.setState({pokemonList: [...this.state.pokemonList, data]}); // Make a new array witht he combination of these 2 things
            this.setState((previousState) => {
                return {
                    pokemonList: [...previousState.pokemonList, data]
                }
            }); // Modifying state from previousState allows you to modify from the latest version of the state -- this will protect your data, paritcularly useful will large datasets. Provides stability.
        }


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
