import React from 'react'

import cart from './cart.svg'
import './Cart.css'


export const Cart = props => {


    return (
        <div className="cart">
            <img 
                className="cart-img" 
                src={ cart } 
                alt="cart"/>
            <div   
                className="cart-count"
                >
                <span>10</span>
            </div>
        </div>
    )

}