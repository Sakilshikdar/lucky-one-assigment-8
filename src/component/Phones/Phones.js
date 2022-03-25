import React, { useEffect, useState } from 'react';
import Phone from '../Phone/Phone';
import './Phones.css'

const Phones = () => {
    const [phones, setPhones] = useState([])
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPhones(data))
    } ,[])
    return (
        <div className='phones-style'>
            <div>
            {
                phones.map( phone => <Phone
                keys = {phone.id}
                phone = {phone}
                ></Phone> )
            }
            </div>
            <div>
                <h1>Selectes Phoen</h1>
            </div>
        </div>
        
    );
};

export default Phones;