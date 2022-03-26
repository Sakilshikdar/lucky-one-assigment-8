import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    const{name,img} = cart;
    return (
        <div className='phone-style'>
            
            <img src={img} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default Cart;