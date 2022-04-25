import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Pokelist extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          pokeLista: this.props.defaultList }
        // Event binding (Bindear eventos)
        console.log('CONSTRUCTOR')
    }
    async componentDidMount(){
        //Simula un retardo
        await new Promise((resolve) => setTimeout(() => resolve("Terminado"), 2000))

        const resp = await axios('https://pokeapi.co/api/v2/pokemon');
        const data = await resp.data;
        this.setState({
            pokeLista: data.results
        })
        console.log('componentDidMount');
    }
    componentDidUpdate(prevProps, prevState){
        console.log('prevProps: ', prevProps, 'prevState: ', prevState);
        console.log("Estado actual:",this.state.pokeLista);
        console.log('Props final: ',this.props.defaultList);
        console.log('componentDidUpdate');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    handlerLoadPokemons = async () => {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await resp.data;
        this.setState({
            pokeLista: data.results
        })
    }
    handlerResetPokemons = () => {
        this.setState({
            pokeLista: this.props.defaultList
        })
    }
    handlerUpdate = () => {
        this.forceUpdate()
    }
    render() {
        console.log('RENDER')
        return (
            <div>
                <h1>Lista Pokemon</h1>
                {
                  this.state.pokeLista.map(pokemon =>
                    <Fragment key={pokemon.name} >
                        <a href={pokemon.url} alt={pokemon.name + 'image'}> {pokemon.name} </a>
                        <p>{pokemon.url}</p>
                    </Fragment>
                  )
                }
                <button onClick={this.handlerLoadPokemons}>Load Pokemons</button>
                <button onClick={this.handlerResetPokemons}>Reset Pokemons</button>
                <button onClick={this.handlerUpdate}>Force Update</button>
            </div>
        );
    }
}
Pokelist.defaultProps = {
    defaultList: []
}
export default Pokelist;