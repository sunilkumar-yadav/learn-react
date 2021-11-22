import React from "react";
import Product from "../components/Product.js"

class ProductList extends React.Component {

    render() {
        const plist = {
            productId: 1000,
            productName: 'Nokia',
            productPrice: 1000,
            productImage:
                'https://upload.wikimedia.org/wikipedia/commons/e/ea/Nokia_9_Pureview_2.jpg',
            productStock: true,
        };
        const plist1 = {
            productId: 10001,
            productName: 'Nokia 9000',
            productPrice: 10001,
            productImage:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Nokia-9110-9000.jpg/330px-Nokia-9110-9000.jpg',
            productStock: false,
        };
        return (

            <div>
                <Product data={plist} btnClick={(data) => console.log("Added to Cart "+data)}></Product>
                <Product data={plist} wishlist={true} btnClick={(data) => console.log("Added to Wishlist "+ data)}></Product>
                <Product data={plist1} wishlist={true} btnClick={(data) => console.log("Added to Wishlist "+ data)}></Product>


            </div>
        );
    }

}

export default ProductList;