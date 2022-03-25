import React, { useEffect, useState } from 'react';
import './Products.css'
import Mobile from '../mobileSection/Mobile';

const Produces = () => {
    const [products, setProducts] = useState([])
    // console.log(products)
    useEffect(()=>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='product'>
            <div className='mobile-section'>
                <h3>mobile section</h3>
                <div   className='mobile-container'>
                {
                    products.map(product => <Mobile
                        key={product.id}
                        product ={product}
                        ></Mobile>)
                }
                </div>
                </div>
            <div className='card-section'> card section</div>
        </div>
    );
};

export default Produces;