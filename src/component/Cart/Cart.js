import './Cart.css'
import React from 'react';

const Cart = () => {
    return (
        <div className='cart'>
                <h6>Selected Products</h6>
                <p className='added-product'></p>
                <div className='btn-container'>
                  <button className='calc-btn'>Choose 1 For Me</button> <br />
                  <button className='calc-again'>Choose Again</button>    
                </div>
        </div>
    );
};

export default Cart;
