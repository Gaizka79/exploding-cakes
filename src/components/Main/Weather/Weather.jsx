import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Citylist from './CityWeather';

class Weather extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mostrar: false,
      cities: {},
      lastCities: {}
    }
  }

addCity = (event) => {
  event.preventDefault();

  const newCity = event.target.city.value;
  this.setState({lastCities: newCity});
  this.setState({cities:[...this.state.cities, newCity]})

}

  handleShow = () => {
    this.setState({
      mostrar: this.state.mostrar
    })
  }
  handleClick = () => {
    this.setState({
      mostrar: !this.state.show
      
    })
    console.log('click');
  }

  render() {
    return (
      <div>
        <label htmlFor="city">Ciudad: </label>
        <input onChange={this.handleClick} type="text" id="city" name="city"/>

        {/*<button>{this.state.mostrar ? 'Add' : !this.state.show}</button>*/}
        <input type="submit" value={this.state.mostrar ? 'Add' : !this.state.show} />

      </div>
     
    
      //*<div>Weather</div>;*/}
    )
  }
}

export default Weather;
