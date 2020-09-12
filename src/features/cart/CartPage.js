import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllCartItems, cartItemQuantityUpdated } from './cartSlice'
import { Link } from 'react-router-dom'
import { QuantityBox } from '../../components/QuantityBox'


export const CartPage = props => {
    const cart = useSelector(selectAllCartItems)
    const dispatch = useDispatch()

    

    const renderEmptyCart = (
        <div>
            <p>
                Cart is empty. Please add some <Link to="/">items</Link>
            </p>
        </div>
    )


    const renderCartItems = () => cart.map(cartItem => { 

        const setItemQuantity = itemQuantity => {
            dispatch(cartItemQuantityUpdated({
                cartItemId: cartItem.id,
                itemQuantity
            }))
        }

        
        return (
            <li className="cart-item">
                <div className="cart-item-info">             
                    <p className="info-desc">Name</p>
                    <p>{ cartItem.name }</p>
                </div>
                <div className="cart-item-info">
                    <QuantityBox 
                        quantity={cartItem.itemQuantity}
                        onQuantityChanged={setItemQuantity} />
                </div>
                <div className="cart-item-info">             
                    <p className="info-desc">Name</p>
                    <p>{ cartItem.price }</p>
                </div>
                <div className="cart-item-info">
                    <p className="info-desc">Total</p>
                    <p>{ cartItem.itemQuantity * cartItem.price }</p>
                </div>
            </li>
        )
    })
    

    return (
        <div className="cartpage">
            <h1>Cart</h1>
            { !cart.length && renderEmptyCart }
            { renderCartItems() }
        </div>
    )
}