import { parse } from "@fortawesome/fontawesome-svg-core";
import './Product.css'
import React from "react";

const Product = (props) => {
    // console.log(props.product.img)
    const {name,price,img} = props.product;
    console.log(img)
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
/**
 *  <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className="product-name">{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={ () => props.handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
            </button>
        </div>
 * 
 */
export default Product;