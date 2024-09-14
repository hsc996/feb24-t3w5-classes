import React from 'react';

export default class PokemonCard extends React.Component{
    
    // constructor(props){
    //  super(props);
    // }
    componentWillUnmount(){
        console.log("Card for Pokemon is being unloaded: " + this.props.name);
    }
    render(){
        return(
            <h1>
                {this.props.name}
            </h1>
        )
    }
    
}