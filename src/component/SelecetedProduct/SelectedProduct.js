import React from 'react';
import './SelectedProduct.css';

const SelectedProduct = (props) => {
    const {name,img} = props.SelectedItem;
    return (
        <div className='SelectedProduct'>
            <img className='product-img' src={img} alt="" />
            <p className='product-name'>{name}</p>
            {/* props.SelectedItem */}
        </div>
    );
};

export default SelectedProduct;