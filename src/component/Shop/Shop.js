import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState([]);
    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop-container'>
           <div className='product-container'>
             {
                 products.map(product=> <Product product ={product} key={product.id}>
                 </Product>)
             }
           </div>    
           <div className='cart-container'>
               <Cart></Cart>
           </div>
        </div>
        
    );
};

export default Shop;