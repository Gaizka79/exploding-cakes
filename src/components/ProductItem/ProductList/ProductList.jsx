import React, { Component } from 'react'
import ProductItem from '..'
import dataCakes from './cakes.json'

export class ProductList extends Component {
  //rconst
  constructor(props) {
    super(props)

    this.state = {
      cakes: dataCakes,
      lastCake: {}
    }
  }

addCake = (event) => {
  //const name = prompt("Introduce tipo de tarta:");
  //const price = prompt("Introduce precio");
  //alert(`Has añadido: ${name}, con un precio de ${price}`);

  event.preventDefault();

  const name = event.target.cake.value;
  const price = event.target.price.value;
  const image = event.target.image.value;

  const newCake = {name, price, image};

  //Añadir al estado cakes el nuevo lastCake
  this.setState({lastCake: newCake});

  //Añadir al estado cakes el nuevo Cake
  this.setState({cakes:[...this.state.cakes, newCake]});
}

paintCakes = () => {
  return this.state.cakes.map((cake, i) => <ProductItem data={cake} key={i} 
    remove={()=>this.removeCake(i)}/>)
}

removeAllCakes = () => this.setState({cakes:[]});

removeCake = (i) => {
  const remainingCakes = this.state.cakes.filter((cake,j) => i!==j)
  console.log(remainingCakes);
  this.setState({cakes:remainingCakes});
}

resetCakes = () => this.setState({cakes:dataCakes});

  render() {
    //let cakes = this.state.cakes;
    let {name, price} = this.state.lastCake;
    
    return (
      <div>

        <h1>Añadir nuevo cake</h1>
        <form onSubmit={this.addCake}>
          <label htmlFor="cake">Nombre tarta:</label><br />
          <input type="text" id="cake" name="cake" /><br />

          <label htmlFor="price">Precio:</label><br />
          <input type="text" id="price" name="price" /><br />

          <label htmlFor="image">Imagen:</label><br />
          <input type="text" id="image" name="image" /><br />

          <input type="submit" value="Enviar" />
        </form>

        {//{this.paintCakes()}  Entre {} para llamar a JavaScript
        /*<ProductItem data={cakes[0]}/>
          <ProductItem data={cakes[1]}/>
          <ProductItem data={cakes[2]}/> */}
        {this.paintCakes()} 
          
        <button onClick={this.addCake}>Clicka y añade tarta</button>
        <button onClick={this.removeAllCakes}>Borrar tartas</button>
        <button onClick={this.resetCakes}>Recarga de tartas</button>
        <button onClick={() => this.removeCake(0)}>Borrar primera tarta</button>
        {name && price ? 
          <p>Última tarta añadida: {name} Precio: {price}</p>
          :""}
      </div>
    )
  }
}

export default ProductList