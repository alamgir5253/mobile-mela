import React, { useEffect, useState } from 'react';
import './Products.css'
import Mobile from '../mobileSection/Mobile';
import Card from "../card/Card"

const Produces = () => {
    const [products, setProducts] = useState([])
    const [card, setCard] = useState([])
    console.log()

    // clear product function 
    const clearProduct = () =>{
        
        setCard([])
    }
    // add to card function 
    const addToCard = (mobile)=>{
        const newCard = [...card, mobile]
        setCard(newCard)
    }
    useEffect(()=>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='product'>
            <div className='mobile-section'>
                <h3 className='mobile-heading'>mobile section</h3>
                <div   className='mobile-container'>
                {
                    products.map(product => <Mobile
                        key={product.id}
                        product ={product}
                        addToCard = {addToCard}
                        ></Mobile>)
                }
                </div>
                </div>
            <div className='card-section'>
            <h1>order summary</h1>
                {
                    card.map(mobile => <Card 
                        mobile ={mobile}
                        key = {mobile.id}></Card>)
                } 
               <div>
               <button className='clear-btn' onClick={clearProduct}>clear all</button>  
                </div> 
            </div>
        </div>
    );
};

export default Produces;