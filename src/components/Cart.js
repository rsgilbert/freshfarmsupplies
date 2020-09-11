import React from 'react'

import cart from './cart.svg'
import './Cart.css'


export const Cart = props => {


    return (
        <div>
            <img 
                className="cart" 
                src={ cart } 
                alt="cart"/>
        </div>
    )

}