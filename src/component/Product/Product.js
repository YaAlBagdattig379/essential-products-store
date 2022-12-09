import React from "react";
import Shop from "../Shop/Shop";

const Product = (props) => {
    const {name,price,img} = props.product;
    console.log(name)
    return (
        <div className='product'>
            <div className='product-container'>
            </div>
        </div>
    );
};

export default Product;