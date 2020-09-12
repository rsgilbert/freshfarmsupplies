import React from 'react'

import cart from './cart.svg'
import './Cart.css'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../features/cart/cartSlice'
import { useHistory } from 'react-router-dom'


export const Cart = props => {
    const cartCount = useSelector(selectCartCount)
    const history = useHistory()

    const goToCart = () => history.push("/cart")
   

    return (
        <div 
            className="cart"
            onClick={goToCart}>
            <img 
                className="cart-img" 
                src={ cart } 
                alt="cart"/>
            <div   
                className="cart-count"
                >
                <span>{ cartCount }</span>
            </div>
        </div>
    )

}