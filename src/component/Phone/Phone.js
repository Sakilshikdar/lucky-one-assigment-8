import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Phone.css'

const Phone = (props) => {
    const {phone, handleAdd} =props
    const {img, name, price} = phone
    return (
        <div className='phone'>
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <h3>Price: ${price}</h3>
            <button onClick={()=>handleAdd(phone)} className='add-btn'>ADD To CART
            <FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
        
    );
};

export default Phone;