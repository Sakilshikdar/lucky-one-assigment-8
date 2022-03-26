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
        if(carts.length >5){
            console.log('length is big')
        }
        else{
            
            const findItem = carts.find(p => p == phone)
            if(!findItem){
                const newCart = [...carts, phone]
                setCart(newCart)
        }
        }
    }
        
    const resetBtn = () => {
        setCart([])
    }
    const randomCart =() =>{
        let value = 0;
        if(carts.length !== 0){
            value = Math.round(Math.random() * carts.length)
            console.log(value);
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
                cart = {cart}
                >
                </Cart>)
            }
             <button onClick={randomCart()}>CHOOSE 1 FOR ME</button>
             <br /> 
            <button onClick={()=>resetBtn()}>CHOOSE AGAIN</button>
            </div>
        </div>
        
    );
};

export default Phones;