import './Cart.css'
import React from 'react';
import Shop from '../Shop/Shop';
import SelectedProduct from '../SelecetedProduct/SelectedProduct';

//const Cart = ({cart}) => { // advanced
  const Cart = (props) => {//normal
    const {cart} = props;
      // console.log(props.cart)
    const chooseOneCart= (cartProducts)=>{
    let chooseCartName = cartProducts[Math.floor(Math.random() * cartProducts.length)];
     console.log(chooseCartName.name)
    // }
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
                <h3>you have choosen {} item.</h3>
                <div className='choose-btn-container'>
                  <button onClick={ ()=>chooseOneCart(cart)}   className='choose-1btn'>Choose 1 For Me</button><br/>
                  <button className='choose-againBtn'>Choose Again</button>    
                </div>
        </div>
    );
};

export default Cart;
