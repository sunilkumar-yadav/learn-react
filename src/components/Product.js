import React from 'react';

class Product extends React.Component {
  render() {
    const data = {
      productId: 1000,
      productName: 'Mobile',
      productPrice: 1000,
      productImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/DynaTAC8000X.jpg/110px-DynaTAC8000X.jpg',
      productStock: true,
    };
    return (
      <div>
        <img src={data.productImage} alt="Mobile" />
        <h3>{data.productName}</h3>
        <h4>{data.productPrice}</h4>
        <button> Add to Cart</button>
      </div>
    );
  }
}
export default Product;
