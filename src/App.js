import React from 'react';
import './style.css';
import Demo from './Demo.js';
import Product from './components/Product.js';
import ProductList from './containers/ProductList.js';

export default function App() {
  return (
    <div className="App">
     
      <ProductList />
    </div>
  );
}
