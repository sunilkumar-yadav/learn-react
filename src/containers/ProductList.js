import React from "react";
import Product from "../components/Product.js";
import {getProducts} from "../services/ProductService.js"

class ProductList extends React.Component {
state = {plist1:[], hasError:false} //inherited from base class
componentDidMount(){
    this.getData();
}

getData(){
    getProducts()
    .then((res)=>{
        console.log("RESPONSE",res.data);
        //this.state.plist1=res.data;
        this.setState({plist1:res.data});
        //setState will call render
    })
    .catch((err=>{
        console.log("RESPONSE",err);
        this.setState({plist1:err});
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
                    this.state.plist1.map((item,index) => (
                        <Product data={item} key={item.productId} wishlist={true}  btnClick={(data,ev) => console.log("Added to Cart " + data + ev)} />
                    )
                    )
                }


            </div>
        );
    }

}

export default ProductList;