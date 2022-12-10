import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop} from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import Shop from '../Shop/Shop';

const Header = () => {
    return (
        <div className='header'>
            <h3>Confused  buyer's  Store <FontAwesomeIcon className='shop-icon' icon={faShop}></FontAwesomeIcon></h3>
            <p>Choose 4 Products</p>
        </div>
    );
};

export default Header;