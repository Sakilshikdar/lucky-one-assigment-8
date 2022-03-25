import React from 'react';

const Phone = (props) => {
    const {img, name, price} = props.phone
    return (
        <div>
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <h3>Price: {price}</h3>
        </div>
        
    );
};

export default Phone;