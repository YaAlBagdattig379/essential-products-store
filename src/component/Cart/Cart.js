import './Cart.css'
import React from 'react';
import Shop from '../Shop/Shop';

//const Cart = ({cart}) => { // advanced
  const Cart = (props) => {//normal
    const {cart} = props;
    let name = '' ;
    let total = 0 ;
    for(const product of cart){
      total = total + product.price;
      // console.log(name)
      name = name + product.name;
      console.log(name)
    }
    // console.log(cart)
    return (
        <div className='cart'>
                <h6>Selected Products {cart.length}</h6>
                <p className='total-cart'>price: {total}</p>
                <p className='added-cart'>{name}</p>
                <div className='btn-container'>
                  <button className='calc-btn'>Choose 1 For Me</button> <br />
                  <button className='calc-again'>Choose Again</button>    
                </div>
        </div>
    );
};

export default Cart;
