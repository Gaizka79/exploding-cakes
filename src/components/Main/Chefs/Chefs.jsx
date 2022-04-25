import React, { Component, Fragment } from "react";
import Pokelist from "./Pokelist";
class Chefs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mostrar: false,
      lista: []
    }
  }
  handleShow = () => {
    this.setState({
      mostrar: !this.state.mostrar
    })
  }
  handleClick = () => {
    this.setState({
      lista: [
        {name: "Pokemon1", url: "url"},
        {name: "Pokemon2", url: "url"},
        {name: "Pokemon3", url: "url"},
        {name: "Pokemon4", url: "url"},
        {name: "Pokemon5", url: "url"}
      ]
    })
  }
  render(){
    
      return (
          <Fragment>
            <button onClick={this.handleClick}>Change Props from father</button>
            <button onClick={this.handleShow}>{this.state.show ? 'Ocultar' : 'Mostrar'}</button>
            { this.state.mostrar ? <Pokelist defaultList={this.state.lista}></Pokelist> : null }
          </Fragment>
      );
  }
}
export default Chefs;