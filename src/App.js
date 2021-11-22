import React from 'react';
import './style.css';
import Demo from './Demo.js';
import Product from './components/Product.js';

export default function App() {
  return (
    <div className="App">
      <Demo />
      <Product />
    </div>
  );
}
