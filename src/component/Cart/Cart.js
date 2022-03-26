import React from 'react';

const Cart = ({cart}) => {
    const{name,img} = cart
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default Cart;