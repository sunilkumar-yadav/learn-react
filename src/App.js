import React from 'react';
import './style.css';
import Demo from './Demo.js';
import Product from './components/Product.js';
import ProductList from './containers/ProductList.js';
import PureComponents from './components/PureComponents.js';
import CompUpdate from './components/CompUpdate.js';
import Checkout from './components/Checkout.js';

export default function App() {
  return (
    <div className="App">
      <Checkout />
      <CompUpdate />
     <PureComponents />
      <ProductList />
    </div>
  );
}
