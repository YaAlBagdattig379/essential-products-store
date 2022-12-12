import './Cart.css'
import React from 'react';
import Shop from '../Shop/Shop';
import SelectedProduct from '../SelecetedProduct/SelectedProduct';

//const Cart = ({cart}) => { // advanced
  const Cart = (props) => {//normal
    const {cart} = props;
    /*
    let total = 0 ;
    // let name ='';
    for(let product of cart){
      product = product.name;
    }
    let product = product.name;
    */
    return (
        <div className='cart'>
                <h6>Selected Products</h6>
                {
                  cart.map(item => <SelectedProduct key={item.id} SelectedItem= {item}></SelectedProduct> )
                }
                {/* <p className='total-cart'>{console.log(item.name)}</p> */}
                {/* <h3>name: {product}</h3> */}
                <div className='btn-container'>
                  <button className='choose-1btn'>Choose 1 For Me</button> <br />
                  <button className='choose-againBtn'>Choose Again</button>    
                </div>
        </div>
    );
};

export default Cart;
