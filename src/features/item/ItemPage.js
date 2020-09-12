import React, { useState } from 'react'
import { getIdFromWindow } from '../../functions'
import { useSelector, useDispatch } from 'react-redux'
import { selectItem } from '../itemlist/itemlistSlice'
import  { cartAdded, selectIsCarted, selectCartItemQuantity } from '../cart/cartSlice'
import classNames from 'classnames'


import './ItemPage.css'
import { QuantityBox } from '../../components/QuantityBox'

export const ItemPage = props => {
    const id = getIdFromWindow()
    const item = useSelector(state => selectItem(state, id))
    const pictures = item.pictures
    const [currentPictureIdx, setCurrentPictureIdx] = useState(0)
    const dispatch = useDispatch()
    const isCarted = useSelector(state => selectIsCarted(state, item.id))
    const cartItemQuantity = useSelector(state => selectCartItemQuantity(state, item.id))
    const [itemQuantity, setItemQuantity] = useState(isCarted ? cartItemQuantity : 1)

    const onQuantityChanged = itemQuantity => setItemQuantity(itemQuantity)

    
    const renderNonCurrentPictures = () => pictures.map((picture, index) => {
        const changeCurrentPicture = () => setCurrentPictureIdx(index)
        
        if(pictures[currentPictureIdx] !== picture) {
            return (
                <li  
                    className="item-thumbnail"
                    onClick={changeCurrentPicture}
                    key={index}
                    >
                    <img 
                        src={picture}
                        className="thumbnail-picture"
                        />
                </li>
            )
        } 
    })

    const addToCart = () => {
        dispatch(cartAdded({ 
            ...item,
            itemQuantity
        }))
    }

    return (
        <div className="itempage">
            <div>
                <div className="item-images">
                    <div>
                        <img    
                            className="item-current-image"
                            src={pictures[currentPictureIdx]}
                            />
                    </div>
                    <div className="thumbnails">
                        <ul className="thumbnail-list">
                            { renderNonCurrentPictures() }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="item-details">
                <div>
                    <h1>
                        {item.name}
                    </h1>
                    <p>
                        { item.specs}
                    </p>
                    <h2>{item.price}</h2>
                    <div>
                        <QuantityBox 
                            quantity={itemQuantity}
                            onQuantityChanged={onQuantityChanged} />
                    </div>
                </div>
                <div className="item-actions">
                    <button 
                        className="add-to-cart"
                        onClick={addToCart}
                        className={classNames({
                            iscarted: isCarted
                        })}>
                        { isCarted ? "CARTED" : "ADD TO CART" }
                    </button>
                    <button className="buy-it-now">
                        BUY IT NOW
                    </button>
                </div>

                <div className="item-info">
                    
                    <p>
                        {item.description}
                    </p>
                    <p>{item.quantity} </p>
                </div>
                

            </div>
        </div>
    )
}