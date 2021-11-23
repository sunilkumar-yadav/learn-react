import React from "react";
import Product from "../components/Product.js";
import {getProducts} from "../services/ProductService.js"

class ProductList extends React.Component {
plist1 =[];//Global Variable
componentDidMount(){
    this.getData();
}

getData(){
    getProducts()
    .then((res)=>{
        console.log("RESPONSE",res.data);
        this.plist1=res.data;
    })
    .catch((err=>{
        console.log("RESPONSE",err);
    }))
}

    render() {
        const plist = [{
            productId: 1000,
            productName: 'Nokia',
            productPrice: 1000,
            productImage:
                'https://upload.wikimedia.org/wikipedia/commons/e/ea/Nokia_9_Pureview_2.jpg',
            productStock: true,
        },
        {
            productId: 1001,
            productName: 'Nokia 9000',
            productPrice: 1500,
            productImage:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Nokia-9110-9000.jpg/330px-Nokia-9110-9000.jpg',
            productStock: false,
        },
        {
            productId: 1002,
            productName: 'Nokia 9001',
            productPrice: 2000,
            productImage:
                'https://images.pexels.com/photos/8533741/pexels-photo-8533741.jpeg',
            productStock: false,
        }]
        return (

            <div>
                {/*
                <Product data={plist} btnClick={(data) => console.log("Added to Cart "+data)}></Product>
                <Product data={plist} wishlist={true} btnClick={(data) => console.log("Added to Wishlist "+ data)}></Product>
                <Product data={plist1} wishlist={true} btnClick={(data) => console.log("Added to Wishlist "+ data)}></Product>

                */}
                {
                    this.plist1.map((item) => (
                        <Product data={item} key={item.productId} wishlist={true}  btnClick={(data) => console.log("Added to Cart " + data)} />
                    )
                    )
                }


            </div>
        );
    }

}

export default ProductList;