import React, { Component } from 'react'
import ProductList from '../ProductItem/ProductList'
//import ProductItem from './ProductItem'
import Chefs from './Chefs';
import Weather from './Weather/Weather';

export class Main extends Component {
  render() {
    return (
        <div>
            <h1>Esto es el Main</h1>
            <h2>Futura Web - Exploding Cakes</h2>
            {/*<ProductList/>*/}
            {/*<Chefs/>*/}
            <Weather/>

        </div>
    )
  }
}
//<h1>Futura web - Exploding cakes</h1>
export default Main