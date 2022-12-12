import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css';
const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    // add to cart  
    //const addToCart =({product,addToCart})=>{ // avanced 
    const addToCart =(selectedProduct)=>{
    //    console.log(cart)
       if(cart.length < 4){
        const newCart =[...cart,selectedProduct]
        setCart(newCart)
       }else{
        alert('you are not able to pick up more than 4 products !')
       }
    };
    return (
        <div className='shop-container'>
           <div className='product-container'>
             {
                 products.map(product=> <Product 
                 product ={product} 
                 key={product.id}
                 addToCart={addToCart}
                 ></Product>)
             }
           </div>    
           <div className='cart-container'>
               <Cart cart={cart} ></Cart>
           </div>
        </div>
    );
};
export default Shop;