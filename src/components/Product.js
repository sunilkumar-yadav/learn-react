import React from 'react';

class Product extends React.Component {

  renderStock(){
    if(this.props.data.productStock)
    {
      return <button>Add to Cart</button>
    }
    else
    {
      return <button>Out of Stock</button>
    }
  }

  render() {
    const data = this.props.data;
    return (
      <div>
        <img src={data.productImage} alt="Mobile" width="150" height="200" />
        <h3>{data.productName}</h3>
        <h4>{data.productPrice}</h4>
        {/*        <button> Add to Cart</button>*/}

        {/*Conditional Rendering*/}
        <button onClick={()=> this.props.btnClick(data.productName)}> Add to {this.props.wishlist ? "Wishlist" : "Cart"}</button>
     
        {/* {this.renderStock()} */}
        {this.renderStock()}
      
      </div>
    );
  }
}
export default Product;
