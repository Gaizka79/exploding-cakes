import React, { Component } from 'react'
import ProductItem from '..'

export class ProductList extends Component {
  //rconst
  constructor(props) {
    super(props)

    this.state = {
      cakes: [
      { name:"limon", price: 5 },
      { name:"queso", price: 6, company:"Eseqeslite SL" },
      { name: "chocolate", price: 4, company: "Sargento de Queso" }
      ],
      lastCake: {}
    }
  }

addCake = () => {
  const name = prompt("Introduce tipo de tarta:");
  const price = prompt("Introduce precio");
  //alert(`Has añadido: ${name}, con un precio de ${price}`);
  // Añadir al estado lastCake el uĺtimo Cake
  const newCake = {name, price};
  this.setState({lastCake: newCake});
}

  render() {
    let cakes = this.state.cakes;
    let {name, price} = this.state.lastCake;
    
    return (
      <div>
          <ProductItem data={cakes[0]}/>
          <ProductItem data={cakes[1]}/>
          <ProductItem data={cakes[2]}/>
          <button onClick={this.addCake}>Clicka y añade tarta</button>
          {name && price ? 
            <p>Última tarta añadida: {name} Precio: {price}</p>
            :""}
      </div>
    )
  }
}

export default ProductList