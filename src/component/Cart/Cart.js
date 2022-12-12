import './Cart.css'
import React from 'react';
import Shop from '../Shop/Shop';

//const Cart = ({cart}) => { // advanced
  const Cart = (props) => {//normal
    const {cart} = props;
    let total = 0 ;
    // let name ='';
    for(let product of cart){
      product = product.name;
    }
    // const product = product.name;
    return (
        <div className='cart'>
                <h6>Selected Products</h6>
                {
                  cart.map(item => console.log(item))
                }
                <p className='total-cart'>price: {total}</p>
                {/* <h3>name: {product}</h3> */}
                <div className='btn-container'>
                  <button className='calc-btn'>Choose 1 For Me</button> <br />
                  <button className='calc-again'>Choose Again</button>    
                </div>
        </div>
    );
};

export default Cart;
