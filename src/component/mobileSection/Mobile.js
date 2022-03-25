import React from 'react';
import './Mobile.css'
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Mobile = ({product}) => {
    const { name, price, img} = product
    return (
        <div>
            <div className='mobile'>
            <img src={img} alt="" />
            <h3>name: {name}</h3>
            <p>price: {price}</p>
            <div className='addToCard'>
                <button>add to card <AiOutlineShoppingCart className='icon' /></button>
                <p></p>
            </div>
            </div>
        </div>
    );
};

export default Mobile;