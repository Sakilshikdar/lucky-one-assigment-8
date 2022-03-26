import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Phone from '../Phone/Phone';
import './Phones.css'

const Phones = () => {
    const [phones, setPhones] = useState([])
    const [carts, setCart] = useState([])
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPhones(data))
    } ,[])
   
    const handleAdd = (phone) =>{
            const findItem = carts.find(p => p == phone)
            if(!findItem){
                const newCart = [...carts, phone]
                if(newCart.length === 5){
                   
                }
                else{

                    setCart(newCart)
                }
        }
    }  
    const resetBtn = () => {
        setCart([])
    }
    const randomCart = () => {
        if(carts.length > 0) {
            const randomValue = Math.floor(Math.random() * carts.length);
            const luckyNumber = carts[randomValue];
            setCart([luckyNumber])
        }
    }
    return (
        <div className='phones-style'>
            <div className='singlePhone'>
            {
                phones.map( phone => <Phone
                key = {phone.id}
                phone = {phone}
                handleAdd = {handleAdd}
                ></Phone> )
            }
            </div>
            <div className='cart'>
            <h1>Selects Phone</h1>
            
         {
            carts.map(cart => <Cart
            key={cart.id}
                cart = {cart}
                >
                </Cart>)
            }
             <button
              onClick={randomCart}>CHOOSE 1 FOR ME</button>
             <br /> 
            <button onClick={resetBtn}>CHOOSE AGAIN</button>
            </div>
        </div>
        
    );
};

export default Phones;