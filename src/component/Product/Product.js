import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
// import { AddToCart } from "../../Utilities/FakeDb";

const Product = (props) => {
    const {name,price,img} = props.product;
    // console.log(img)
    return (
        <div className='product'>
              <img src={img} alt=""></img>
              <div className="product-info">
                  <h4>{name}</h4>
                  <p><small>price: ${price}</small></p>
              </div>
              {/**used wrapped in here */}
              <button onClick={()=> props.addToCart(props.product)} className="btn-cart">Add To Cart <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
              </button>
        </div>
    );
};
export default Product;