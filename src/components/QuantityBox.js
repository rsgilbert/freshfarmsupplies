import React from 'react'
import './QuantityBox.css'


export const QuantityBox = props => {

    const onQuantityChanged = e => props.onQuantityChanged(e.target ? e.target.value : 0)

    return  (
        <form className="quantity-form">
            <label  
                htmlFor="quantity"
                className="quantity-header">
                Quantity
            </label>
            <div className="quantity-input">
                <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    value={ props.quantity }
                    onChange={onQuantityChanged}
                    />
            </div>
        </form>
    )
}