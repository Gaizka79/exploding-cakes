import React, { Component } from 'react'

export class ProductItem extends Component {
  //rconst
  constructor(props) {
    super(props)
  
    this.state = {  //state guarda los datos del componente en la memoria
      company: this.props.data.company || "Cat Cake SA"
    }
  }
  render() {
    //const {name, price} = this.props.data; 
      //Para cambiar: <h4>Tarta de {this.props.data.name}</h4> x--> <h4>Tarta de {name}</h4>
    return (
      <div>
          <h4>Tarta de {this.props.data.name}</h4>
          <p>Precio: {this.props.data.price}</p>
          <p>Company: {this.state.company}</p>
      </div>
    )
  }
}

export default ProductItem