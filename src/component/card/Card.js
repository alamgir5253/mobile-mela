import React from 'react';
import './Card.css'
const Card = ({mobile}) => {
    const {name} = mobile
    return (
        <div>
           
            <p className='product-name'>{name}</p>
        </div>
    );
};

export default Card;