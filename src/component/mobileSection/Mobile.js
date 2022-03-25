import React from 'react';
import './Mobile.css'

const Mobile = ({product}) => {
    const { name, price, img} = product
    return (
        <div>
            <div className='mobile'>
            <img src={img} alt="" />
            <h3>name: {name}</h3>
            <p>price: {price}</p>
            </div>
        </div>
    );
};

export default Mobile;