import React from 'react';

const Mobile = ({product}) => {
    const { name, price, img} = product
    return (
        <div>
            <img src={img} alt="" />
            <h3>name: {name}</h3>
            <p></p>
            <h3>price: {price}</h3>
        </div>
    );
};

export default Mobile;