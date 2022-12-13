import './Cart.css'
import React from 'react';
import Shop from '../Shop/Shop';
import SelectedProduct from '../SelecetedProduct/SelectedProduct';

//const Cart = ({cart}) => { // advanced
  const Cart = (props) => {//normal
    const {cart} = props;
      // console.log(props.cart)
    const chooseOneCart= (cartProducts)=>{
     for(const product of cartProducts){
      const productPrice = product.price;
      const checkPrice =(price)=>{
        return price > 500;
      }
      let findLPrice = productPrice.find(checkPrice);
     console.log(findLPrice)
    }
     /*
        <p id="demo"></p>
       <script>
          document.getElementById("demo").innerHTML = Math.random();
         </script>
      *       
<p id="demo"></p>

<script>
const ages = [3, 10, 18, 20];

document.getElementById("demo").innerHTML = ages.find(checkAge);

function checkAge(age) {
  return age > 18;
}
</s
      */
    }
   
    return (
        <div className='cart'>
                <h6>Selected Products</h6>
                {
                  cart.map(item => <SelectedProduct key={item.id} SelectedItem= {item}></SelectedProduct> )
                }
                <div className='choose-btn-container'>
                  <button onClick={ ()=>chooseOneCart(cart)}   className='choose-1btn'>Choose 1 For Me</button><br/>
                  <button className='choose-againBtn'>Choose Again</button>    
                </div>
        </div>
    );
};

export default Cart;
