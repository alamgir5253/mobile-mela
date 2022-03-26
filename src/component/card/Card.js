import React from 'react';
import './Card.css'
const Card = ({mobile}) => {
    const {name} = mobile
    return (
        <div>
           
            <p>{name}</p>
        </div>
    );
};

export default Card;