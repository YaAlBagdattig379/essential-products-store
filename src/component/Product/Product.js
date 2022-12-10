import { parse } from "@fortawesome/fontawesome-svg-core";
import './Product.css'
import React from "react";

const Product = (props) => {
    // console.log(props.product.img)
    const {name,price,img} = props.product;
    return (
        <div className='product'>
                <img src={img} alt=""></img>
                <div className="product-info" >
                   <h4>{name}</h4>
                   <p><small>price: ${price}</small></p>
                </div>
                <button className="btn-cart">Add to Cart</button>
        </div>
    );
};
export default Product;